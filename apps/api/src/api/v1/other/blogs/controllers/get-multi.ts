import { Hono } from "hono";
import { validator } from "hono/validator";

const getBanners = new Hono();

getBanners.get(
  "/",
  validator("form", (value) => {}),
  async (c) => {},
);

export { getBanners };
