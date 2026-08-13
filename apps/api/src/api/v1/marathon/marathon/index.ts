import { Hono } from "hono";
import { createMarathon } from "./controllers/create.ts";
import { deleteReward } from "./controllers/delete-reward.ts";

const mMarathonRouter = new Hono();

mMarathonRouter.route("/", createMarathon);

mMarathonRouter.route("/reward/:id", deleteReward);

export { mMarathonRouter };
