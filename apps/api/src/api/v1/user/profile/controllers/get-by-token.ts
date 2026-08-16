import { Hono } from "hono";
import type { AuthUser } from "../../../../../types/auth.ts";
import * as userService from "../../../../../services/user-profile.ts";
import { ErrorFactory } from "../../../../../utils/error.ts";
import { generateFileLink } from "../../../../../utils/file.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const getUserByToken = new Hono();

getUserByToken.get("/", async (c) => {
  // get user id from token
  const authUser = c.get("jwtPayload") as AuthUser;

  //get single item with validated id
  const data = await userService.getSingle({ id: `${authUser?.id}` });

  if (!data) {
    throw ErrorFactory.create("NOT_FOUND", "User not found!");
  }

  const responseData = {
    message: "Get user profile details successfully!",
    data: {
      ...data,
      ...(data?.image && {
        imagePath: generateFileLink(c, data.image),
      }),
    },
  };

  return c.json(apiResponse.single(responseData));
});

export { getUserByToken };
