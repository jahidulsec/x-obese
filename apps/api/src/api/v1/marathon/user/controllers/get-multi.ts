import { marathonUsersQuerySchema } from "@repo/validator";
import { Hono } from "hono";
import { validator } from "hono/validator";
import * as marathonService from "../../../../../services/marathon-user.ts";
import { generateFileLink } from "../../../../../utils/file.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const getMarathonUsers = new Hono();

getMarathonUsers.get(
  "/",
  validator("query", (value) => {
    const parsed = marathonUsersQuerySchema.parse(value);
    return parsed;
  }),
  async (c) => {
    // validate incoming body data with defined schema
    const validatedQuery = c.req.valid("query");

    //get single item with validated id
    const data = await marathonService.getMulti(validatedQuery);

    return c.json(
      apiResponse.multi({
        message: "Get marathon users successfully!",
        data: data.data.map((item) => {
          return {
            ...item,
            imagePath: item.image ? generateFileLink(c, item.image) : null,
          };
        }),
        count: data.count,
        size: data.size,
      }),
    );
  },
);

export { getMarathonUsers };
