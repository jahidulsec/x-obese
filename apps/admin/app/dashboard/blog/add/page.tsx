import { BackButton } from "@/components/shared/button/button";
import { Section } from "@/components/shared/section/section";
import { PageHeading } from "@/components/shared/typography/heading";
import BlogForm from "@/features/blog/components/form";
import { getAuthUser } from "@/lib/dal";
import React from "react";

export default function BlogCreatePage() {
  return (
    <div className="flex flex-col gap-8 my-6 max-w-5xl mx-auto w-full">
      <Section>
        <BackButton href="/dashboard/blog" />
        <PageHeading className="mt-3">Create Blog</PageHeading>
        <p className="text-muted-foreground text-sm">
          Create blog with required information
        </p>
      </Section>

      <Section>
        <BlogForm />
      </Section>
    </div>
  );
}
