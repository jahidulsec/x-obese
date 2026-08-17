"use server";

import { getAuthUser } from "@/lib/dal";
import { api } from "@/lib/instances";
import { convertIntoFormData } from "@/utils/helper";
import { apiResponse } from "@/utils/response";
import {
  createBannerInputsTypes,
  updateBannerInputTypes,
} from "@repo/validator";
import { updateTag } from "next/cache";

export const createBanner = async (data: createBannerInputsTypes) => {
  try {
    const user = await getAuthUser();

    if (!user) throw new Error("You are not permitted");

    const formData = convertIntoFormData(data);

    const res = await api.fetchWithAuth("/api/other/v1/banner", {
      method: "POST",
      body: formData,
    });

    updateTag("banner");

    return apiResponse.success(res);
  } catch (error) {
    return apiResponse.error(error);
  }
};

export const updateBanner = async (
  id: string,
  data: updateBannerInputTypes,
) => {
  try {
    const formData = convertIntoFormData(data);

    const res = await api.fetchWithAuth("/api/other/v1/banner/" + id, {
      method: "PATCH",
      body: formData,
    });

    updateTag("banner");

    return apiResponse.success(res);
  } catch (error) {
    return apiResponse.error(error);
  }
};

export const deleteBanner = async (id: string) => {
  try {
    const res = await api.fetchWithAuth("/api/other/v1/banner/" + id, {
      method: "DELETE",
    });

    updateTag("banner");

    return apiResponse.success(res);
  } catch (error) {
    return apiResponse.error(error);
  }
};
