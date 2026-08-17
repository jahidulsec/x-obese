"use server";

import { api } from "@/lib/instances";
import { generateCleanQueryParams } from "@/utils/helper";
import { apiResponse } from "@/utils/response";
import { bannersQueryInputTypes, bannersQuerySchema } from "@repo/validator";

export const getBanners = async (query: bannersQueryInputTypes) => {
  try {
    const validatedParams = bannersQuerySchema.parse(query);

    const searchParams = generateCleanQueryParams(validatedParams);

    // get data
    const res = await api.fetchData(`/api/other/v1/banner?${searchParams}`, {
      next: {
        tags: ["banner"],
        revalidate: 5 * 60,
      },
    });

    return apiResponse.success(res);
  } catch (error) {
    return apiResponse.error(error);
  }
};
