import { Hono } from "hono";
import { updateMarathonUser } from "./controllers/update.ts";
import { createMarathonUser } from "./controllers/create.ts";
import { getMarathonUsers } from "./controllers/get-multi.ts";
import { getMarathonUser } from "./controllers/get-single.ts";
import { getMarathonUserLeadboard } from "./controllers/get-single-leaderboard.ts";
import { deleteMarathonUser } from "./controllers/delete.ts";
import { jwtMiddleware } from "../../../../middlewares/jwt.ts";

const marathonUserRouter = new Hono();

marathonUserRouter.route("/", getMarathonUsers);

marathonUserRouter.use(jwtMiddleware);
marathonUserRouter.route("/", createMarathonUser);
marathonUserRouter.route("/:id", updateMarathonUser);
marathonUserRouter.route("/:id", getMarathonUser);
marathonUserRouter.route("/:id/leaderboard", getMarathonUserLeadboard);
marathonUserRouter.route("/:id", deleteMarathonUser);

export { marathonUserRouter };
