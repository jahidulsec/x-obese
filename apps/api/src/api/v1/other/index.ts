import { Hono } from "hono";
import { bannerRouter } from "./banner/index.ts";

const otherRouter = new Hono();

otherRouter.route("/banner", bannerRouter);

export { otherRouter };
