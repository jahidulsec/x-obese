import { Hono } from "hono";
import { revokeAdminToken } from "./controllers/revoke-admin.ts";
import { revokeUserToken } from "./controllers/revoke-user.ts";

const tokenAuthRouter = new Hono();

tokenAuthRouter.route("/admin", revokeAdminToken);
tokenAuthRouter.route("/user", revokeUserToken);

export { tokenAuthRouter };
