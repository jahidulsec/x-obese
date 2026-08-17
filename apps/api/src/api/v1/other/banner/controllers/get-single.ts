import { Hono } from "hono";
import { validator } from "hono/validator";
import * as otherService from "../../../../../services/banner.ts";
import { requiredIdSchema } from "@repo/validator";
import { ErrorFactory } from "../../../../../utils/error.ts";
import { generateFileLink } from "../../../../../utils/file.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const getBanner = new Hono();

getBanner.get(
  "/",
  validator("param", (value) => {
    const parsed = requiredIdSchema.parse(value);
    return parsed;
  }),
  async (c) => {
    //Validate incoming body data with defined schema
    const validatedData = c.req.valid("param");

    //get single item with validated id
    const data = await otherService.getSingle(validatedData);

    if (!data) {
      throw ErrorFactory.create("NOT_FOUND", "Banner not found!");
    }

    const responseData = {
      success: true,
      message: "Get Banner details successfully!",
      data: {
        ...data,
        ...(data?.imagePath && {
          imagePath: generateFileLink(c, data.imagePath),
        }),
      },
    };

    //send success response
    return c.json(apiResponse.single(responseData));
  },
);

export { getBanner };
