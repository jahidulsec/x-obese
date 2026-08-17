"use client";

import { useTable, type ColumnDef, type RowData } from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { features, type DataTableFeatures } from "./data-table-features";
import React from "react";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "@/utils/settings";
import { useSearchParams } from "next/navigation";

interface DataTableProps<TData extends RowData> {
  columns: ColumnDef<DataTableFeatures, TData>[];
  data: TData[];
}

export const useTableSerialColumn = <TData extends RowData>(): ColumnDef<
  DataTableFeatures,
  TData
> => {
  const searchParams = useSearchParams();

  return {
    id: "sl",
    header: "#",
    cell: ({ row }) => {
      const validatedSize = searchParams.has("size")
        ? Number(searchParams.get("size"))
        : DEFAULT_PAGE_SIZE;

      const validatedPage = searchParams.has("page")
        ? Number(searchParams.get("page"))
        : DEFAULT_PAGE;
      const serial = (validatedPage - 1) * validatedSize + row.index + 1;
      return <p className="max-w-0">{serial}</p>;
    },
  };
};

export function DataTable<TData extends RowData>({
  columns,
  data,
}: DataTableProps<TData>) {
  const table = useTable({
    features,
    data,
    columns,
  });

  return (
    <div className="overflow-hidden rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : (
                      <table.FlexRender header={header} />
                    )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    <table.FlexRender cell={cell} />
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
