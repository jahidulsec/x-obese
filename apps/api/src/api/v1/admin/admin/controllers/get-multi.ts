import { Hono } from "hono";
import { apiResponse } from "../../../../../libs/response.ts";
import * as adminService from "../../../../../services/admin.ts";
import { adminsQuerySchema } from "@repo/validator";
import { validator } from "hono/validator";

const getAdmins = new Hono();

getAdmins.get(
  "/",
  validator("query", (value) => {
    const parsed = adminsQuerySchema.parse(value);

    return parsed;
  }),
  async (c) => {
    const validatedQuery = c.req.valid("query");

    // filter
    const data = await adminService.getMulti(validatedQuery);

    return c.json(
      apiResponse.multi({
        message: "GET multi admins successful",
        data: data.data,
        count: data.count,
        size: data.size,
      }),
    );
  },
);

export { getAdmins };
