import { createStepsDTOSchema } from "@repo/validator";
import { Hono } from "hono";
import { validator } from "hono/validator";
import type { AuthUser } from "../../../../../types/auth.ts";
import * as userService from "../../../../../services/user-workout.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const createUserStep = new Hono();

createUserStep.post(
  "/",
  validator("json", (value) => {
    const parsed = createStepsDTOSchema.partial({ userId: true }).parse(value);
    return parsed;
  }),
  async (c) => {
    // get user id from token
    const authUser = c.get("jwtPayload") as AuthUser;

    //Validate incoming body data with defined schema
    const validatedData = c.req.valid("json");

    //create new with validated data
    const created = await userService.createNewSteps({
      ...validatedData,
      userId: authUser.id,
    });

    const responseData = {
      message: "New user steps added successfully!",
      data: created,
    };

    return c.json(apiResponse.single(responseData), 201);
  },
);

export { createUserStep };
