import type { Metadata } from "next";

import { getMicroPage } from "@/components/sites/ykyw/content";
import { MicroPage } from "@/components/sites/ykyw/micro-page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ mId: string }>;
}): Promise<Metadata> {
  const { mId } = await params;
  const page = getMicroPage(mId);
  return {
    title: page?.pageName ?? "微页面",
    description: page?.shareDesc,
  };
}

export default async function ShortMicroPage({
  params,
}: {
  params: Promise<{ mId: string }>;
}) {
  const { mId } = await params;
  const page = getMicroPage(mId) ?? null;
  return <MicroPage key={page?.mId ?? mId} page={page} requestedId={mId} />;
}
