import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactPage } from "@/components/sites/qizai/simple-pages";

export const metadata: Metadata = { title: "联系" };

export default function Page() {
  return (
    <Suspense fallback={<p className="p-8">正在打开表单…</p>}>
      <ContactPage />
    </Suspense>
  );
}
