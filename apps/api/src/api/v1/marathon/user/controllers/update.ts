import { requiredIdSchema, updateMarathonUserDTOSchema } from "@repo/validator";
import { Hono } from "hono";
import * as marathonService from "../../../../../services/marathon.ts";
import * as marathonUserService from "../../../../../services/marathon-user.ts";
import { validator } from "hono/validator";
import type { AuthUser } from "../../../../../types/auth.ts";
import { ErrorFactory } from "../../../../../utils/error.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const updateMarathonUser = new Hono();

updateMarathonUser.patch(
  "/",
  validator("param", (value) => {
    const parsed = requiredIdSchema.parse(value);
    return parsed;
  }),
  validator("json", (value) => {
    const parsed = updateMarathonUserDTOSchema.parse(value);
    return parsed;
  }),
  async (c) => {
    // get user id from token
    const authUser = c.get("jwtPayload") as AuthUser;

    //Validate incoming body data with defined schema
    const validatedId = c.req.valid("param");

    //check existing marathon user
    const existingMarathonUser =
      await marathonUserService.getSingle(validatedId);

    if (!existingMarathonUser) {
      //send not found error if not exist
      throw ErrorFactory.create("NOT_FOUND", "Marathon user does not exist");
    }

    if (authUser?.id !== existingMarathonUser?.userId) {
      throw ErrorFactory.create("FORBIDDEN", "You are not permitted");
    }

    //check existing marathon
    const existingMarathon = await marathonService.getSingle({
      id: existingMarathonUser?.marathonId as string,
    });

    if (!existingMarathon) {
      //send not found error if not exist
      throw ErrorFactory.create("NOT_FOUND", "Marathon does not exist");
    }

    //Validate incoming body data with defined schema
    const validatedData = c.req.valid("json");

    // set data from validation
    validatedData.marathonId = existingMarathon?.data?.id;
    validatedData.userId = existingMarathonUser?.userId;

    // distance check
    if (
      (validatedData?.distanceKm ?? 0) >
      Number(existingMarathon.data?.distanceKm)
    ) {
      validatedData.distanceKm = existingMarathon.data?.distanceKm;
    }

    //update with validated data
    const updated = await marathonUserService.updateOne(
      validatedId,
      validatedData,
    );

    if (!updated) {
      throw ErrorFactory.create("INTERNAL", "Marathon user is not updated");
    }

    const responseData = {
      message: "Marathon user updated successfully!",
      data: updated,
    };

    return c.json(apiResponse.single(responseData));
  },
);

export { updateMarathonUser };
