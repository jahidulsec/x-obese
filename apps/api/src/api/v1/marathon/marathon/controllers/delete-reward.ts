import { Hono } from "hono";
import { jwtMiddleware } from "../../../../../middlewares/jwt.ts";
import { verifyRoles } from "../../../../../middlewares/verify-roles.ts";
import { validator } from "hono/validator";
import { requiredIdSchema } from "@repo/validator";
import * as marathonService from "../../../../../services/marathon.ts";
import { ErrorFactory } from "../../../../../utils/error.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const deleteReward = new Hono();

deleteReward.delete(
  "/",
  jwtMiddleware,
  verifyRoles("admin", "superadmin"),
  validator("param", (value) => {
    const parsed = requiredIdSchema.parse(value);
    return parsed;
  }),
  async (c) => {
    const { id } = c.req.valid("param");

    const deleted: any = await marathonService.deleteReward(id);

    if (deleted == 0) {
      throw ErrorFactory.create("BAD_REQUEST", "Reward is not deleted");
    }

    return c.json(
      apiResponse.single({
        message: "Marathon reward is deleted successfully!",
        data: null,
      }),
    );
  },
);

export { deleteReward };
