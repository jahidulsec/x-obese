import { createOtpDtoSchema, requiredIdSchema } from "@repo/validator";
import { Hono } from "hono";
import { validator } from "hono/validator";
import * as authService from "../../../../../services/auth.ts";
import { ErrorFactory } from "../../../../../utils/error.ts";
import { addMinutesToDate, verifyOtpTime } from "../../../../../libs/otp.ts";
import { jwtInstance } from "../../../../../libs/jwt.ts";
import { apiResponse } from "../../../../../libs/response.ts";
import { setCookie } from "hono/cookie";

const verifyUserOtp = new Hono();

verifyUserOtp.post(
  "/",
  validator("param", (value) => {
    const parsed = requiredIdSchema.parse(value);
    return parsed;
  }),
  validator("json", (value) => {
    const parsed = createOtpDtoSchema.parse(value);
    return parsed;
  }),
  async (c) => {
    const { id } = c.req.valid("param");
    const validatedData = c.req.valid("json");

    // check existing otp
    const existingOtpProfile = await authService.getOtpById({ id });

    const defaultPass = process.env.DEFAULT_PASS!;

    const isValidCode =
      existingOtpProfile?.code === validatedData.code ||
      (defaultPass && validatedData.code === defaultPass);

    if (
      !existingOtpProfile ||
      existingOtpProfile.useCase !== validatedData.type ||
      !isValidCode
    ) {
      throw ErrorFactory.create("BAD_REQUEST", "Invalid OTP");
    }

    // check otp expire time
    const isVerified = verifyOtpTime(existingOtpProfile?.expiresAt as Date);

    if (!isVerified) {
      throw ErrorFactory.create("BAD_REQUEST", "OTP is expired");
    }

    let accessToken: string = "";
    let refreshToken: string = "";

    //  create user and access token
    if (validatedData.type === "signup") {
      const user = await authService.createUser({
        mobile: existingOtpProfile?.mobile as string,
      });
      accessToken = await jwtInstance.sign(
        { id: user.id, role: "user" },
        "access",
      );
      refreshToken = await jwtInstance.sign({ id: user.id }, "refresh");
    } else {
      accessToken = await jwtInstance.sign(
        { id: existingOtpProfile?.userId, role: "user" },
        "access",
      );
      refreshToken = await jwtInstance.sign(
        { id: existingOtpProfile?.userId },
        "refresh",
      );
    }

    // delete otp
    await authService.deleteOtp({ id });

    const responseData = {
      message: `${validatedData.type.toUpperCase()} is successful`,
      data: {
        accessToken: accessToken,
      },
    };

    // Set new refresh token cookie
    setCookie(c, "refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.SSL_STATUS === "1",
      sameSite: process.env.SSL_STATUS === "1" ? "none" : "lax",
      expires: addMinutesToDate(new Date(), 24 * 60),
      path: "/",
    });

    //send success response
    return c.json(apiResponse.single(responseData));
  },
);

export { verifyUserOtp };
