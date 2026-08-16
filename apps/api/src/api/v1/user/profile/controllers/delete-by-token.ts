import { Hono } from "hono";
import * as userService from "../../../../../services/user-profile.ts";
import type { AuthUser } from "../../../../../types/auth.ts";
import { ErrorFactory } from "../../../../../utils/error.ts";
import { deleteFileFromStorage } from "../../../../../utils/file.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const deleteUserByToken = new Hono();

deleteUserByToken.delete("/", async (c) => {
  // get user id from token
  const authUser = c.get("jwtPayload") as AuthUser;

  //get single item with validated id
  const data = await userService.getSingle({ id: authUser?.id as string });

  if (!data) {
    throw ErrorFactory.create("NOT_FOUND", "User not found!");
  }

  const deleted: any = await userService.deleteOne({
    id: authUser?.id as string,
  });

  if (deleted == 0) {
    throw ErrorFactory.create("INTERNAL", "User is not deleted");
  }

  // delete previous image
  if (data?.image) {
    deleteFileFromStorage(data.image);
  }

  const responseData = {
    message: "User is deleted successfully!",
    data: data,
  };

  return c.json(apiResponse.single(responseData));
});

export { deleteUserByToken };
