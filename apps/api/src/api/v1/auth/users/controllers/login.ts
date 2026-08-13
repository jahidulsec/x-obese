import { createLoginDTOSchema } from "@repo/validator";
import { Hono } from "hono";
import { validator } from "hono/validator";
import * as userService from "../../../../../services/user-profile.ts";
import * as authService from "../../../../../services/auth.ts";
import { ErrorFactory } from "../../../../../utils/error.ts";
import { sendSMS } from "../../../../../libs/sms.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const userLogin = new Hono();

userLogin.post(
  "/",
  validator("json", (value) => {
    const parsed = createLoginDTOSchema.parse(value);
    return parsed;
  }),
  async (c) => {
    const validatedData = c.req.valid("json");

    // check user
    const user = await userService.getSingleByMobile(validatedData.mobile);

    if (!user) {
      throw ErrorFactory.create(
        "NOT_FOUND",
        "User does not exist with this mobile",
      );
    }

    // for test
    if (!user?.mobile.startsWith("01")) {
      const created = await authService.getLoginOtp(validatedData, true);

      const responseData = {
        message: "OTP is sent to " + validatedData.mobile,
        data: {
          id: created.id,
          userId: created.userId,
          mobile: validatedData.mobile,
          expireAt: created.expiresAt,
        },
      };

      //send success response
      return c.json(apiResponse.single(responseData), 200);
    }

    //create new with validated data
    const created = await authService.getLoginOtp(validatedData);

    // send otp to mobile
    const message = `Your One-Time Password (OTP) for X-Obses login is ${created.code}.`;

    // avoid test number
    if (created.mobile) {
      sendSMS(created.mobile, message).catch((err) => console.error(err));
    }

    return c.json(
      apiResponse.single({
        message: "OTP is sent to " + validatedData.mobile,
        data: {
          id: created.id,
          userId: created.userId,
          mobile: validatedData.mobile,
          expireAt: created.expiresAt,
        },
      }),
    );
  },
);

export { userLogin };
