import { Hono } from "hono";
import { bannerRouter } from "./banner/index.ts";
import { blogRouter } from "./blog/index.ts";
import { calendarRouter } from "./calendar/index.tsx";

const otherRouter = new Hono();

otherRouter.route("/banner", bannerRouter);
otherRouter.route("/blog", blogRouter);
otherRouter.route("/calendar", calendarRouter);

export { otherRouter };
