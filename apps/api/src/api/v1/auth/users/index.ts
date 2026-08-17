import { Hono } from "hono";
import { userLogin } from "./controllers/login.ts";
import { userSignUp } from "./controllers/sign-up.ts";
import { verifyUserOtp } from "./controllers/verify-otp.ts";

const userAuthRouter = new Hono();

userAuthRouter.route("/login", userLogin);
userAuthRouter.route("/sign-up", userSignUp);
userAuthRouter.route("/verify-otp/:id", verifyUserOtp);

export { userAuthRouter };
