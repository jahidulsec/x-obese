import { BackButton } from "@/components/shared/button/button";
import { Section } from "@/components/shared/section/section";
import { SectionLoader } from "@/components/shared/skeleton/section";
import { PageHeading } from "@/components/shared/typography/heading";
import BlogForm from "@/features/blog/components/form";
import MarathonForm from "@/features/marathon/components/form";
import { getMarathon } from "@/features/marathon/lib/marathon";
import { Params } from "@/types/search-params";
import React, { Suspense } from "react";

export default function MarathonCreatePage({ params }: { params: Params }) {
  return (
    <div className="flex flex-col gap-8 my-6 max-w-5xl mx-auto w-full">
      <Section>
        <BackButton href="/dashboard/marathon" />
        <PageHeading className="mt-3">Edit Marathon</PageHeading>
        <p className="text-muted-foreground text-sm">
          Update marathon with required information
        </p>
      </Section>

      <Section>
        <Suspense fallback={<SectionLoader />}>
          <FormContainer params={params} />
        </Suspense>
      </Section>
    </div>
  );
}

const FormContainer = async ({ params }: { params: Params }) => {
  const { id } = await params;

  const res = await getMarathon(id?.toString() ?? "");

  return (
    <>
      <MarathonForm prevData={{ ...(res?.data as any) }} />
    </>
  );
};
