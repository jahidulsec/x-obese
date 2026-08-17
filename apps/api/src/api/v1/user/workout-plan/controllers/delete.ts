import { Hono } from "hono";
import * as userService from "../../../../../services/user-workout-plan.ts";
import { validator } from "hono/validator";
import { requiredIdSchema } from "@repo/validator";
import type { AuthUser } from "../../../../../types/auth.ts";
import { ErrorFactory } from "../../../../../utils/error.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const deleteUserWorkoutPlan = new Hono();

deleteUserWorkoutPlan.delete(
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
    const data = await userService.getSingleByToken(
      validatedData,
      authUser?.id as string,
    );

    if (!data) {
      throw ErrorFactory.create("NOT_FOUND", "Workout goad not found!");
    }

    const deleted: any = await userService.deleteOne(validatedData);

    if (deleted == 0) {
      throw ErrorFactory.create("INTERNAL", "Workout goad is not deleted");
    }

    const responseData = {
      message: "Workout goad is deleted successfully!",
      data: data,
    };

    return c.json(apiResponse.single(responseData));
  },
);

export { deleteUserWorkoutPlan };
