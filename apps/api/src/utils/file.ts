import type { Context } from "hono";
import fs from "fs/promises";
import path from "path";
import fsSync from "fs";
import { storageFolderName } from "../libs/data.js";
import { env } from "../libs/env.ts";

export const generateFileLink = (c: Context, filePath: string) => {
  if (filePath.startsWith("http")) {
    return filePath;
  }

  const url = new URL(c.req.url);

  const protocol =
    c.req.header("x-forwarded-proto") || url.protocol.replace(":", "");

  let host = c.req.header("host") || url.host;

  if (host.startsWith("10.")) {
    host = `${env.PUBLIC_API_URL}:${host.split(":")[1]}`;
  }

  return `${protocol}://${host}/files/${filePath}`;
};

export const saveFileToStorage = async (file: File, folderName: string) => {
  const dir = path.join("storage", folderName);

  // 1. ensure folder exists
  await fs.mkdir(dir, { recursive: true });

  // 2. generate safe file path
  const fileName = `${crypto.randomUUID()}-${file.name}`;
  const fullPath = path.join(dir, fileName);

  // 3. write file
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(fullPath, buffer);

  // return relative path for later use (e.g. URL)
  const filePath = [folderName, fileName].filter(Boolean).join("/");

  return { filePath, fileName };
};

export const deleteFileFromStorage = async (filePath: string) => {
  const baseDir = storageFolderName;
  const safePath = filePath.replace(/^(\.\.(\/|\\|$))+/, "");
  const fullPath = path.join(baseDir, safePath);

  if (fsSync.existsSync(fullPath)) {
    await fs.unlink(fullPath);
  }
};
