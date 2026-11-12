import { NextResponse } from "next/server";

const UPSTREAM = "https://www.bohrium.com/bohrscience/download";

type UpstreamEntry = {
  source?: string;
  url?: string;
};

type UpstreamPayload = {
  apple?: UpstreamEntry | null;
  intel?: UpstreamEntry | null;
  windows?: UpstreamEntry | null;
};

function isTrustedUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return (
      parsed.protocol === "https:" &&
      !parsed.username &&
      !parsed.password &&
      (parsed.hostname === "cdn.dp.tech" ||
        parsed.hostname === "cdn.bohrium.com" ||
        parsed.hostname.endsWith(".dp.tech") ||
        parsed.hostname.endsWith(".bohrium.com"))
    );
  } catch {
    return false;
  }
}

export async function GET() {
  try {
    const response = await fetch(UPSTREAM, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `upstream ${response.status}` },
        { status: 502 },
      );
    }

    const data = (await response.json()) as UpstreamPayload;
    const platforms = ["apple", "intel", "windows"] as const;
    const result: Record<string, UpstreamEntry | null> = {};

    for (const key of platforms) {
      const entry = data[key];
      if (entry?.url && isTrustedUrl(entry.url)) {
        result[key] = { source: entry.source ?? "releases", url: entry.url };
      } else {
        result[key] = null;
      }
    }

    return NextResponse.json(result, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return NextResponse.json({ error: "fetch failed" }, { status: 502 });
  }
}
