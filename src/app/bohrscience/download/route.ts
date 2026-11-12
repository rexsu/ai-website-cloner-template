import { NextResponse } from "next/server";

const FALLBACK = {
  apple: {
    source: "releases",
    url: "https://cdn.dp.tech/scix/desktop/prod/darwin_aarch64/0.10.20/%E7%8E%BB%E5%B0%94%C2%B7%E7%A7%91%E5%AD%A6%E7%A9%BA%E9%97%B4_0.10.20_aarch64.dmg",
  },
  intel: {
    source: "releases",
    url: "https://cdn.bohrium.com/scix/desktop/prod/darwin_x86_64/0.10.20/%E7%8E%BB%E5%B0%94%C2%B7%E7%A7%91%E5%AD%A6%E7%A9%BA%E9%97%B4_0.10.20_x86_64.dmg",
  },
  windows: {
    source: "releases",
    url: "https://cdn.dp.tech/scix/desktop/prod/windows_x86_64/0.10.20/%E7%8E%BB%E5%B0%94%C2%B7%E7%A7%91%E5%AD%A6%E7%A9%BA%E9%97%B4_0.10.20_x64-setup.exe",
  },
} as const;

function isManifest(
  value: unknown,
): value is {
  apple: { url: string; source?: string };
  intel: { url: string; source?: string };
  windows: { url: string; source?: string };
} {
  if (!value || typeof value !== "object") return false;
  const record = value as Record<string, { url?: unknown }>;
  return (
    typeof record.apple?.url === "string" &&
    typeof record.intel?.url === "string" &&
    typeof record.windows?.url === "string"
  );
}

export async function GET() {
  try {
    const response = await fetch("https://www.bohrium.com/bohrscience/download", {
      cache: "no-store",
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    if (response.ok) {
      const data: unknown = await response.json();
      if (isManifest(data)) {
        return NextResponse.json(data);
      }
    }
  } catch {
    // Fall through to local snapshot of release URLs.
  }

  return NextResponse.json(FALLBACK);
}
