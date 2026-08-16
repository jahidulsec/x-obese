import { Hono } from "hono";
import { jwtMiddleware } from "../../../../middlewares/jwt.ts";
import { getUserByToken } from "./controllers/get-by-token.ts";
import { updateUserByToken } from "./controllers/update-by-token.ts";
import { deleteUserByToken } from "./controllers/delete-by-token.ts";

const profileRouter = new Hono();

// user profile CRUD by token
profileRouter.use(jwtMiddleware);
profileRouter.route("/token", getUserByToken);
profileRouter.route("/token", updateUserByToken);
profileRouter.route("/token", deleteUserByToken);

export { profileRouter };
