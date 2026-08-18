import React from "react";
import { Section, SectionHeader } from "@/components/shared/section/section";
import { SearchParams } from "@/types/search-params";
import { TableSkeleton } from "@/components/shared/skeleton/table";
import { ErrorBoundary } from "@/components/shared/boundary/error-boundary";
import PagePagination from "@/components/shared/pagination/pagination";
import MarathonTable from "@/features/marathon/components/table";
import { PageHeading } from "@/components/shared/typography/heading";
import { getMarathons } from "@/features/marathon/lib/marathon";

export default function MarathonPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <div className="flex flex-col gap-8 my-6">
      <Section>
        <SectionHeader>
          <PageHeading>Marathon</PageHeading>

          {/* <CreateBannerButton /> */}
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
  const res = await getMarathons({
    page: Number(page?.toString() || 1),
    size: Number(size || 20),
    search: search?.toString(),
    sort: "desc",
  });

  return (
    <ErrorBoundary message={res.success ? undefined : res.message}>
      <MarathonTable data={res.data as any[]} />
      <PagePagination
        count={res.pagination?.total_count ?? 0}
        limit={res.pagination?.page_size}
      />
    </ErrorBoundary>
  );
};
