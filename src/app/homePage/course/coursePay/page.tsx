import type { Metadata } from "next";

import { CoursePayPage } from "@/components/sites/ykyw/course-pay-page";
import { getVoiceCourse } from "@/components/sites/ykyw/voice-courses";

type Search = { cId?: string | string[] };

function readId(value: string | string[] | undefined): string {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Search>;
}): Promise<Metadata> {
  const id = readId((await searchParams).cId);
  const course = getVoiceCourse(id);
  return { title: course ? `支付详情 · ${course.name}` : "支付详情" };
}

export default async function CoursePayRoute({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  const id = readId((await searchParams).cId);
  return <CoursePayPage courseId={id} />;
}
