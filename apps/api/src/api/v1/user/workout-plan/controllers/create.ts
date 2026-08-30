import { Hono } from "hono";
import {
  calculateAge,
  calculateBMI,
  calculateBMR,
  calculateCaloriesGoal,
  countDays,
  type Days,
  type gender,
} from "../../../../../utils/formula.ts";
import { ErrorFactory } from "../../../../../utils/error.ts";
import * as userService from "../../../../../services/user-workout-plan.ts";
import * as userProfileService from "../../../../../services/user-profile.ts";
import type { AuthUser } from "../../../../../types/auth.ts";
import { validator } from "hono/validator";
import { createWorkOutPlanDTOSchema } from "@repo/validator";
import { prisma } from "@repo/database";
import { apiResponse } from "../../../../../libs/response.ts";

const createUserWorkoutPlan = new Hono();

createUserWorkoutPlan.post(
  "/",
  validator("json", (value) => {
    const parsed = createWorkOutPlanDTOSchema
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

    // Validate incoming body data with defined schema
    const validatedData = c.req.valid("json");

    // set userId from token
    validatedData.userId = authUser?.id as string;

    // check schedule
    const scheduleList = await prisma.workoutGoal.findMany({
      where: {
        userId: authUser?.id,
        startDate: {
          gte: validatedData.startDate,
        },
        endDate: {
          lte: validatedData.endDate,
        },
      },
    });

    if (scheduleList.length > 0) {
      throw ErrorFactory.create("BAD_REQUEST", "You already have an schedule");
    }

    if (!user?.heightFt || !user?.heightIn) {
      throw ErrorFactory.create(
        "BAD_REQUEST",
        "Please enter your height in your profile",
      );
    }

    if (!user?.weight) {
      throw ErrorFactory.create(
        "BAD_REQUEST",
        "Please enter your weight in your profile",
      );
    }

    if (!user?.gender) {
      throw ErrorFactory.create(
        "BAD_REQUEST",
        "Please enter your gender in your profile",
      );
    }

    // calculate BMI
    const bmi = calculateBMI(
      user?.weight ?? 0,
      user?.heightFt ?? 0,
      user?.heightIn ?? 0,
    );

    validatedData.bmi = Number(bmi);

    // calculate total days
    let days = validatedData?.workoutDays?.replaceAll(" ", "").split(",");

    let totalDays = 0;

    if (days && days.length > 0) {
      for (let i = 0; i < days.length; i++) {
        totalDays += countDays(
          validatedData.startDate as Date,
          validatedData.endDate as Date,
          days[i] as Days,
        );
      }
    }

    validatedData.totalDays = totalDays;

    // calculate calories consumption
    const age = calculateAge(user?.birth as Date);

    const bmr = calculateBMR(
      validatedData.weightGoal as number,
      user?.heightFt as number,
      user?.heightIn as number,
      user?.gender as gender,
      age,
    );

    const calorieGoal = calculateCaloriesGoal(validatedData.goalType, bmr);

    validatedData.caloriesGoal = calorieGoal;

    // create new with validated data
    const created = await userService.createNew({
      ...validatedData,
      userId: authUser.id,
    });

    const responseData = {
      message: "New user workout plan added successfully!",
      data: created,
    };

    return c.json(apiResponse.single(responseData), 201);
  },
);

export { createUserWorkoutPlan };
