import { Hono } from "hono";
import * as userService from "../../../../../services/user-workout-plan.ts";
import * as userProfileService from "../../../../../services/user-profile.ts";
import { calculateBMI } from "../../../../../utils/formula.ts";
import { validator } from "hono/validator";
import { workOutPlansQuerySchema } from "@repo/validator";
import type { AuthUser } from "../../../../../types/auth.ts";
import { ErrorFactory } from "../../../../../utils/error.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const getUserWorkoutPlanByToken = new Hono();

getUserWorkoutPlanByToken.get(
  "/",
  validator("query", (value) => {
    const parsed = workOutPlansQuerySchema.parse(value);
    return parsed;
  }),
  async (c) => {
    // get user id from token
    const authUser = c.get("jwtPayload") as AuthUser;

    // validate incoming body data with defined schema
    const validatedQuery = c.req.valid("query");

    //get single item with validated id
    const data = await userService.getMultiById(validatedQuery, {
      id: `${authUser?.id}`,
    });

    if (!data) {
      throw ErrorFactory.create("NOT_FOUND", "User data not found!");
    }

    // get user profile for BMI recalculation
    const user = await userProfileService.getSingle({
      id: `${authUser?.id}`,
    });

    // recalculate BMI for each plan if user profile is available
    if (
      user &&
      user.weight != null &&
      user.heightFt != null &&
      user.heightIn != null
    ) {
      const weight = user.weight;
      const heightFt = user.heightFt;
      const heightIn = user.heightIn;
      data.data = data.data.map((plan: any) => ({
        ...plan,
        bmi: calculateBMI(weight, heightFt, heightIn),
      }));
    }

    const responseData = {
      message: "Get user workout plan details successfully!",
      data: data.data,
      count: data.count,
      size: data.size,
    };

    return c.json(apiResponse.single(responseData));
  },
);

export { getUserWorkoutPlanByToken };
