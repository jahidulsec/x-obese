"use client";

import { FormSheet } from "@/components/shared/sheet/sheet";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import React from "react";
import BannerForm from "./form";
import { toast } from "sonner";

export default function CreateBannerButton() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <PlusCircle /> Banner
      </Button>

      <FormSheet open={open} onOpenChange={setOpen} formTitle="Create Banner">
        <BannerForm
          onError={(message) => toast.error(message)}
          onSuccess={(message) => {
            toast.success(message);
            setOpen(false);
          }}
        />
      </FormSheet>
    </>
  );
}
