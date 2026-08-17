import crypto from "crypto";

const SECRET_KEY = crypto.scryptSync(process.env.SESSION_SECRET!, "salt", 32);

const ALGORITHM = "aes-256-gcm";

export function encrypt(text: string) {
  const iv = crypto.randomBytes(16);

  const ciper = crypto.createCipheriv(ALGORITHM, SECRET_KEY, iv);

  let encrypted = ciper.update(text, "utf-8", "hex");
  encrypted += ciper.final("hex");

  const authTag = ciper.getAuthTag();

  return {
    iv: iv.toString("hex"),
    content: encrypted,
    tag: authTag.toString("hex"),
  };
}

export type DecryptPayload = {
  iv: string;
  content: string;
  tag: string;
};
export function decrypt(data: DecryptPayload) {
  const decipher = crypto.createDecipheriv(
    ALGORITHM,
    SECRET_KEY,
    Buffer.from(data.iv, "hex"),
  );

  decipher.setAuthTag(Buffer.from(data.tag, "hex"));

  let decrypted = decipher.update(data.content, "hex", "utf-8");
  decrypted += decipher.final("utf-8");

  return decrypted;
}
