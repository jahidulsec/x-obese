import { Hono } from "hono";
import { mMarathonRouter } from "./marathon/index.ts";
import { marathonUserRouter } from "./user/index.ts";
import { jwtMiddleware } from "../../../middlewares/jwt.ts";

const marathonRouter = new Hono();

marathonRouter.route("/marathon", mMarathonRouter);
marathonRouter.route("/user", marathonUserRouter);

export { marathonRouter };
