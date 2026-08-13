export const getCleanedData = (data: any) => {
  return Object.fromEntries(
    Object.entries(data).filter(([key, value]) => value !== undefined),
  );
};

export function getPlatform(userAgent: string) {
  const ua = userAgent;

  if (/Android/i.test(ua)) return "Android";
  if (/iPhone|iPad|iPod/i.test(ua)) return "iOS";
  if (/Windows/i.test(ua)) return "Windows";
  if (/Macintosh|Mac OS X/i.test(ua)) return "macOS";
  if (/Linux/i.test(ua)) return "Linux";

  return "Unknown";
}
