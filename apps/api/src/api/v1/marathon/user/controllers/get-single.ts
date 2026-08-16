import { requiredIdSchema } from "@repo/validator";
import * as marathonService from "../../../../../services/marathon-user.ts";
import { Hono } from "hono";
import { validator } from "hono/validator";
import type { AuthUser } from "../../../../../types/auth.ts";
import { ErrorFactory } from "../../../../../utils/error.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const getMarathonUser = new Hono();

getMarathonUser.get(
  "/",
  validator("param", (value) => {
    const parsed = requiredIdSchema.parse(value);
    return parsed;
  }),
  async (c) => {
    // get user id from token
    const authUser = c.get("jwtPayload") as AuthUser;

    //Validate incoming body data with defined schema
    const validatedData = c.req.valid("param");

    //get single item with validated id
    const data = await marathonService.getSingle(validatedData);

    if (!data) {
      throw ErrorFactory.create("NOT_FOUND", "Marathon user not found!");
    }

    if (authUser?.id !== data?.userId) {
      throw ErrorFactory.create("FORBIDDEN", "You are not permitted");
    }

    const responseData = {
      message: "Get Marathon user details successfully!",
      data: data,
    };

    return c.json(apiResponse.single(responseData));
  },
);

export { getMarathonUser };
