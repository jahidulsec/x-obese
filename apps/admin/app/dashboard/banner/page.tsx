import { ErrorBoundary } from "@/components/shared/boundary/error-boundary";
import PagePagination from "@/components/shared/pagination/pagination";
import { Section, SectionHeader } from "@/components/shared/section/section";
import { TableSkeleton } from "@/components/shared/skeleton/table";
import CreateBannerButton from "@/features/banner/components/create-button";
import BannerTable from "@/features/banner/components/table";
import { getBanners } from "@/features/banner/lib/banner";
import { SearchParams } from "@/types/search-params";
import React from "react";

export default function BannerPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <div className="flex flex-col gap-8 my-6">
      <Section>
        <SectionHeader>
          <h1 className="text-2xl font-semibold font-heading">Banner</h1>

          <CreateBannerButton />
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
  const res = await getBanners({
    page: Number(page?.toString() || 1),
    size: Number(size || 20),
    search: search?.toString(),
    sort: "asc",
  });

  return (
    <ErrorBoundary message={res.success ? undefined : res.message}>
      <BannerTable data={res.data as any[]} />
      <PagePagination
        count={res.pagination?.total_count ?? 0}
        limit={res.pagination?.page_size}
      />
    </ErrorBoundary>
  );
};
