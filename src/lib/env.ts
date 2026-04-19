function read(key: string, { required }: { required: boolean }): string | undefined {
  const value = process.env[key];
  if (required && (value === undefined || value === "")) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

export const env = {
  siteUrl:
    read("NEXT_PUBLIC_SITE_URL", { required: false }) ??
    "https://www.fixitreal.com",
  isProd: process.env.NODE_ENV === "production",
  vercelEnv: process.env.VERCEL_ENV ?? "development",
};
