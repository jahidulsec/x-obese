"use server";

import { getAuthUser } from "@/lib/dal";
import { api } from "@/lib/instances";
import { convertIntoFormData } from "@/utils/helper";
import { apiResponse } from "@/utils/response";
import {
  createMarathonInputsTypes,
  updateMarathonInputTypes,
} from "@repo/validator";
import { updateTag } from "next/cache";

export const createMarathon = async (data: createMarathonInputsTypes) => {
  try {
    const user = await getAuthUser();

    if (!user) throw new Error("You are not permitted");

    const formData = convertIntoFormData(data);

    const res = await api.fetchWithAuth("/api/marathon/v1/marathon", {
      method: "POST",
      body: formData,
    });

    updateTag("marathon");

    return apiResponse.success(res);
  } catch (error) {
    return apiResponse.error(error);
  }
};

export const updateMarathon = async (
  id: string,
  data: updateMarathonInputTypes,
) => {
  try {
    const formData = convertIntoFormData(data);

    const res = await api.fetchWithAuth("/api/marathon/v1/marathon/" + id, {
      method: "PATCH",
      body: formData,
    });

    updateTag("marathon");

    return apiResponse.success(res);
  } catch (error) {
    return apiResponse.error(error);
  }
};

export const deleteMarathon = async (id: string) => {
  try {
    const res = await api.fetchWithAuth("/api/marathon/v1/marathon/" + id, {
      method: "DELETE",
    });

    updateTag("marathon");

    return apiResponse.success(res);
  } catch (error) {
    return apiResponse.error(error);
  }
};

export const deleteMarathonReward = async (id: string) => {
  try {
    const res = await api.fetchWithAuth(
      `/api/marathon/v1/marathon/reward/${id}`,
      {
        method: "DELETE",
      },
    );

    updateTag("marathon");

    return apiResponse.success(res);
  } catch (error) {
    return apiResponse.error(error);
  }
};


export const deleteMarathonAgeRule = async (id: string) => {
  try {
    const res = await api.fetchWithAuth(
      `/api/marathon/v1/marathon/age-rule/${id}`,
      {
        method: "DELETE",
      },
    );

    updateTag("marathon");

    return apiResponse.success(res);
  } catch (error) {
    return apiResponse.error(error);
  }
};