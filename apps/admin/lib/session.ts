import "server-only";

import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { AuthUser } from "@/types/auth-user";
import { DecryptPayload, decrypt as decryptLib } from "@/utils/encryption";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: JWTPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.error(error);
    console.log("Failed to verify session");
  }
}

export async function createSession(user: AuthUser) {
  const expiresAt = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ ...user, expiresAt });

  const cookie = await cookies();

  cookie.set("session", session, {
    httpOnly: true,
    secure: process.env.COOKIE_SECURE === "1",
    expires: expiresAt,
    sameSite: process.env.COOKIE_SECURE === "1" ? "none" : "lax",
    path: "/",
  });
}

export async function storeRefreshToken(payload: DecryptPayload) {
  const expiresAt = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000); // 1 day
  const session = await encrypt({ ...payload, expiresAt });

  const cookie = await cookies();

  cookie.set("rt", session, {
    httpOnly: true,
    secure: process.env.COOKIE_SECURE === "1",
    expires: expiresAt,
    sameSite: process.env.COOKIE_SECURE === "1" ? "none" : "lax",
    path: "/",
  });
}

export async function storeAccessToken(payload: DecryptPayload) {
  const expiresAt = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000); // 5 mins
  const session = await encrypt({ ...payload, expiresAt });

  const cookie = await cookies();

  cookie.set("at", session, {
    httpOnly: true,
    secure: process.env.COOKIE_SECURE === "1",
    expires: expiresAt,
    sameSite: process.env.COOKIE_SECURE === "1" ? "none" : "lax",
    path: "/",
  });
}

export async function decryptToken(key: string) {
  const cookie = await cookies();
  const cookieValue = cookie.get(key)?.value;
  const token = await decrypt(cookieValue);

  if (!token) return "";

  const decryptedValue = decryptLib(token as DecryptPayload);

  return decryptedValue;
}

export async function deleteSession() {
  const cookie = await cookies();

  cookie.delete("session");
  cookie.delete("role");
}
