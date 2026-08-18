"use client";

import React from "react";
import { toast } from "sonner";
import { X } from "lucide-react";
import { Marathon } from "@repo/database";
import { MarathonProps } from "@/types/marathon";

export default function RewardSection({
  rewards,
  deletedRewardList,
  onDelete,
}: {
  rewards?: MarathonProps['Rewards'];
  deletedRewardList: string[];
  onDelete: (id: string) => Promise<void>;
}) {
  return (
    <div className="flex items-center gap-3 flex-wrap mb-1">
      {rewards?.map((item) => (
        <div
          className={`border bg-muted w-fit px-4 rounded-lg text-sm text-muted-foreground flex items-center gap-1 ${
            deletedRewardList.includes(item.id) ? " line-through" : ""
          }`}
          key={item.id}
        >
          <span>{item.text}</span>
          <button
            type="button"
            className={`hover:text-primary ${
              deletedRewardList.includes(item.id) ? "hidden" : ""
            }`}
            onClick={async () => {
              onDelete(item.id);
            }}
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}
