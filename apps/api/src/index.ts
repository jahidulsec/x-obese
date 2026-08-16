import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { env } from "./libs/env.ts";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

serve(
  {
    fetch: app.fetch,
    port: env.PORT || 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
