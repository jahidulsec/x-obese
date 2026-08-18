import { ErrorBoundary } from "@/components/shared/boundary/error-boundary";
import { BackButton } from "@/components/shared/button/button";
import PagePagination from "@/components/shared/pagination/pagination";
import { Section } from "@/components/shared/section/section";
import { TableSkeleton } from "@/components/shared/skeleton/table";
import { PageHeading } from "@/components/shared/typography/heading";
import MarathonLeadboardTable from "@/features/marathon/components/laederboard-table";
import { getMarathonUsers } from "@/features/marathon/lib/leaderboard";
import { Params, SearchParams } from "@/types/search-params";
import React from "react";

export default function MarathonLeadboardPage({
  searchParams,
  params,
}: {
  searchParams: SearchParams;
  params: Params;
}) {
  return (
    <div className="flex flex-col gap-8 my-6 ">
      <Section>
        <BackButton href="/dashboard/marathon" />
        <PageHeading className="mt-3">Marathon Leaderboard</PageHeading>
      </Section>

      <Section className="flex flex-col gap-4">
        <React.Suspense fallback={<TableSkeleton />}>
          <DataTable params={params} searchParams={searchParams} />
        </React.Suspense>
      </Section>
    </div>
  );
}

const DataTable = async ({
  searchParams,
  params,
}: {
  searchParams: SearchParams;
  params: Params;
}) => {
  const { id } = await params;
  const { search, page, size } = await searchParams;

  const res = await getMarathonUsers({
    page: Number(page?.toString() || 1),
    size: Number(size || 20),
    search: search?.toString(),
    sort: "desc",
    marathonId: id?.toString(),
  });

  return (
    <ErrorBoundary message={res.success ? undefined : res.message}>
      <MarathonLeadboardTable data={res.data as any[]} />
      <PagePagination
        count={res.pagination?.total_count ?? 0}
        limit={res.pagination?.page_size}
      />
    </ErrorBoundary>
  );
};
