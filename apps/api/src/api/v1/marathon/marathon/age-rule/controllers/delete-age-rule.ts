import { Hono } from "hono";
import { jwtMiddleware } from "../../../../../../middlewares/jwt.ts";
import { verifyRoles } from "../../../../../../middlewares/verify-roles.ts";
import { validator } from "hono/validator";
import { requiredIdSchema } from "@repo/validator";
import * as marathonService from "../../../../../../services/marathon.ts";
import { ErrorFactory } from "../../../../../../utils/error.ts";
import { apiResponse } from "../../../../../../libs/response.ts";

const deleteAgeRule = new Hono();

deleteAgeRule.delete(
  "/",
  jwtMiddleware,
  verifyRoles("superadmin", "admin"),
  validator("param", (value) => {
    const parsed = requiredIdSchema.parse(value);
    return parsed;
  }),
  async (c) => {
    //Validate incoming body data with defined schema
    const validatedData = c.req.valid("param");

    const deleted: any = await marathonService.deleteMarathonUserRule(
      validatedData.id,
    );

    if (deleted == 0) {
      throw ErrorFactory.create("INTERNAL", "Age rule is not deleted");
    }

    const responseData = {
      message: "Marathon age rule is deleted successfully!",
      data: null,
    };

    return c.json(apiResponse.single(responseData));
  },
);

export { deleteAgeRule };
