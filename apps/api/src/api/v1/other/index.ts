import { Hono } from "hono";
import { bannerRouter } from "./banner/index.ts";
import { blogRouter } from "./blog/index.ts";

const otherRouter = new Hono();

otherRouter.route("/banner", bannerRouter);
otherRouter.route("/blog", blogRouter);

export { otherRouter };
