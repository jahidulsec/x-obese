import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Dot } from "lucide-react";
import React from "react";

const MarathonTypeBadge = ({ type }: { type: string }) => {
  return (
    <Badge
      variant={"outline"}
      className={cn(
        "bg-primary/20 text-primary-foreground border-primary/20",
        type === "virtual" && "bg-secondary-foreground text-secondary border-secondary-foreground",
      )}
    >
      {type}
    </Badge>
  );
};

export { MarathonTypeBadge };
