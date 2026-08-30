import { Hono } from "hono";
import type { AuthUser } from "../../../../../types/auth.ts";
import { validator } from "hono/validator";
import { requiredIdSchema, updateWorkOutPlanDTOSchema } from "@repo/validator";
import * as userService from "../../../../../services/user-workout-plan.ts";
import * as userProfileService from "../../../../../services/user-profile.ts";
import { ErrorFactory } from "../../../../../utils/error.ts";
import { apiResponse } from "../../../../../libs/response.ts";
import {
  calculateAge,
  calculateBMR,
  calculateCaloriesGoal,
  countDays,
  type Days,
  type gender,
} from "../../../../../utils/formula.ts";
import { prisma } from "@repo/database";

const updateUserWorkoutPlan = new Hono();

updateUserWorkoutPlan.patch(
  "/",
  validator("param", (value) => {
    const parsed = requiredIdSchema.parse(value);
    return parsed;
  }),
  validator("json", (value) => {
    const parsed = updateWorkOutPlanDTOSchema
      .partial({ userId: true })
      .parse(value);
    return parsed;
  }),
  async (c) => {
    // get user id from token
    const authUser = c.get("jwtPayload") as AuthUser;

    //Validate incoming body data with defined schema
    const validatedId = c.req.valid("param");
    const validatedData = c.req.valid("json");

    //check existing Fuel supplier
    const existingWorkoutplan = await userService.getSingle(validatedId);

    if (!existingWorkoutplan) {
      //send not found error if not exist
      throw ErrorFactory.create("NOT_FOUND", "Workout Goal does not found");
    }

    // get user info by token
    const user = await userProfileService.getSingle({
      id: authUser?.id as string,
    });

    // set userId from token
    validatedData["userId"] = authUser?.id as string;

    // check schedule

    // check schedule
    if (validatedData.startDate && validatedData.endDate) {
      const scheduleList = await prisma.workoutGoal.findMany({
        where: {
          userId: authUser?.id,
          startDate: {
            gte: validatedData.startDate,
          },
          endDate: {
            lte: validatedData.endDate,
          },
          id: {
            not: validatedId.id,
          },
        },
      });

      if (scheduleList.length > 0) {
        throw ErrorFactory.create(
          "BAD_REQUEST",
          "You already have an schedule",
        );
      }
    }

    if (validatedData.startDate) {
      const scheduleList = await prisma.workoutGoal.findMany({
        where: {
          userId: authUser?.id,
          startDate: {
            gte: validatedData.startDate,
          },
          id: {
            not: validatedId.id,
          },
        },
      });

      if (scheduleList.length > 0) {
        throw ErrorFactory.create(
          "BAD_REQUEST",
          "You already have an schedule",
        );
      }
    }

    if (validatedData.endDate) {
      const scheduleList = await prisma.workoutGoal.findMany({
        where: {
          userId: authUser?.id,
          startDate: {
            gte: existingWorkoutplan?.startDate as Date,
          },
          endDate: {
            lte: validatedData.endDate,
          },
          id: {
            not: validatedId.id,
          },
        },
      });

      if (scheduleList.length > 0) {
        throw ErrorFactory.create(
          "BAD_REQUEST",
          "You already have an schedule",
        );
      }
    }

    let totalDays = existingWorkoutplan?.totalDays ?? 0;

    // calculate total days
    if (validatedData.workoutDays) {
      let days = validatedData?.workoutDays?.replaceAll(" ", "").split(",");

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
    }

    // calculate calories consumption

    if (validatedData.goalType || validatedData.weightGoal) {
      const age = calculateAge(user?.birth as Date);

      const bmr = calculateBMR(
        validatedData?.weightGoal ??
          existingWorkoutplan?.weightGoal ??
          user?.weight ??
          0,
        user?.heightFt as number,
        user?.heightIn as number,
        user?.gender as gender,
        age,
      );

      const calorieGoal = calculateCaloriesGoal(
        validatedData?.goalType ??
          existingWorkoutplan?.goalType ??
          "gain_muscle",
        bmr,
      );

      validatedData.caloriesGoal = calorieGoal;
    }

    // create new with validated data
    const updated = await userService.updateOne(validatedId, {
      ...validatedData,
      userId: authUser.id,
    });

    const responseData = {
      message: "User workout plan updated successfully!",
      data: updated,
    };

    // send success response
    return c.json(apiResponse.single(responseData));
  },
);

export { updateUserWorkoutPlan };
