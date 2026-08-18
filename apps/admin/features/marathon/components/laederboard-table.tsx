"use client";

import { DataTable } from "@/components/shared/table/data-table";
import { DataTableFeatures } from "@/components/shared/table/data-table-features";
import { createColumnHelper } from "@tanstack/react-table";
import { MarathonLeadboardMultiProps } from "@/types/leadboard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { timeConversion } from "@/utils/formatter";

// Use `accessor` for data columns and `display` for columns without one.
const columnHelper = createColumnHelper<
  DataTableFeatures,
  MarathonLeadboardMultiProps
>();

export default function MarathonLeadboardTable({
  data,
}: {
  data: MarathonLeadboardMultiProps[];
}) {
  const columns = columnHelper.columns([
    columnHelper.display({
      id: "rank",
      header: "RANK",
      cell: ({ row }) => {
        return (
          <p className="max-w-0 font-semibold font-mono">{row.original.rank}</p>
        );
      },
      size: 20,
    }),
    columnHelper.accessor("imagePath", {
      id: "Image",
      header: "",
      size: 32,
      cell: ({ row }) => (
        <Avatar size="lg">
          <AvatarImage
            className={"rounded-md"}
            src={row.original.imagePath ?? ""}
          />
          <AvatarFallback>{row.original.fullName.charAt(0)}</AvatarFallback>
        </Avatar>
      ),
    }),
    columnHelper.accessor("fullName", {
      header: "Title",
      size: 400,
    }),
    columnHelper.accessor("distanceKm", {
      header: "Distance (KM)",
    }),
    columnHelper.accessor("durationMs", {
      header: "Duration",
      cell: ({ row }) => {
        const user = row.original;
        return <span>{timeConversion(user.durationMs)}</span>;
      },
    }),
    columnHelper.accessor("submission_count", {
      header: "Total Attempt",
    }),
  ]);

  return (
    <>
      <DataTable data={data} columns={columns} />
    </>
  );
}
