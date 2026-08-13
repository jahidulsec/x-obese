import { Hono } from "hono";
import { adminLogin } from "./controllers/login.ts";

const adminAuthRouter = new Hono();

adminAuthRouter.route("/login", adminLogin);

export { adminAuthRouter };
