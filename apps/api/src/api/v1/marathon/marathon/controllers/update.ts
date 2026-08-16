import { Hono } from "hono";
import { jwtMiddleware } from "../../../../../middlewares/jwt.ts";
import { verifyRoles } from "../../../../../middlewares/verify-roles.ts";
import { validator } from "hono/validator";
import { requiredIdSchema, updateMarathonDTOSchema } from "@repo/validator";
import * as marathonService from "../../../../../services/marathon.ts";
import { ErrorFactory } from "../../../../../utils/error.ts";
import {
  deleteFileFromStorage,
  generateFileLink,
  saveFileToStorage,
} from "../../../../../utils/file.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const updateMarathon = new Hono();

updateMarathon.patch(
  "/",
  jwtMiddleware,
  verifyRoles("superadmin", "admin"),
  validator("form", (value) => {
    const parsed = updateMarathonDTOSchema.parse(value);
    return parsed;
  }),
  validator("param", (value) => {
    const parsed = requiredIdSchema.parse(value);
    return parsed;
  }),
  async (c) => {
    let createdFileName: string | undefined;
    const { id } = c.req.valid("param");
    const validatedData = c.req.valid("form");

    //check existing zone
    const existingMarathon = await marathonService.getSingle({ id });

    if (!existingMarathon) {
      //send not found error if not exist
      throw ErrorFactory.create("NOT_FOUND", "Marathon does not exist");
    }

    if (validatedData.imagePath) {
      const { filePath } = await saveFileToStorage(
        validatedData.imagePath,
        "marathon",
      );

      createdFileName = filePath;

      // delete previous image
      if (existingMarathon.data?.imagePath) {
        await deleteFileFromStorage(existingMarathon.data?.imagePath);
      }
    }

    // create list of reward from form data
    if (validatedData.reward) {
      validatedData.rewards = validatedData.reward.split(",");
    }

    //update with validated data
    const updated = await marathonService.updateOne({ id }, validatedData);

    if (!updated) {
      throw ErrorFactory.create("INTERNAL", "Marathon is not updated");
    }

    const responseData = {
      message: "Marathon updated successfully!",
      data: {
        ...updated,
        ...(updated?.imagePath && {
          imagePath: updated.imagePath
            ? generateFileLink(c, updated.imagePath)
            : undefined,
        }),
      },
    };

    return c.json(apiResponse.single(responseData));
  },
);

export { updateMarathon };
