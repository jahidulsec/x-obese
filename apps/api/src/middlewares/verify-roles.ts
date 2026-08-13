import { createMiddleware } from "hono/factory";
import { ErrorFactory } from "../utils/error.ts";

type AuthUser = {
  role?: string;
};

export const verifyRoles = (...allowedRoles: string[]) =>
  createMiddleware(async (c, next) => {
    const authUser = c.get("user") as AuthUser | undefined;

    if (!authUser || !authUser.role) {
      throw ErrorFactory.create(
        "FORBIDDEN",
        "You are not permitted for this action",
      );
    }

    const hasRole = allowedRoles.includes(authUser.role);

    if (!hasRole) {
      throw ErrorFactory.create(
        "FORBIDDEN",
        "You are not permitted for this action",
      );
    }

    await next();
  });
