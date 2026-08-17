import { Hono } from "hono";
import { validator } from "hono/validator";

const updateBanner = new Hono();

updateBanner.patch(
  "/",
  validator("form", (value) => {}),
  async (c) => {},
);

export { updateBanner };
