import { NextResponse } from "next/server";
import { DOWNLOAD_FALLBACK } from "@/components/sites/bohrscience/content";

const SOURCE = "https://www.bohrium.com/bohrscience/download";

function isReleaseMap(value: unknown) {
  if (!value || typeof value !== "object") return false;
  return ["apple", "intel", "windows"].every((key) => {
    const entry = (value as Record<string, unknown>)[key];
    return (
      !!entry &&
      typeof entry === "object" &&
      typeof (entry as { url?: unknown }).url === "string"
    );
  });
}

export async function GET() {
  try {
    const response = await fetch(SOURCE, { cache: "no-store" });
    if (!response.ok) throw new Error(String(response.status));
    const data: unknown = await response.json();
    if (!isReleaseMap(data)) throw new Error("invalid payload");
    return NextResponse.json(data, {
      headers: { "cache-control": "no-store" },
    });
  } catch {
    return NextResponse.json(DOWNLOAD_FALLBACK, {
      headers: { "cache-control": "no-store" },
    });
  }
}
