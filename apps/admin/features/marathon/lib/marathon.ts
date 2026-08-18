"use server";

import { api } from "@/lib/instances";
import { generateCleanQueryParams } from "@/utils/helper";
import { apiResponse } from "@/utils/response";
import {
  marathonsQueryInputTypes,
  marathonsQuerySchema,
} from "@repo/validator";

export const getMarathons = async (query: marathonsQueryInputTypes) => {
  try {
    const validatedParams = marathonsQuerySchema.parse(query);

    const searchParams = generateCleanQueryParams(validatedParams);

    // get data
    const res = await api.fetchData(
      `/api/marathon/v1/marathon?${searchParams}`,
      {
        next: {
          tags: ["marathon"],
          revalidate: 5 * 60,
        },
      },
    );

    return apiResponse.success(res);
  } catch (error) {
    return apiResponse.error(error);
  }
};


export const getMarathon = async (id: string) => {
  try {
    // get data
    const res = await api.fetchData(`/api/marathon/v1/marathon/${id}`, {
      next: {
        tags: ["marathon", id],
        revalidate: 5 * 60,
      },
    });

    return apiResponse.success(res);
  } catch (error) {
    return apiResponse.error(error);
  }
};