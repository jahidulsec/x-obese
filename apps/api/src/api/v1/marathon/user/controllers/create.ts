import { createMarathonUserDTOSchema } from "@repo/validator";
import { Hono } from "hono";
import { validator } from "hono/validator";
import * as marathonService from "../../../../../services/marathon-user.ts";
import * as userService from "../../../../../services/user-profile.ts";
import type { AuthUser } from "../../../../../types/auth.ts";
import { ErrorFactory } from "../../../../../utils/error.ts";
import { apiResponse } from "../../../../../libs/response.ts";


const createMarathonUser = new Hono();

createMarathonUser.post(
  "/",
  validator("json", (value) => {
    const parsed = createMarathonUserDTOSchema
      .partial({ userId: true })
      .parse(value);
    return parsed;
  }),
  async (c) => {
    // get user id from token
    const authUser = c.get("jwtPayload") as AuthUser;

    const validatedData = c.req.valid("json");

    //check existing zone
    const existingUser = await userService.getSingle({
      id: authUser?.id as string,
    });

    if (!existingUser) {
      //send not found error if not exist
      throw ErrorFactory.create("NOT_FOUND", "User does not exist");
    }

    // check if user already joined
    const isJoined = await marathonService.checkUserInMarathon(
      authUser?.id,
      validatedData.marathonId,
    );

    if (isJoined) {
      throw ErrorFactory.create(
        "BAD_REQUEST",
        "You are already joined in this marathon!",
      );
    }

    // create new with validated data
    const created = await marathonService.createNew({
      ...validatedData,
      userId: authUser.id,
    });

    const responseData = {
      message: "Your are added to this marathon successfully!",
      data: created,
    };

    return c.json(apiResponse.single(responseData), 201);
  },
);

export { createMarathonUser };
