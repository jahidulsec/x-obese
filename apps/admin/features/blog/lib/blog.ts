"use server";

import { api } from "@/lib/instances";
import { generateCleanQueryParams } from "@/utils/helper";
import { apiResponse } from "@/utils/response";
import { blogsQueryInputTypes, blogsQuerySchema } from "@repo/validator";

export const getBlogs = async (query: blogsQueryInputTypes) => {
  try {
    const validatedParams = blogsQuerySchema.parse(query);

    const searchParams = generateCleanQueryParams(validatedParams);

    // get data
    const res = await api.fetchData(`/api/other/v1/blog?${searchParams}`, {
      next: {
        tags: ["blog"],
        revalidate: 5 * 60,
      },
    });

    return apiResponse.success(res);
  } catch (error) {
    return apiResponse.error(error);
  }
};

export const getBlog = async (id: string) => {
  try {
    // get data
    const res = await api.fetchData(`/api/other/v1/blog/${id}`, {
      next: {
        tags: ["blog", id],
        revalidate: 5 * 60,
      },
    });

    return apiResponse.success(res);
  } catch (error) {
    return apiResponse.error(error);
  }
};
