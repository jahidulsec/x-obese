import { Hono } from "hono";
import { adminAuthRouter } from "./admins/index.ts";
import { tokenAuthRouter } from "./token/index.ts";

const authRouter = new Hono();

authRouter.route("/admins", adminAuthRouter);
authRouter.route("/token", tokenAuthRouter);

export { authRouter };
