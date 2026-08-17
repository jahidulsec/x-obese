import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { serveStatic } from "@hono/node-server/serve-static";
import { customLogger } from "./libs/logger.ts";
import { apiRouter } from "./routes/index.ts";
import { handleError } from "./libs/error.ts";

const app = new Hono();

// middleware
app.use(cors());
app.use(logger(customLogger));

// Expose storage folder
app.use(
  "/files/*",
  serveStatic({
    root: "./storage",
    rewriteRequestPath: (path) => path.replace(/^\/files/, ""),
  }),
);

// api routes
app.route("/api", apiRouter);

app.get("/health", async (c) => {
  c.status(200);
  return c.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
});

// error handler
app.onError((err, c) => {
  const { status, message, details, type } = handleError(err);
  c.status(status as any);
  return c.json({
    success: false,
    statusCode: status,
    message,
    details,
    type,
  });
});

export { app };
