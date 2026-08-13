import { adminLoginDTOSchema } from "@repo/validator";
import { Hono } from "hono";
import * as adminService from "../../../../../services/admin.ts";
import { validator } from "hono/validator";
import { ErrorFactory } from "../../../../../utils/error.ts";
import { isValidPassword } from "../../../../../utils/password.ts";
import { jwtInstance } from "../../../../../libs/jwt.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const adminLogin = new Hono();

adminLogin.post(
  "/",
  validator("json", (value) => {
    const parsed = adminLoginDTOSchema.parse(value);
    return parsed;
  }),
  async (c) => {
    const validatedData = c.req.valid("json");

    // check admin
    const admin = await adminService.getSingleByUsername(
      validatedData.username,
    );

    if (!admin) {
      throw ErrorFactory.create(
        "NOT_FOUND",
        "Admin with this username does not exist",
      );
    }

    //  check password
    if (
      !(await isValidPassword(
        validatedData.password,
        admin?.password as string,
      ))
    ) {
      throw ErrorFactory.create("BAD_REQUEST", "Incorrect password");
    }

    // create tokens
    const accessToken = await jwtInstance.sign(
      { id: admin.id, role: admin.role },
      "access",
    );
    const refreshToken = await jwtInstance.sign({ id: admin.id }, "refresh");

    return c.json(
      apiResponse.single({
        message: "Logged in successfully",
        data: {
          refresh_token: refreshToken,
          access_token: accessToken,
          ...admin,
        },
      }),
    );
  },
);

export { adminLogin };
