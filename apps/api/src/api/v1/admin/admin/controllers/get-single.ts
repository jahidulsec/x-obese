import { Hono } from "hono";
import { validator } from "hono/validator";
import { ErrorFactory } from "../../../../../utils/error.js";
import { apiResponse } from "../../../../../libs/response.js";
import * as adminService from "../../../../../services/admin.ts";
import { requiredIdSchema } from "@repo/validator";

const getAdmin = new Hono();

getAdmin.get(
  "/",
  validator("param", (value) => {
    const parsed = requiredIdSchema.parse(value);

    return parsed;
  }),
  async (c) => {
    // get id
    const validatedData = c.req.valid("param");

    //get single item with validated id
    const data = await adminService.getSingle(validatedData);

    if (!data) throw ErrorFactory.create("NOT_FOUND", "Data does not exist");

    return c.json(
      apiResponse.single({
        message: "GET single admin successful",
        data: data,
      }),
    );
  },
);

export { getAdmin };
