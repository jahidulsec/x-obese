import { Hono } from "hono";
import { deleteAgeRule } from "./controllers/delete-age-rule.ts";

const marathonAgeRuleRouter = new Hono();

marathonAgeRuleRouter.route("/:id", deleteAgeRule);

export { marathonAgeRuleRouter };
