import { Hono } from "hono";
import { validator } from "hono/validator";
import { revokeTokenSchema } from "@repo/validator";
import { jwtInstance } from "../../../../../libs/jwt.ts";
import * as userService from "../../../../../services/user-profile.ts";
import { ErrorFactory } from "../../../../../utils/error.ts";
import { apiResponse } from "../../../../../libs/response.ts";
import { setCookie } from "hono/cookie";
import { addMinutesToDate } from "../../../../../libs/otp.ts";

const revokeUserToken = new Hono();

revokeUserToken.post(
  "/revoke/user",
  validator("json", (value) => {
    const parsed = revokeTokenSchema.parse(value);
    return parsed;
  }),
  async (c) => {
    const data = c.req.valid("json");

    // decrypt token
    const decryptData: any = await jwtInstance.verify(
      data.refreshToken,
      "refresh",
    );

    // check user
    const user = await userService.getSingle({ id: decryptData.id });

    if (!user) throw ErrorFactory.create("NOT_FOUND", "User does not exist");

    // create new access token
    const accessToken = await jwtInstance.sign(
      { id: user.id, role: "user" },
      "access",
    );
    const refreshToken = await jwtInstance.sign({ id: user.id }, "refresh");

    // Set new refresh token cookie
    setCookie(c, "refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.SSL_STATUS === "1",
      sameSite: process.env.SSL_STATUS === "1" ? "none" : "lax",
      expires: addMinutesToDate(new Date(), 24 * 60),
      path: "/",
    });

    return c.json(
      apiResponse.single({
        message: "Revoke access token successful",
        data: {
          accessToken: accessToken,
        },
      }),
    );
  },
);

export { revokeUserToken };
