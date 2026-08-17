import { Hono } from "hono";
import { validator } from "hono/validator";

const createBanner = new Hono();

createBanner.post(
  "/",
  validator("form", (value) => {}),
  async (c) => {},
);

export { createBanner };
