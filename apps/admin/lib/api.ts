"use server";

import { decryptToken } from "./session";

class FetchApiJSON {
  private _baseUrl: string = "";

  setBaseUrl(url: string) {
    this._baseUrl = url;
  }

  async fetchData(
    input: string | URL | Request,
    init?: RequestInit,
  ): Promise<any> {
    const res = await fetch(`${this._baseUrl}${input}`, {
      ...init,
      headers: {
        ...init?.headers,
      },
    });

    const data = await res.json();

    if (!res.ok) throw data;

    return data;
  }

  async fetchWithAuth(
    input: string | URL | Request,
    init?: RequestInit,
  ): Promise<any> {
    const makeRequest = async (token: string) => {
      const res = await fetch(`${this._baseUrl}${input}`, {
        ...init,
        headers: {
          ...init?.headers,
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      return { res, data };
    };

    // get access token
    let accessToken = await decryptToken("at");

    let { res, data } = await makeRequest(accessToken as string);

    // Handle expired token
    if (data?.type === "JwtTokenExpired") {
      const newToken = await this.getNewToken();

      if (!newToken) {
        accessToken = "";
        throw new Error("Session expired");
      }

      accessToken = newToken;

      // retry request with new token
      ({ res, data } = await makeRequest(accessToken));
    }

    if (!res.ok) {
      throw data;
    }

    return data;
  }

  private async getNewToken(): Promise<string | null> {
    const refreshToken = await decryptToken("rt");

    if (!refreshToken) return null;

    const res = await fetch(`${this._baseUrl}/api/v1/auth/token/revoke/admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh_token: refreshToken,
      }),
    });

    const data = await res.json();

    if (!res.ok) return null;

    return data.data.access_token;
  }

  async fetchBlob(
    input: string | URL | Request,
    init?: RequestInit,
  ): Promise<any> {
    const res = await fetch(`${this._baseUrl}${input}`, {
      ...init,
      headers: {
        ...init?.headers,
      },
    });

    const data = await res.blob();

    return data;
  }

  async fetchBlobWithAuth(
    input: string | URL | Request,
    init?: RequestInit,
  ): Promise<Response> {
    const makeRequest = async (token: string) => {
      return fetch(`${this._baseUrl}${input}`, {
        ...init,
        headers: {
          ...init?.headers,
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      });
    };

    let accessToken = await decryptToken("at");

    if (!accessToken) {
      throw new Error("Unauthorized");
    }

    let res = await makeRequest(accessToken);

    if (res.status === 401) {
      const newToken = await this.getNewToken();

      if (!newToken) {
        throw new Error("Session expired");
      }

      accessToken = newToken;
      res = await makeRequest(accessToken);
    }

    return res;
  }
}

export { FetchApiJSON };
