import { Hono } from "hono";
import { validator } from "hono/validator";
import { revokeTokenSchema } from "@repo/validator";
import { jwtInstance } from "../../../../../libs/jwt.ts";
import * as adminService from "../../../../../services/admin.ts";
import { ErrorFactory } from "../../../../../utils/error.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const revokeAdminToken = new Hono();

revokeAdminToken.post(
  "/revoke/admin",
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

    // check admin
    const admin = await adminService.getSingle({ id: decryptData?.id });

    if (!admin) throw ErrorFactory.create("NOT_FOUND", "Admin does not exist");

    // create new access token
    const accessToken = await jwtInstance.sign(
      { id: admin.id, role: admin.role },
      "access",
    );

    return c.json(
      apiResponse.single({
        data: {
          accessToken: accessToken,
        },
      }),
    );
  },
);

export { revokeAdminToken };
