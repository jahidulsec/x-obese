import { createBannerDTOSchema } from "@repo/validator";
import { Hono } from "hono";
import { validator } from "hono/validator";
import * as otherService from "../../../../../services/banner.ts";
import {
  generateFileLink,
  saveFileToStorage,
} from "../../../../../utils/file.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const createBanner = new Hono();

createBanner.post(
  "/",
  validator("form", (value) => {
    const parsed = createBannerDTOSchema.parse(value);
    return parsed;
  }),
  async (c) => {
    //Validate incoming body data with defined schema
    const validatedData = c.req.valid("form");

    const { filePath } = await saveFileToStorage(
      validatedData.imagePath,
      "banner",
    );

    //create new with validated data
    const created = await otherService.createNew({
      ...validatedData,
      filePath: filePath,
    });

    const responseData = {
      message: "New banner created successfully!",
      data: {
        ...created,
        ...(created.imagePath && {
          imagePath: generateFileLink(c, created.imagePath),
        }),
      },
    };

    return c.json(apiResponse.single(responseData), 201);
  },
);

export { createBanner };
