import { Hono } from "hono";
import type { AuthUser } from "../../../../../types/auth.ts";
import { validator } from "hono/validator";
import { requiredIdSchema } from "@repo/validator";
import * as userService from "../../../../../services/user-workout-plan.ts";
import { ErrorFactory } from "../../../../../utils/error.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const getUserWorkoutPlan = new Hono();

getUserWorkoutPlan.get(
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
    const data = await userService.getSingleByToken(
      validatedData,
      authUser?.id as string,
    );

    if (!data) {
      throw ErrorFactory.create("NOT_FOUND", "Workout plan not found!");
    }

    const responseData = {
      message: "Get workout plan details successfully!",
      data: data,
    };

    //send success response
    return c.json(apiResponse.single(responseData));
  },
);

export { getUserWorkoutPlan };
