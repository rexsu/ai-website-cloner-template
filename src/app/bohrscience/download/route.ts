import { NextResponse } from "next/server";

const UPSTREAM = "https://www.bohrium.com/bohrscience/download";

export async function GET() {
  try {
    const response = await fetch(UPSTREAM, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "upstream_failed", status: response.status },
        { status: 502 },
      );
    }

    const data: unknown = await response.json();
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return NextResponse.json({ error: "upstream_unreachable" }, { status: 502 });
  }
}
