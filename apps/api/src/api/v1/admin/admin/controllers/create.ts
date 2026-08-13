import { createAdminDTOSchema } from "@repo/validator";
import { Hono } from "hono";
import { validator } from "hono/validator";
import { hashPassword } from "../../../../../utils/password.ts";
import { createNew } from "../../../../../services/admin.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const createAdmin = new Hono();

createAdmin.post(
  "/",
  validator("json", (value) => {
    const parsed = createAdminDTOSchema.parse(value);
    return parsed;
  }),
  async (c) => {
    const data = c.req.valid("json");

    // hashing password
    const hashedPassword = await hashPassword(data.password);

    const created = await createNew({ ...data, password: hashedPassword });

    return c.json(
      apiResponse.single({
        message: "New admin created successfully!",
        data: created,
      }),
    );
  },
);

export { createAdmin };
