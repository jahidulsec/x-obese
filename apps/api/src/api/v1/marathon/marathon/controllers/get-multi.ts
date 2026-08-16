import { marathonsQuerySchema } from "@repo/validator";
import { Hono } from "hono";
import { validator } from "hono/validator";
import * as marathonService from "../../../../../services/marathon.ts";
import type { AuthUser } from "../../../../../types/auth.ts";
import { generateFileLink } from "../../../../../utils/file.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const getMarathons = new Hono();

getMarathons.get(
  "/",
  validator("query", (value) => {
    const parsed = marathonsQuerySchema.parse(value);
    return parsed;
  }),
  async (c) => {
    const validatedData = c.req.valid("query");

    // get auth user
    const authUser = c.get("jwtPayload") as AuthUser;

    // validate incoming body data with defined schema
    const validatedQuery = marathonsQuerySchema.parse(validatedData);

    //get single item with validated id
    const data = await marathonService.getMulti(validatedQuery);

    if (authUser?.role === "user") {
      //get single item with validated id
      const userData = await marathonService.getMultiByUserId(
        validatedQuery,
        authUser.id as string,
      );

      const modifiedData = data.data.map((item) => {
        return {
          ...item,
          imagePath: item.imagePath
            ? generateFileLink(c, item.imagePath)
            : null,
          joined:
            userData.data.filter((userMarathon) => userMarathon.id === item.id)
              .length > 0,
        };
      });

      return c.json(
        apiResponse.multi({
          message: "Get marathons successfully!",
          data: modifiedData,
          count: data.count,
          size: data.size,
        }),
      );
    }

    const modifiedData = data.data.map((item) => {
      return {
        ...item,
        imagePath: item.imagePath ? generateFileLink(c, item.imagePath) : null,
      };
    });

    return c.json(
      apiResponse.multi({
        message: "Get marathons successfully!",
        data: modifiedData,
        count: data.count,
        size: data.size,
      }),
    );
  },
);

export { getMarathons };
