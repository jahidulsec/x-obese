import { updateUserDTOSchema } from "@repo/validator";
import { Hono } from "hono";
import { validator } from "hono/validator";
import type { AuthUser } from "../../../../../types/auth.ts";
import * as userService from "../../../../../services/user-profile.ts";
import { ErrorFactory } from "../../../../../utils/error.ts";
import {
  deleteFileFromStorage,
  generateFileLink,
  saveFileToStorage,
} from "../../../../../utils/file.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const updateUserByToken = new Hono();

updateUserByToken.patch(
  "/",
  validator("form", (value) => {
    const parsed = updateUserDTOSchema.parse(value);
    return parsed;
  }),
  async (c) => {
    let uploadedPhoto: string | null = null;

    const validatedData = c.req.valid("form");

    // get user id from token
    const authUser = c.get("jwtPayload") as AuthUser;

    //check existing zone
    const existingUser = await userService.getSingle({
      id: authUser?.id as string,
    });

    if (!existingUser) {
      //send not found error if not exist
      throw ErrorFactory.create("NOT_FOUND", "User does not exist");
    }

    if (validatedData.image) {
      const { filePath } = await saveFileToStorage(validatedData.image, "user");
      uploadedPhoto = filePath;

      // delete previous image
      if (existingUser?.image) {
        await deleteFileFromStorage(existingUser?.image);
      }
    }

    //update with validated data
    const updated = await userService.updateOne(
      { id: authUser?.id as string },
      { ...validatedData, filePath: uploadedPhoto ?? undefined },
    );

    if (!updated) {
      throw ErrorFactory.create("INTERNAL", "User profile is not updated");
    }

    const responseData = {
      message: "User profile updated successfully!",
      data: {
        ...updated,
        ...(updated?.image && {
          imagePath: generateFileLink(c, updated.image),
        }),
      },
    };

    return c.json(apiResponse.single(responseData));
  },
);

export { updateUserByToken };
