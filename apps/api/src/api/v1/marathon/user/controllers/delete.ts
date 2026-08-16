import { Hono } from "hono";
import * as marathonService from "../../../../../services/marathon-user.ts";
import { validator } from "hono/validator";
import { requiredIdSchema } from "@repo/validator";
import type { AuthUser } from "../../../../../types/auth.ts";
import { ErrorFactory } from "../../../../../utils/error.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const deleteMarathonUser = new Hono();

deleteMarathonUser.delete(
  "/",
  validator("param", (value) => {
    const parsed = requiredIdSchema.parse(value);
    return parsed;
  }),
  async (c) => {
    //Validate incoming body data with defined schema
    const validatedData = c.req.valid("param");

    // get user id from token
    const authUser = c.get("jwtPayload") as AuthUser;

    //get single item with validated id
    const data = await marathonService.getSingle(validatedData);

    if (!authUser || authUser.id !== data?.userId) {
      throw ErrorFactory.create("FORBIDDEN", "You are not permitted");
    }

    if (!data) {
      throw ErrorFactory.create("NOT_FOUND", "Marathon user not found!");
    }

    const deleted: any = await marathonService.deleteOne(validatedData);

    if (deleted == 0) {
      throw ErrorFactory.create("INTERNAL", "Marathon user is not deleted");
    }

    const responseData = {
      message: "Marathon user is deleted successfully!",
      data: data,
    };

    return c.json(apiResponse.single(responseData));
  },
);

export { deleteMarathonUser };
