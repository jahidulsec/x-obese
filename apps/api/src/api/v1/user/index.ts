import { Hono } from "hono";
import { profileRouter } from "./profile/index.ts";
import { userWorkoutRouter } from "./workout/index.ts";
import { userWorkoutPlanRouter } from "./workout-plan/index.ts";

const userRouter = new Hono();

userRouter.route("/profile", profileRouter);
userRouter.route("/workout", userWorkoutRouter);
userRouter.route("/workout/plan", userWorkoutPlanRouter);

export { userRouter };
