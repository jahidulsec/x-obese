"use client";

import {
  DataTable,
  useTableSerialColumn,
} from "@/components/shared/table/data-table";
import { DataTableFeatures } from "@/components/shared/table/data-table-features";
import { formatDate, formatDateTime } from "@/utils/formatter";
import { Marathon } from "@repo/database";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
import { TableActionButton } from "@/components/shared/button/button";
import { Edit2, Podium, Trash2 } from "lucide-react";
import AlertModal from "@/components/shared/alert-dialog/alert-dialog";
import { deleteToastTemplate } from "@/lib/template";
import { deleteMarathon } from "../actions/marathon";
import { MarathonTypeBadge } from "./badge";
import { useRouter } from "@bprogress/next";

// Use `accessor` for data columns and `display` for columns without one.
const columnHelper = createColumnHelper<DataTableFeatures, Marathon>();

export default function MarathonTable({ data }: { data: Marathon[] }) {
  const serialNo = useTableSerialColumn<Marathon>();
  const [del, setDel] = React.useState<string | boolean>(false);
  const [pending, startTransition] = React.useTransition();

  const router = useRouter();

  const columns = columnHelper.columns([
    serialNo,
    columnHelper.accessor("title", {
      header: "Title",
      size: 400,
    }),
    columnHelper.accessor("type", {
      header: "Type",
      cell: ({ row }) => <MarathonTypeBadge type={row.getValue("type")} />,
    }),
    columnHelper.accessor("distanceKm", {
      header: "Distance (KM)",
    }),
    columnHelper.accessor("startDate", {
      header: "Start From",
      cell: ({ row }) => (
        <p className="text-sm">{formatDateTime(row.getValue("startDate"))}</p>
      ),
      size: 10,
    }),
    columnHelper.accessor("endDate", {
      header: "Ends At",
      cell: ({ row }) => (
        <p className="text-sm">{formatDateTime(row.getValue("endDate"))}</p>
      ),
      size: 10,
    }),
    columnHelper.accessor("createdAt", {
      header: "Created At",
      cell: ({ row }) => (
        <p className="text-sm text-muted-foreground">
          {formatDate(row.getValue("createdAt"))}
        </p>
      ),
      size: 10,
    }),
    columnHelper.display({
      id: "actions",
      size: 10,
      cell: ({ row }) => {
        const value = row.original;

        return (
          <div className="flex justify-end items-center gap-1">
            <TableActionButton
              tooltip="Leaderboard"
              variant={"edit"}
              onClick={() => router.push(`/dashboard/marathon/${value.id}/leaderboard`)}
            >
              <Podium /> <span className="sr-only">Leaderboard</span>
            </TableActionButton>
            <TableActionButton
              tooltip="Edit"
              variant={"edit"}
              onClick={() => router.push(`/dashboard/marathon/${value.id}`)}
            >
              <Edit2 /> <span className="sr-only">Edit</span>
            </TableActionButton>
            <TableActionButton
              tooltip="Delete"
              variant={"delete"}
              disabled={pending}
              onClick={() => setDel(value.id)}
            >
              <Trash2 /> <span className="sr-only">Delete</span>
            </TableActionButton>
          </div>
        );
      },
    }),
  ]);

  return (
    <>
      <DataTable data={data} columns={columns} />

      <AlertModal
        onOpenChange={setDel}
        open={!!del}
        onAction={() => {
          const id = typeof del !== "boolean" ? del : "";

          startTransition(() => {
            deleteToastTemplate(() => deleteMarathon(id));
          });

          setDel(false);
        }}
      />
    </>
  );
}
