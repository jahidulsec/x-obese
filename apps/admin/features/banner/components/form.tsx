"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createBannerDTOSchema,
  createBannerInputsTypes,
  updateBannerDTOSchema,
} from "@repo/validator";
import { Controller, useForm } from "react-hook-form";
import { createBanner, updateBanner } from "../actions/banner";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Banner } from "@repo/database";
import { Input } from "@/components/ui/input";
import FileUpload from "@/components/file-upload-04";
import { FormButton } from "@/components/shared/button/button";

export default function BannerForm({
  onError,
  onSuccess,
  prevData,
}: {
  onError?: (message: string) => void;
  onSuccess?: (message: string) => void;
  prevData?: Partial<Banner>;
}) {
  const form = useForm<any>({
    resolver: zodResolver(
      prevData?.id ? updateBannerDTOSchema : createBannerDTOSchema,
    ),
    defaultValues: prevData,
  });

  async function onSubmit(data: any) {
    const res = prevData?.id
      ? await updateBanner(prevData.id, data)
      : await createBanner(data);

    if (res.success) {
      onSuccess?.(res.message);
    } else {
      onError?.(res.message);
    }
  }

  React.useEffect(() => {
    console.log(form.formState.errors);
  }, [form.formState.errors]);

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          control={form.control}
          name="title"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Name</FieldLabel>
              <Input
                id={field.name}
                placeholder="Full Name"
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
          name="imagePath"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Image</FieldLabel>
              <FileUpload
                // fileTypes={["image"]}
                validFileTypes={["jpg", "jpeg", "png"]}
                onValueChange={(value) => field.onChange(value)}
                maxSizeMB={0.7}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <FormButton isPending={form.formState.isSubmitting} type="submit">
          Save
        </FormButton>
      </FieldGroup>
    </form>
  );
}
