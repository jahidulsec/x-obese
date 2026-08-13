import { sign as jwtSign, verify as jwtVerify } from "hono/jwt";

type TokenType = "access" | "refresh";

export class JWT {
  private static instance: JWT;

  // private constructor prevents direct instantiation
  private constructor() {}

  public static getInstance(): JWT {
    if (!JWT.instance) {
      JWT.instance = new JWT();
    }
    return JWT.instance;
  }

  private getConfig(type: TokenType) {
    const accessSecret = process.env.ACCESS_TOKEN_SECRET;
    const refreshSecret = process.env.REFRESH_TOKEN_SECRET;

    if (!accessSecret || !refreshSecret) {
      throw new Error("JWT secrets are missing in environment variables");
    }

    return {
      access: {
        key: accessSecret,
        expiresInSec: 5 * 60, // 5 minutes
      },
      refresh: {
        key: refreshSecret,
        expiresInSec: 24 * 60 * 60, // 1 day
      },
    }[type];
  }

  async sign(payload: Record<string, any>, type: TokenType) {
    const { key, expiresInSec } = this.getConfig(type);
    const expireTime = Math.floor(Date.now() / 1000) + expiresInSec;
    const token = await jwtSign({ ...payload, exp: expireTime }, key, "HS256");

    return token;
  }

  async verify(token: string, type: TokenType) {
    const { key } = this.getConfig(type);
    const payload = await jwtVerify(token, key, "HS256");
    return payload;
  }
}

export const jwtInstance = JWT.getInstance();
