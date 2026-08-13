import { Hono } from "hono";
import { aAdminRouter } from "./admin/index.ts";

const adminRouter = new Hono();

adminRouter.route("/admin", aAdminRouter);

export { adminRouter };
