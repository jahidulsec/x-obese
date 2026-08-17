import { requiredIdSchema } from "@repo/validator";
import { Hono } from "hono";
import { validator } from "hono/validator";
import * as otherService from "../../../../../services/blog.ts";
import { ErrorFactory } from "../../../../../utils/error.ts";
import { deleteFileFromStorage } from "../../../../../utils/file.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const deleteBlog = new Hono();

deleteBlog.delete(
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
      throw ErrorFactory.create("NOT_FOUND", "Blog not found!");
    }

    const deleted: any = await otherService.deleteOne(validatedData);

    if (deleted == 0) {
      throw ErrorFactory.create("INTERNAL", "Blog is not deleted");
    }

    // delete previous image
    if (data?.imagePath) {
      await deleteFileFromStorage(data.imagePath);
    }

    const responseData = {
      message: "Blog is deleted successfully!",
      data: data,
    };

    return c.json(apiResponse.single(responseData));
  },
);

export { deleteBlog };
