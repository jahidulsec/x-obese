import { workOutsQuerySchema } from "@repo/validator";
import { Hono } from "hono";
import { validator } from "hono/validator";
import type { AuthUser } from "../../../../../types/auth.ts";
import * as userService from "../../../../../services/user-workout.ts";
import { apiResponse } from "../../../../../libs/response.ts";
import { ErrorFactory } from "../../../../../utils/error.ts";

const getUserWorkoutsByToken = new Hono();

getUserWorkoutsByToken.patch(
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
    
    //get single item with validated id
    const data = await userService.getUserWorkOutStats(
      { id: `${authUser?.id}` },
      validatedQuery,
    );

    if (!data) {
      throw ErrorFactory.create("NOT_FOUND", "User data not found!");
    }

    const responseData = {
      message: "Get user workout details successfully!",
      data: data,
    };

    return c.json(apiResponse.single(responseData), 200);
  },
);

export { getUserWorkoutsByToken };
