import type { Metadata } from "next";

import { getMicroPage } from "@/components/sites/ykyw/content";
import { MicroPage } from "@/components/sites/ykyw/micro-page";

type Search = { mId?: string | string[] };

function readId(value: string | string[] | undefined): string {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Search>;
}): Promise<Metadata> {
  const id = readId((await searchParams).mId);
  const page = getMicroPage(id);
  return {
    title: page?.pageName ?? "微页面",
    description: page?.shareDesc,
  };
}

export default async function MicroPageRoute({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  const id = readId((await searchParams).mId);
  const page = getMicroPage(id) ?? null;
  return <MicroPage key={page?.mId ?? id} page={page} requestedId={id} />;
}
