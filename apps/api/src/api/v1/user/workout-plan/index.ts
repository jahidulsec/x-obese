import { Hono } from "hono";
import { jwtMiddleware } from "../../../../middlewares/jwt.ts";
import { createUserWorkoutPlan } from "./controllers/create.ts";
import { updateUserWorkoutPlan } from "./controllers/update.ts";
import { deleteUserWorkoutPlan } from "./controllers/delete.ts";
import { getUserWorkoutPlan } from "./controllers/get-single.ts";
import { getUserWorkoutPlanByToken } from "./controllers/get-by-token.ts";

const userWorkoutPlanRouter = new Hono();

userWorkoutPlanRouter.use(jwtMiddleware);
userWorkoutPlanRouter.route('/', createUserWorkoutPlan)
userWorkoutPlanRouter.route('/', getUserWorkoutPlanByToken)
userWorkoutPlanRouter.route('/:id', updateUserWorkoutPlan)
userWorkoutPlanRouter.route('/:id', deleteUserWorkoutPlan)
userWorkoutPlanRouter.route('/:id', getUserWorkoutPlan)

export { userWorkoutPlanRouter };
