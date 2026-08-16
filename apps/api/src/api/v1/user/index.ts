import { Hono } from "hono";
import { profileRouter } from "./profile/index.ts";
import { userWorkoutRouter } from "./workout/index.ts";

const userRouter = new Hono();

userRouter.route("/profile", profileRouter);
userRouter.route("/workout", userWorkoutRouter);

export { userRouter };
