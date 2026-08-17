import { Hono } from "hono";
import { validator } from "hono/validator";
import * as otherService from "../../../../../services/banner.ts";
import { requiredIdSchema, updateBannerDTOSchema } from "@repo/validator";
import { ErrorFactory } from "../../../../../utils/error.ts";
import {
  deleteFileFromStorage,
  generateFileLink,
  saveFileToStorage,
} from "../../../../../utils/file.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const updateBanner = new Hono();

updateBanner.patch(
  "/",
  validator("param", (value) => {
    const parsed = requiredIdSchema.parse(value);
    return parsed;
  }),
  validator("form", (value) => {
    const parsed = updateBannerDTOSchema.parse(value);
    return parsed;
  }),
  async (c) => {
    let uploadedImage: string | undefined;

    //Validate incoming body data with defined schema
    const validatedId = c.req.valid("param");

    //check existing banner
    const existingBanner = await otherService.getSingle(validatedId);

    if (!existingBanner) {
      //send not found error if not exist
      throw ErrorFactory.create("NOT_FOUND", "Banner does not exist");
    }

    //Validate incoming body data with defined schema
    const validatedData = c.req.valid("form");

    if (validatedData.imagePath) {
      const { filePath } = await saveFileToStorage(
        validatedData.imagePath,
        "banner",
      );
      uploadedImage = filePath;

      // delete previous image
      await deleteFileFromStorage(existingBanner?.imagePath);
    }

    //update with validated data
    const updated = await otherService.updateOne(validatedId, {
      ...validatedData,
      filePath: uploadedImage,
    });

    if (!updated) {
      throw ErrorFactory.create("INTERNAL", "Banner is not updated");
    }

    const responseData = {
      message: "Banner updated successfully!",
      data: {
        ...updated,
        ...(updated.imagePath && {
          imagePath: generateFileLink(c, updated.imagePath),
        }),
      },
    };

    //send success response
    return c.json(apiResponse.single(responseData));
  },
);

export { updateBanner };
