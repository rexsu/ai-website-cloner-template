import { NextResponse } from "next/server";

const UPSTREAM = "https://www.bohrium.com/bohrscience/download";

export async function GET() {
  try {
    const res = await fetch(UPSTREAM, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "User-Agent": "bohrscience-clone/1.0",
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `upstream ${res.status}` },
        { status: 502 },
      );
    }

    const data: unknown = await res.json();
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return NextResponse.json({ error: "upstream unavailable" }, { status: 502 });
  }
}
