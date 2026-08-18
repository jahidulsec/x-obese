import { Section, SectionHeader } from "@/components/shared/section/section";
import { TableSkeleton } from "@/components/shared/skeleton/table";
import { ErrorBoundary } from "@/components/shared/boundary/error-boundary";
import PagePagination from "@/components/shared/pagination/pagination";
import { getBlogs } from "@/features/blog/lib/blog";
import { SearchParams } from "@/types/search-params";
import { PageHeading } from "@/components/shared/typography/heading";
import React from "react";
import BlogTable from "@/features/blog/components/table";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";

export default function BlogPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <div className="flex flex-col gap-8 my-6">
      <Section>
        <SectionHeader>
          <PageHeading>Blog</PageHeading>

          <Button render={<Link href={"/dashboard/blog/add"} />}>
            <PlusCircleIcon />
            Blog
          </Button>
        </SectionHeader>
      </Section>

      <Section className="flex flex-col gap-4">
        <React.Suspense fallback={<TableSkeleton />}>
          <DataTable searchParams={searchParams} />
        </React.Suspense>
      </Section>
    </div>
  );
}

const DataTable = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { search, page, size } = await searchParams;
  const res = await getBlogs({
    page: Number(page?.toString() || 1),
    size: Number(size || 20),
    search: search?.toString(),
    sort: "desc",
  });

  return (
    <ErrorBoundary message={res.success ? undefined : res.message}>
      <BlogTable data={res.data as any[]} />
      <PagePagination
        count={res.pagination?.total_count ?? 0}
        limit={res.pagination?.page_size}
      />
    </ErrorBoundary>
  );
};
