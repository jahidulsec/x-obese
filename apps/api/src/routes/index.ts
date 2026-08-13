import { Hono } from "hono";
import { adminRouter } from "../api/v1/admin/index.ts";
import { userRouter } from "../api/v1/user/index.ts";
import { otherRouter } from "../api/v1/other/index.ts";
import { marathonRouter } from "../api/v1/marathon/index.ts";
import { authRouter } from "../api/v1/auth/index.ts";

const apiRouter = new Hono();

apiRouter.route("/admin/v1", adminRouter);
apiRouter.route("/user/v1", userRouter);
apiRouter.route("/other/v1", otherRouter);
apiRouter.route("/marathon/v1", marathonRouter);
apiRouter.route("/auth/v1", authRouter);

export { apiRouter };
