"use server";

import { getAuthUser } from "@/lib/dal";
import { api } from "@/lib/instances";
import { convertIntoFormData } from "@/utils/helper";
import { apiResponse } from "@/utils/response";
import {
  createBlogInputsTypes,
  updateBlogInputTypes,
} from "@repo/validator";
import { updateTag } from "next/cache";

export const createBlog = async (data: createBlogInputsTypes) => {
  try {
    const user = await getAuthUser();

    if (!user) throw new Error("You are not permitted");

    const formData = convertIntoFormData(data);

    const res = await api.fetchWithAuth("/api/other/v1/blog", {
      method: "POST",
      body: formData,
    });

    updateTag("blog");

    return apiResponse.success(res);
  } catch (error) {
    return apiResponse.error(error);
  }
};

export const updateBlog = async (
  id: string,
  data: updateBlogInputTypes,
) => {
  try {
    const formData = convertIntoFormData(data);

    const res = await api.fetchWithAuth("/api/other/v1/blog/" + id, {
      method: "PATCH",
      body: formData,
    });

    updateTag("blog");

    return apiResponse.success(res);
  } catch (error) {
    return apiResponse.error(error);
  }
};

export const deleteBlog = async (id: string) => {
  try {
    const res = await api.fetchWithAuth("/api/other/v1/blog/" + id, {
      method: "DELETE",
    });

    updateTag("blog");

    return apiResponse.success(res);
  } catch (error) {
    return apiResponse.error(error);
  }
};
