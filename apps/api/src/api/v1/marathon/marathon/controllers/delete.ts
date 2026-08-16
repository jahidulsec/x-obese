import { Hono } from "hono";
import { jwtMiddleware } from "../../../../../middlewares/jwt.ts";
import { verifyRoles } from "../../../../../middlewares/verify-roles.ts";
import { validator } from "hono/validator";
import { requiredIdSchema } from "@repo/validator";
import * as marathonService from "../../../../../services/marathon.ts";
import { ErrorFactory } from "../../../../../utils/error.ts";
import { deleteFileFromStorage } from "../../../../../utils/file.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const deleteMarathon = new Hono();

deleteMarathon.delete(
  "/",
  jwtMiddleware,
  verifyRoles("superadmin", "admin"),
  validator("param", (value) => {
    const parsed = requiredIdSchema.parse(value);
    return parsed;
  }),
  async (c) => {
    const { id } = c.req.valid("param");

    //get single item with validated id
    const { data } = await marathonService.getSingle({ id });

    if (!data) {
      throw ErrorFactory.create("NOT_FOUND", "Marathon not found!");
    }

    const deleted: any = await marathonService.deleteOne({ id });

    if (deleted == 0) {
      throw ErrorFactory.create("BAD_REQUEST", "Marathon is not deleted");
    }

    // delete previous image
    if (data?.imagePath) {
      await deleteFileFromStorage(data.imagePath);
    }

    const responseData = {
      success: true,
      message: "Marathon is deleted successfully!",
      data: data,
    };

    return c.json(apiResponse.single(responseData));
  },
);

export { deleteMarathon };
