import { Hono } from "hono";
import { createMarathon } from "./controllers/create.ts";
import { deleteReward } from "./controllers/delete-reward.ts";
import { getMarathon } from "./controllers/get-single.ts";
import { getMarathonStats } from "./controllers/get-stats.ts";
import { deleteMarathon } from "./controllers/delete.ts";
import { updateMarathon } from "./controllers/update.ts";
import { marathonDistanceRuleRouter } from "./distance-rule/index.ts";
import { getMarathons } from "./controllers/get-multi.ts";
import { jwtMiddleware } from "../../../../middlewares/jwt.ts";
import { verifyRoles } from "../../../../middlewares/verify-roles.ts";

const mMarathonRouter = new Hono();

mMarathonRouter.use(jwtMiddleware);
mMarathonRouter.route("/", getMarathons);
mMarathonRouter.route("/:id", getMarathon);
mMarathonRouter.route("/", getMarathonStats);

mMarathonRouter.use(verifyRoles("superadmin", "admin"));
mMarathonRouter.route("/", createMarathon);
mMarathonRouter.route("/:id", deleteMarathon);
mMarathonRouter.route("/:id", updateMarathon);

mMarathonRouter.route("/reward/:id", deleteReward);

mMarathonRouter.route("/age-rule", marathonDistanceRuleRouter);

export { mMarathonRouter };
