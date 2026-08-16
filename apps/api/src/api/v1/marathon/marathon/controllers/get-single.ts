import { requiredIdSchema } from "@repo/validator";
import { Hono } from "hono";
import { validator } from "hono/validator";
import * as marathonService from "../../../../../services/marathon.ts";
import type { AuthUser } from "../../../../../types/auth.ts";
import { ErrorFactory } from "../../../../../utils/error.ts";
import { generateFileLink } from "../../../../../utils/file.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const getMarathon = new Hono();

getMarathon.get(
  "/",
  validator("param", (value) => {
    const parsed = requiredIdSchema.parse(value);
    return parsed;
  }),
  async (c) => {
    const { id } = c.req.valid("param");

    // get auth user
    const authUser = c.get("jwtPayload") as AuthUser;

    //Validate incoming body data with defined schema
    const validatedData = requiredIdSchema.parse({ id });

    //get single item with validated id
    const data = await marathonService.getSingle(validatedData);

    if (!data) {
      throw ErrorFactory.create("NOT_FOUND", "Marathon not found!");
    }

    if (authUser?.role === "user") {
      //get single item with validated id
      const userMarathon = await marathonService.getSingleByUserId(
        validatedData,
        authUser.id as string,
      );

      const modifiedParticientsData = data.participants.map((item) => {
        return {
          ...item.user,
          imagePath: data.data?.imagePath
            ? generateFileLink(c, data.data.imagePath)
            : undefined,
        };
      });

      const responseData = {
        message: "Get Marathon details successfully!",
        data: {
          ...data.data,
          ...(data.data?.imagePath && {
            imagePath: generateFileLink(c, data.data.imagePath),
          }),
          marathonUserId: userMarathon.marathonUser?.[0]?.id,
          joined: userMarathon.data?.id === data.data?.id,
        },
        totalParticiants: data.totalParticiants,
        particiants: modifiedParticientsData,
      };

      //send success response
      return c.json(apiResponse.single(responseData));
    }

    const modifiedParticientsData = data.participants.map((item) => {
      return {
        ...item.user,
        imagePath: item.user.image
          ? generateFileLink(c, item.user.image)
          : undefined,
      };
    });

    const responseData = {
      message: "Get Marathon details successfully!",
      data: {
        ...data.data,
        ...(data.data?.imagePath && {
          imagePath: generateFileLink(c, data.data.imagePath),
        }),
      },
      totalParticiants: data.totalParticiants,
      particiants: modifiedParticientsData,
    };

    //send success response
    return c.json(apiResponse.single(responseData));
  },
);

export { getMarathon };
