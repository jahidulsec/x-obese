import { cn } from "@/lib/utils";
import React from "react";

const PageHeading = ({ className, ...props }: React.ComponentProps<"h1">) => {
  return (
    <h1
      className={cn("text-2xl font-medium font-heading", className)}
      {...props}
    />
  );
};

export { PageHeading };
