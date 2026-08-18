"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  createMarathonDTOSchema,
  updateMarathonDTOSchema,
} from "@repo/validator";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import {
  FieldGroup,
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import FileUpload from "@/components/ui/file-upload-04";
import { FormButton } from "@/components/shared/button/button";
import dynamic from "next/dynamic";
import { useRouter } from "@bprogress/next";
import { toast } from "sonner";
import Image from "next/image";
import {
  createMarathon,
  deleteMarathonReward,
  updateMarathon,
} from "../actions/marathon";
import { Select } from "@/components/shared/select/select";
import { DatePickerTime } from "@/components/shared/date-picker/date-time-picker";
import { MarathonProps } from "@/types/marathon";
import RewardSection from "./reward-section";
import { MultiInput } from "@/components/shared/inputs/mulit-input";
import AgeRuleForm from "./age-rule-form";

const Editor = dynamic(() => import("@/components/shared/editor/editor"), {
  ssr: false,
});

export default function MarathonForm({
  prevData,
  className,
}: {
  prevData?: Partial<MarathonProps>;
  className?: string;
}) {
  const [deletedRewardList, setDeletedRewardList] = React.useState<string[]>(
    [],
  );

  const form = useForm<any>({
    resolver: zodResolver(
      prevData?.id ? updateMarathonDTOSchema : createMarathonDTOSchema,
    ),
    defaultValues: {
      title: prevData?.title,
      type: prevData?.type,
      description: prevData?.description,
      distanceKm: prevData?.distanceKm,
      ageRule: prevData?.marathoAgeRule?.map((i) => ({
        distanceKm: i.distanceKm,
        ageMin: i.ageMin,
        ageMax: i.ageMax,
        ageRuleId: i.id,
      })),
    },
  });

  const router = useRouter();

  const type = form.watch("type");

  async function onSubmit(data: any) {
    const res = prevData?.id
      ? await updateMarathon(prevData.id, data)
      : await createMarathon(data);

    toast[res.success ? "success" : "error"](res.message);
    if (res.success) {
      // router.push("/dashboard/marathon");
    }
  }

  const isDisabled = (date: Date) => {
    // Normalize today's date
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Calculate min date = today + 5 working days
    const minDate = new Date(today);
    let addedDays = 0;

    while (addedDays < 1) {
      minDate.setDate(minDate.getDate() + 1);
      addedDays++;
    }

    return date < minDate;
  };

  return (
    <form
      className={cn("border rounded-xl p-6", className)}
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FieldGroup className="grid grid-cols-1 md:grid-cols-3">
        <Controller
          control={form.control}
          name="title"
          render={({ field, fieldState }) => (
            <Field className="md:col-span-2">
              <FieldLabel htmlFor={field.name}>Title</FieldLabel>
              <Input
                id={field.name}
                placeholder="Title"
                aria-invalid={fieldState.invalid}
                autoComplete="off"
                {...field}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={form.control}
          name="distanceKm"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Distance (KM)</FieldLabel>
              <Input
                id={field.name}
                type="number"
                placeholder="eg. 5"
                aria-invalid={fieldState.invalid}
                autoComplete="off"
                {...field}
                onChange={(e) => field.onChange(e.target.valueAsNumber)}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={form.control}
          name="type"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Type</FieldLabel>
              <Select
                data={[
                  {
                    label: "Onsite",
                    value: "onsite",
                  },
                  {
                    label: "Virtual",
                    value: "virtual",
                  },
                ]}
                placeholder="Select"
                onValueChange={(value) => {
                  field.onChange(value);
                  if (value === "virtual") {
                    form.setValue("location", "");
                  }
                }}
                defaultValue={prevData?.type}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={form.control}
          name="startDate"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Start from</FieldLabel>
              <DatePickerTime
                defaultValue={prevData?.startDate}
                onValueChange={(value) => field.onChange(value)}
                disabled={isDisabled}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={form.control}
          name="endDate"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Ends at</FieldLabel>
              <DatePickerTime
                defaultValue={prevData?.startDate}
                onValueChange={(value) => field.onChange(value)}
                disabled={isDisabled}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {type === "onsite" && (
          <Controller
            control={form.control}
            name="location"
            render={({ field, fieldState }) => (
              <Field className="md:col-span-3">
                <FieldLabel htmlFor={field.name}>Location</FieldLabel>
                <Input
                  id={field.name}
                  placeholder="eg. Dhaka"
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                  {...field}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        )}

        <Controller
          control={form.control}
          name="reward"
          render={({ field, fieldState }) => (
            <Field className="md:col-span-3">
              <FieldLabel htmlFor={field.name}>Reward</FieldLabel>
              <MultiInput
                placeholder="Enter rewards using , as separator"
                onValueChange={(value) => field.onChange(value.join(","))}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        {prevData?.Rewards && (
          <RewardSection
            rewards={prevData.Rewards}
            deletedRewardList={deletedRewardList}
            onDelete={async (id) => {
              const response = deleteMarathonReward(id);

              toast.promise(response, {
                loading: "Loading...",
                success: (data) => {
                  if (!data) throw data;

                  // add to deleted list of reward
                  setDeletedRewardList((prev) => {
                    return [...prev, id];
                  });

                  return data?.message;
                },
                error: (data) => {
                  return data?.message;
                },
              });
            }}
          />
        )}

        <Controller
          control={form.control}
          name="imagePath"
          render={({ field, fieldState }) => (
            <Field className="md:col-span-3">
              <FieldLabel htmlFor={field.name}>Image</FieldLabel>
              <FileUpload
                className="max-w-auto"
                validFileTypes={["jpg", "jpeg", "png"]}
                onValueChange={(value) => field.onChange(value)}
                maxSizeMB={0.7}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}

              {prevData?.imagePath && (
                <div className="relative w-full h-80 bg-muted rounded-xl overflow-hidden">
                  <Image
                    fill
                    src={prevData?.imagePath}
                    alt="image"
                    objectFit="cover"
                    unoptimized
                  />
                </div>
              )}
            </Field>
          )}
        />

        <Controller
          control={form.control}
          name="description"
          render={({ field, fieldState }) => (
            <Field className="md:col-span-3">
              <FieldLabel htmlFor={field.name}>Description</FieldLabel>
              <Editor
                value={prevData?.description ?? ""}
                fieldChange={(markdown: string) => {
                  field.onChange(markdown);
                }}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={form.control}
          name="about"
          render={({ field, fieldState }) => (
            <Field className="md:col-span-3">
              <FieldLabel htmlFor={field.name}>About</FieldLabel>
              <Editor
                value={prevData?.about ?? ""}
                fieldChange={(markdown: string) => {
                  field.onChange(markdown);
                }}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        {type === "virtual" && <AgeRuleForm form={form} />}

        <FormButton className={"md:col-span-3 max-w-[15rem] w-full"}>
          Submit
        </FormButton>
      </FieldGroup>
    </form>
  );
}
