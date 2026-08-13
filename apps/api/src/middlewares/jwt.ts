import { createMiddleware } from "hono/factory";
import { ErrorFactory } from "../utils/error.ts";
import { jwtInstance } from "../libs/jwt.ts";

const jwtMiddleware = createMiddleware(async (c, next) => {
  const authHeader = c.req.header("Authorization");

  // optional but recommended
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw ErrorFactory.create("UNAUTHORIZED", "Token is not provided");
  }

  const token = authHeader.split(" ")[1];

  const payload = await jwtInstance.verify(token as string, "access");

  //   set payload
  c.set("jwtPayload", payload);

  await next();
});

export { jwtMiddleware };
