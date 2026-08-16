import { Hono } from "hono";
import { profileRouter } from "./profile/index.ts";

const userRouter = new Hono();

userRouter.route("/profile", profileRouter);

export { userRouter };
