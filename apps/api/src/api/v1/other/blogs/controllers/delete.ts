import { Hono } from "hono";
import { validator } from "hono/validator";

const deleteBanner = new Hono();

deleteBanner.delete(
  "/",
  validator("form", (value) => {}),
  async (c) => {},
);

export { deleteBanner };
