import { createLoginDTOSchema } from "@repo/validator";
import { Hono } from "hono";
import { validator } from "hono/validator";
import { ErrorFactory } from "../../../../../utils/error.ts";
import * as userService from "../../../../../services/user-profile.ts";
import * as authService from "../../../../../services/auth.ts";
import { apiResponse } from "../../../../../libs/response.ts";
import { sendSMS } from "../../../../../libs/sms.ts";

const userSignUp = new Hono();

userSignUp.post(
  "/",
  validator("json", (value) => {
    const parsed = createLoginDTOSchema.parse(value);
    return parsed;
  }),
  async (c) => {
    const validatedData = c.req.valid("json");

    // check user
    const user = await userService.getSingleByMobile(validatedData.mobile);

    if (user) {
      throw ErrorFactory.create(
        "NOT_FOUND",
        "User already exist with this mobile",
      );
    }

    // for testing
    if (!validatedData.mobile.startsWith("01")) {
      //create new with validated data
      const created = await authService.getSignUpOtp(validatedData, true);

      const responseData = {
        message: "OTP is sent to " + validatedData.mobile,
        data: {
          id: created.id,
          userId: created.userId,
          mobile: validatedData.mobile,
          expireAt: created.expiresAt,
        },
      };

      return c.json(apiResponse.single(responseData), 201);
    }

    //create new with validated data
    const created = await authService.getSignUpOtp(validatedData);

    // send otp to mobile
    const message = `Your One-Time Password (OTP) for X-Obses sign-up is ${created.code}.`;

    // avoid test number
    if (created.mobile) {
      sendSMS(created.mobile, message).catch((err) => console.error(err));
    }

    const responseData = {
      message: "OTP is sent to " + validatedData.mobile,
      data: {
        id: created.id,
        userId: created.userId,
        mobile: validatedData.mobile,
        expireAt: created.expiresAt,
      },
    };

    return c.json(apiResponse.single(responseData));
  },
);

export { userSignUp };
