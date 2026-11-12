import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Chrome in this environment opens the dev server as 127.0.0.1.
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
