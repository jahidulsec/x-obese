import { Hono } from "hono";
import { getBlogs } from "./controllers/get-multi.ts";
import { getBlog } from "./controllers/get-single.ts";
import { jwtMiddleware } from "../../../../middlewares/jwt.ts";
import { createBlog } from "./controllers/create.ts";
import { verifyRoles } from "../../../../middlewares/verify-roles.ts";
import { deleteBlog } from "./controllers/delete.ts";
import { updateBlog } from "./controllers/update.ts";

const blogRouter = new Hono();

blogRouter.route("/", getBlogs);
blogRouter.route("/:id", getBlog);

blogRouter.use(jwtMiddleware);
blogRouter.use(verifyRoles("superadmin", "admin"));
blogRouter.route("/", createBlog);
blogRouter.route("/:id", deleteBlog);
blogRouter.route("/:id", updateBlog);

export { blogRouter };
