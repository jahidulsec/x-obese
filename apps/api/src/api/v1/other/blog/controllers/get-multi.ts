import { Hono } from "hono";
import { validator } from "hono/validator";
import * as otherService from "../../../../../services/blog.ts";
import { blogsQuerySchema } from "@repo/validator";
import { generateFileLink } from "../../../../../utils/file.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const getBlogs = new Hono();

getBlogs.get(
  "/",
  validator("query", (value) => {
    const parsed = blogsQuerySchema.parse(value);
    return parsed;
  }),
  async (c) => {
    // validate incoming body data with defined schema
    const validatedQuery = c.req.valid("query");

    //get single item with validated id
    const data = await otherService.getMulti(validatedQuery);

    const modifiedData = data.data.map((item) => {
      return {
        ...item,
        ...(item.imagePath && {
          imagePath: generateFileLink(c, item.imagePath),
        }),
      };
    });

    const responseData = {
      message: "Get blogs successfully!",
      data: modifiedData,
      count: data.count,
      size: data.size,
    };

    //send success response
    return c.json(apiResponse.multi(responseData));
  },
);

export { getBlogs };
