import { Hono } from "hono";
import { getBanners } from "./controllers/get-multi.ts";
import { getBanner } from "./controllers/get-single.ts";
import { jwtMiddleware } from "../../../../middlewares/jwt.ts";
import { createBanner } from "./controllers/create.ts";
import { verifyRoles } from "../../../../middlewares/verify-roles.ts";
import { deleteBanner } from "./controllers/delete.ts";
import { updateBanner } from "./controllers/update.ts";

const bannerRouter = new Hono();

bannerRouter.route("/", getBanners);
bannerRouter.route("/:id", getBanner);

bannerRouter.use(jwtMiddleware);
bannerRouter.use(verifyRoles("superadmin", "admin"));
bannerRouter.route("/", createBanner);
bannerRouter.route("/:id", deleteBanner);
bannerRouter.route("/:id", updateBanner);

export { bannerRouter };
