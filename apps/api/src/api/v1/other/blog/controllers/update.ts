import { Hono } from "hono";
import { validator } from "hono/validator";
import * as otherService from "../../../../../services/blog.ts";
import { requiredIdSchema, updateBlogDTOSchema } from "@repo/validator";
import { ErrorFactory } from "../../../../../utils/error.ts";
import {
  deleteFileFromStorage,
  generateFileLink,
  saveFileToStorage,
} from "../../../../../utils/file.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const updateBlog = new Hono();

updateBlog.patch(
  "/",
  validator("param", (value) => {
    const parsed = requiredIdSchema.parse(value);
    return parsed;
  }),
  validator("form", (value) => {
    const parsed = updateBlogDTOSchema.parse(value);
    return parsed;
  }),
  async (c) => {
    let uploadedImage: string | undefined;

    //Validate incoming body data with defined schema
    const validatedId = c.req.valid("param");

    //check existing Blog
    const existingBlog = await otherService.getSingle(validatedId);

    if (!existingBlog) {
      //send not found error if not exist
      throw ErrorFactory.create("NOT_FOUND", "Blog does not exist");
    }

    //Validate incoming body data with defined schema
    const validatedData = c.req.valid("form");

    if (validatedData.imagePath) {
      const { filePath } = await saveFileToStorage(
        validatedData.imagePath,
        "blog",
      );
      uploadedImage = filePath;

      // delete previous image
      await deleteFileFromStorage(existingBlog?.imagePath);
    }

    //update with validated data
    const updated = await otherService.updateOne(validatedId, {
      ...validatedData,
      filePath: uploadedImage,
    });

    if (!updated) {
      throw ErrorFactory.create("INTERNAL", "Blog is not updated");
    }

    const responseData = {
      message: "Blog updated successfully!",
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

export { updateBlog };
