import { workOutsQuerySchema } from "@repo/validator";
import { Hono } from "hono";
import { validator } from "hono/validator";
import type { AuthUser } from "../../../../../types/auth.ts";
import * as userService from "../../../../../services/user-workout.ts";
import { apiResponse } from "../../../../../libs/response.ts";
import { ErrorFactory } from "../../../../../utils/error.ts";

const getUserActivityHistory = new Hono();

getUserActivityHistory.patch(
  "/",
  validator("query", (value) => {
    const parsed = workOutsQuerySchema.parse(value);
    return parsed;
  }),
  async (c) => {
    // get user id from token
    const authUser = c.get("jwtPayload") as AuthUser;

    //Validate incoming body data with defined schema
    const validatedQuery = c.req.valid("query");

    //get activity history with validated id
    const data = await userService.getActivityHistory(
      { id: `${authUser?.id}` },
      validatedQuery,
    );

    if (!data) {
      throw ErrorFactory.create("NOT_FOUND", "Activity history not found!");
    }

    const responseData = {
      message: "Get activity history successfully!",
      data: data,
    };
    return c.json(apiResponse.single(responseData), 200);
  },
);

export { getUserActivityHistory };
