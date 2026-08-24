import { createWorkOutDTOSchema, updateUserDTOSchema } from "@repo/validator";
import { Hono } from "hono";
import { validator } from "hono/validator";
import type { AuthUser } from "../../../../../types/auth.ts";
import * as userProfileService from "../../../../../services/user-profile.ts";
import * as userService from "../../../../../services/user-workout.ts";

import {
  calculateCaloriesBurn,
  calculateHeartPts,
} from "../../../../../utils/formula.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const createUserWorkoutByToken = new Hono();

createUserWorkoutByToken.post(
  "/",
  validator("json", (value) => {
    const parsed = createWorkOutDTOSchema
      .partial({ userId: true })
      .parse(value);
    return parsed;
  }),
  async (c) => {
    // get user id from token
    const authUser = c.get("jwtPayload") as AuthUser;

    // get user info by token
    const user = await userProfileService.getSingle({
      id: authUser?.id as string,
    });

    // set userId from token
    const validatedData = c.req.valid("json");

    console.log(validatedData)

    //Validate incoming body data with defined schema

    // calculate heart pts
    validatedData.heartPts = calculateHeartPts(
      validatedData.durationMs ?? 0,
      validatedData.type,
    );

    // calculate calories burn in kCal
    validatedData.calories = calculateCaloriesBurn(
      validatedData.durationMs ?? 0,
      user?.weight ?? 0,
      validatedData.type,
    );

    //create new with validated data
    const created = await userService.createNew({
      ...validatedData,
      userId: authUser.id,
    });

    const responseData = {
      message: "New user workout added successfully!",
      data: created,
    };

    return c.json(apiResponse.single(responseData), 201);
  },
);

export { createUserWorkoutByToken };
