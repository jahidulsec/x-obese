import { Hono } from "hono";
import { jwtMiddleware } from "../../../../../middlewares/jwt.ts";
import { verifyRoles } from "../../../../../middlewares/verify-roles.ts";
import { validator } from "hono/validator";
import { createMarathonDTOSchema } from "@repo/validator";
import { ErrorFactory } from "../../../../../utils/error.ts";
import * as marathonService from "../../../../../services/marathon.ts";
import { apiResponse } from "../../../../../libs/response.ts";
import { saveFileToStorage } from "../../../../../utils/file.ts";

const createMarathon = new Hono();

createMarathon.post(
  "/",
  jwtMiddleware,
  verifyRoles("superadmin", "admin"),
  validator("form", (value) => {
    const parsed = createMarathonDTOSchema.parse(value);
    return parsed;
  }),
  async (c) => {
    let createdFileName: string | undefined;

    const { reward, imagePath, ...validatedData } = c.req.valid("form");

    if (imagePath) {
      const { filePath } = await saveFileToStorage(imagePath, "marathon");
      createdFileName = filePath;
    }

    // create list of reward from form data
    validatedData.rewards = reward.split(",");

    if (validatedData.type === "onsite" && !validatedData.location) {
      throw ErrorFactory.create(
        "BAD_REQUEST",
        "Location required for onsite marathon",
      );
    } else {
      validatedData.location = "";
    }

    //create new with validated data
    const created = await marathonService.createNew({
      ...validatedData,
      reward,
      imagePath,
      fileName: createdFileName,
    });

    return c.json(
      apiResponse.single({
        message: "POST new marathon successful",
        data: created,
      }),
      201,
    );
  },
);

export { createMarathon };
