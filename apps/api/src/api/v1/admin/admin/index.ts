import { Hono } from "hono";
import { createAdmin } from "./controllers/create.ts";
import { getAdmins } from "./controllers/get-multi.ts";
import { updateAdmin } from "./controllers/update-single.ts";
import { getAdmin } from "./controllers/get-single.ts";
import { getAdminByToken } from "./controllers/get-single-by-token.ts";
import { deleteAdmin } from "./controllers/delete.ts";

const aAdminRouter = new Hono();

aAdminRouter.route("/", createAdmin);
aAdminRouter.route("/", getAdmins);
aAdminRouter.route("/", getAdminByToken);
aAdminRouter.route("/:id", updateAdmin);
aAdminRouter.route("/:id", getAdmin);
aAdminRouter.route("/:id", deleteAdmin);

export { aAdminRouter };
