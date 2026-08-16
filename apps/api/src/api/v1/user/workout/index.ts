import { Hono } from "hono";
import { getUserWorkoutsByToken } from "./controllers/get-all-by-token.ts";
import { createUserWorkoutByToken } from "./controllers/create-by-token.ts";
import { getUserActivityHistory } from "./controllers/get-activity-history.ts";
import { createUserStep } from "./controllers/create-steps.ts";
import { getMyWorkouts } from "./controllers/get-my-workouts.ts";
import { jwtMiddleware } from "../../../../middlewares/jwt.ts";

const userWorkoutRouter = new Hono();

userWorkoutRouter.use(jwtMiddleware);
userWorkoutRouter.route("/", getUserWorkoutsByToken);
userWorkoutRouter.route("/", createUserWorkoutByToken);

userWorkoutRouter.route("/history", getUserActivityHistory);
userWorkoutRouter.route("/list", getMyWorkouts);
userWorkoutRouter.route("/steps", createUserStep);

export { userWorkoutRouter };
