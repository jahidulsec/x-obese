"use client";

import {
  DataTable,
  useTableSerialColumn,
} from "@/components/shared/table/data-table";
import { DataTableFeatures } from "@/components/shared/table/data-table-features";
import { formatDate } from "@/utils/formatter";
import { Blogs } from "@repo/database";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
import { TableActionButton } from "@/components/shared/button/button";
import { Edit2, Trash2 } from "lucide-react";
import AlertModal from "@/components/shared/alert-dialog/alert-dialog";
import { deleteToastTemplate } from "@/lib/template";
import { deleteBlog } from "../actions/blog";

// Use `accessor` for data columns and `display` for columns without one.
const columnHelper = createColumnHelper<DataTableFeatures, Blogs>();

export default function BlogTable({ data }: { data: Blogs[] }) {
  const serialNo = useTableSerialColumn<Blogs>();
  const [edit, setEdit] = React.useState<Blogs | boolean>(false);
  const [del, setDel] = React.useState<string | boolean>(false);
  const [pending, startTransition] = React.useTransition();

  const columns = columnHelper.columns([
    serialNo,

    columnHelper.accessor("title", {
      header: "Title",
      size: 1000,
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
              tooltip="Edit"
              variant={"edit"}
              onClick={() => setEdit(value)}
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
            deleteToastTemplate(() => deleteBlog(id));
          });

          setDel(false);
        }}
      />
    </>
  );
}
