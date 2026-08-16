import { Hono } from "hono";
import { createMarathon } from "./controllers/create.ts";
import { deleteReward } from "./controllers/delete-reward.ts";
import { getMarathon } from "./controllers/get-single.ts";
import { getMarathonStats } from "./controllers/get-stats.ts";
import { deleteMarathon } from "./controllers/delete.ts";
import { updateMarathon } from "./controllers/update.ts";
import { marathonAgeRuleRouter } from "./age-rule/index.ts";

const mMarathonRouter = new Hono();

mMarathonRouter.route("/", createMarathon);
mMarathonRouter.route("/", getMarathon);
mMarathonRouter.route("/", getMarathonStats);
mMarathonRouter.route("/:id", deleteMarathon);
mMarathonRouter.route("/:id", updateMarathon);

mMarathonRouter.route("/reward/:id", deleteReward);

mMarathonRouter.route("/age-rule", marathonAgeRuleRouter);

export { mMarathonRouter };
