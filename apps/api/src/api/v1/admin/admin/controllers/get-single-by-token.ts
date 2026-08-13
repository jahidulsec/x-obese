import { Hono } from "hono";
import { ErrorFactory } from "../../../../../utils/error.ts";
import { apiResponse } from "../../../../../libs/response.ts";
import * as adminService from "../../../../../services/admin.ts";
import type { AuthUser } from "../../../../../types/auth.ts";

const getAdminByToken = new Hono();

getAdminByToken.get(
  "/",

  async (c) => {
    // get id
    const authUser = c.get("jwtPayload") as AuthUser;

    //get single item with validated id
    const data = await adminService.getSingle({
      id: (authUser?.id as string) ?? "",
    });

    if (!data) throw ErrorFactory.create("NOT_FOUND", "Data does not exist");

    return c.json(
      apiResponse.single({
        message: "GET single admin successful",
        data: data,
      }),
    );
  },
);

export { getAdminByToken };
