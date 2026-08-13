import { requiredIdSchema } from "@repo/validator";
import { Hono } from "hono";
import { validator } from "hono/validator";
import { ErrorFactory } from "../../../../../utils/error.ts";
import { apiResponse } from "../../../../../libs/response.ts";
import * as adminService from "../../../../../services/admin.ts";

const deleteAdmin = new Hono();

deleteAdmin.delete(
  "/",
  validator("param", (value) => {
    const parsed = requiredIdSchema.parse(value);
    return parsed;
  }),
  async (c) => {
    // get id
    const { id } = c.req.valid("param");

    // check data
    const data = await adminService.getSingle({ id });

    if (!data) throw ErrorFactory.create("NOT_FOUND", "Data doest not exist");

    // delete from db
    await adminService.deleteOne({ id });

    // response
    return c.json(
      apiResponse.single({
        message: "DELETE single admin successful",
        data: null,
      }),
    );
  },
);

export { deleteAdmin };
