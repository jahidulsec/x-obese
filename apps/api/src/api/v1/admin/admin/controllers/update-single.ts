import { prisma } from "@repo/database";
import { Hono } from "hono";
import { validator } from "hono/validator";
import * as adminService from "../../../../../services/admin.ts";
import { requiredIdSchema, updateAdminDTOSchema } from "@repo/validator";
import { getCleanedData } from "../../../../../utils/helper.ts";
import { hashPassword } from "../../../../../utils/password.ts";
import { ErrorFactory } from "../../../../../utils/error.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const updateAdmin = new Hono();

updateAdmin.patch(
  "/",
  validator("json", (value) => {
    const parsed = updateAdminDTOSchema.parse(value);
    return parsed;
  }),
  validator("param", (value) => {
    const parsed = requiredIdSchema.parse(value);
    return parsed;
  }),
  async (c) => {
    // get id
    const { id } = c.req.valid("param");

    // get fields
    const { password, ...rest } = c.req.valid("json");
    const cleanedField = getCleanedData(rest);

    let hashedPassword: string | undefined;

    if (password) {
      hashedPassword = await hashPassword(password);
    }

    const prevData = await adminService.getSingle({ id });

    if (!prevData)
      throw ErrorFactory.create("NOT_FOUND", "Data does not exist");

    // if data, then update
    const data = await adminService.updateOne(
      { id },
      {
        ...rest,
        ...(hashedPassword && { password: hashedPassword }),
      },
    );

    // response
    return c.json(
      apiResponse.single({
        message: "PATCH update admin successful",
        data,
      }),
    );
  },
);

export { updateAdmin };
