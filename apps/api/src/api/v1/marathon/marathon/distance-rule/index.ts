import { Hono } from "hono";
import { deleteDistanceRule } from "./controllers/delete-rule.ts";

const marathonDistanceRuleRouter = new Hono();

marathonDistanceRuleRouter.route("/:id", deleteDistanceRule);

export { marathonDistanceRuleRouter };
