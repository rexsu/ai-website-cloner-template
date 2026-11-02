import type { Metadata } from "next";

import { VoicePage } from "@/components/sites/ykyw/voice-page";
import { getVoiceCourse } from "@/components/sites/ykyw/voice-courses";

type Search = { courseId?: string | string[] };

function readId(value: string | string[] | undefined): string {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Search>;
}): Promise<Metadata> {
  const id = readId((await searchParams).courseId);
  const course = getVoiceCourse(id);
  return {
    title: course?.name ?? "音频课",
    description: course ? `${course.name} ￥${course.price}` : "音频课",
  };
}

export default async function VoiceCourseRoute({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  const id = readId((await searchParams).courseId);
  return <VoicePage course={getVoiceCourse(id) ?? null} requestedId={id} />;
}
