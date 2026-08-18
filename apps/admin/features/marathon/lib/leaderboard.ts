"use server";

import { api } from "@/lib/instances";
import { generateCleanQueryParams } from "@/utils/helper";
import { apiResponse } from "@/utils/response";
import {
  marathonUsersQueryInputTypes,
  marathonUsersQuerySchema,
} from "@repo/validator";

export const getMarathonUsers = async (query: marathonUsersQueryInputTypes) => {
  try {
    // get searchparams
    const validatedParams = marathonUsersQuerySchema.parse(query);

    const searchParams = generateCleanQueryParams(validatedParams);

    const res = await api.fetchWithAuth(
      `/api/marathon/v1/user?${searchParams.toString()}`,
      {
        next: {
          tags: ["marathon"],
        },
      },
    );
    return apiResponse.success(res);
  } catch (error) {
    return apiResponse.error(error);
  }
};
