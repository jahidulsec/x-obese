import "dotenv/config";
import { createEnv } from "@t3-oss/env-core";
import * as z from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().min(3),
    DATABASE_USER: z.string().min(3),
    DATABASE_PASSWORD: z.string().min(6),
    DATABASE_NAME: z.string().min(3),
    DATABASE_HOST: z.string().min(3),
    DATABASE_PORT: z.string().min(4),
    PORT: z.coerce.number().optional(),
    ACCESS_TOKEN_SECRET: z.string().min(6),
    REFRESH_TOKEN_SECRET: z.string().min(6),
    DEFAULT_PASS: z.string().min(6),
    SSL_STATUS: z.string().optional().default("0"),
    SMS_USERNAME: z.string().min(1),
    SMS_PASSWORD: z.string().min(1),
    PUBLIC_API_URL: z.string().min(1),
  },
  runtimeEnv: process.env,
});
