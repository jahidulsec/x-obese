"use client";

import { useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const TableSkeleton = () => {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="flex w-full flex-col gap-4 rounded-md border p-4"
    >
      {/* Table title + action */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-8 w-20 rounded-md" />
      </div>

      {/* Header row */}
      <div className="grid grid-cols-4 gap-4 rounded-md bg-muted px-3 py-2">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-3 w-16" />
      </div>

      {/* Data rows */}
      <div className="flex flex-col gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-4 items-center gap-4 border-b pb-3 last:border-0 last:pb-0"
          >
            <div className="flex items-center gap-3">
              <Skeleton className="size-8 shrink-0 rounded-full" />
              <Skeleton className="h-4 flex-1" />
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export { TableSkeleton };
