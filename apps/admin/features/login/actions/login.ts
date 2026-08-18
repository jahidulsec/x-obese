"use server";

import { api } from "@/lib/instances";
import {
  createSession,
  deleteSession,
  storeAccessToken,
  storeRefreshToken,
} from "@/lib/session";
import { encrypt } from "@/utils/encryption";
import { apiResponse } from "@/utils/response";
import { adminsLoginInputTypes } from "@repo/validator";

export const userLogin = async (data: adminsLoginInputTypes) => {
  try {
    // check user
    const res = await api.fetchData("/api/auth/v1/admins/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });

    // create session
    await createSession({
      username: res.data.username,
      role: res.data.role,
      name: res.data.name,
    });

    // store token
    const encryptedRefreshToken = encrypt(res.data.refresh_token);
    await storeRefreshToken(encryptedRefreshToken);

    const encryptedAccessToken = encrypt(res.data.access_token);
    await storeAccessToken(encryptedAccessToken);

    return apiResponse.success({
      message: "You are logged in successfully",
    });
  } catch (error) {
    return apiResponse.error(error);
  }
};

export const userLogout = async () => {
  try {
    await deleteSession();
    return apiResponse.success({ message: "You are logged out" });
  } catch (error) {
    return apiResponse.error(error);
  }
};
