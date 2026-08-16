import { Hono } from "hono";
import * as marathonService from "../../../../../services/marathon.ts";
import { apiResponse } from "../../../../../libs/response.ts";

const getMarathonStats = new Hono();

getMarathonStats.get("/", async (c) => {
  const [total, onsite, virtual] = await Promise.all([
    marathonService.getStats(),
    marathonService.getStats("onsite"),
    marathonService.getStats("virtual"),
  ]);

  const responseData = {
    message: "Get Marathon details successfully!",
    data: {
      total,
      onsite,
      virtual,
    },
  };

  //send success response
  return c.json(apiResponse.single(responseData));
});

export { getMarathonStats };
