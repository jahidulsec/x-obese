import { BackButton } from "@/components/shared/button/button";
import { Section } from "@/components/shared/section/section";
import { PageHeading } from "@/components/shared/typography/heading";
import MarathonForm from "@/features/marathon/components/form";
import React from "react";

export default function MarathonCreatePage() {
  return (
    <div className="flex flex-col gap-8 my-6 max-w-5xl mx-auto w-full">
      <Section>
        <BackButton href="/dashboard/marathon" />
        <PageHeading className="mt-3">Create Marathon</PageHeading>
        <p className="text-muted-foreground text-sm">
          Create marathon with required information
        </p>
      </Section>

      <Section>
        <MarathonForm />
      </Section>
    </div>
  );
}
