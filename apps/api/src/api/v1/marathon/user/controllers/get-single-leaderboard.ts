import { requiredIdSchema } from "@repo/validator";
import { Hono } from "hono";
import { validator } from "hono/validator";
import * as marathonService from "../../../../../services/marathon-user.ts";
import type { AuthUser } from "../../../../../types/auth.ts";
import { ErrorFactory } from "../../../../../utils/error.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const getMarathonUserLeadboard = new Hono();

getMarathonUserLeadboard.get(
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
    const data = await marathonService.getSingleLeaderboard(validatedData);

    if (!data.user) {
      throw ErrorFactory.create("NOT_FOUND", "Marathon user not found!");
    }

    if (authUser?.id !== data.user?.userId) {
      throw ErrorFactory.create("UNAUTHORIZED", "You are not permitted");
    }

    const responseData = {
      message: "Get Marathon user details successfully!",
      data: {
        user: data.user,
        rank: data.rank,
      },
    };

    return c.json(apiResponse.single(responseData));
  },
);

export { getMarathonUserLeadboard };
