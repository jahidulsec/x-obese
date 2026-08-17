import { Hono } from "hono";
import { validator } from "hono/validator";

const getBanner = new Hono();

getBanner.get(
  "/",
  validator("form", (value) => {}),
  async (c) => {},
);

export { getBanner };
