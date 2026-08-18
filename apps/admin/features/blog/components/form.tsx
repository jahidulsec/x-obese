"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Blogs } from "@repo/database";
import { createBlogDTOSchema, createBlogInputsTypes } from "@repo/validator";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { createBlog, updateBlog } from "../actions/blog";
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

const Editor = dynamic(() => import("@/components/shared/editor/editor"), {
  ssr: false,
});

export default function BlogForm({
  prevData,
  className,
}: {
  prevData?: Partial<Blogs>;
  className?: string;
}) {
  const form = useForm<any>({
    resolver: zodResolver(createBlogDTOSchema),
    defaultValues: {
      title: prevData?.title,
      description: prevData?.description,
      details: prevData?.details,
      readTime: prevData?.readTime,
    },
  });

  const router = useRouter();

  async function onSubmit(data: createBlogInputsTypes) {
    const res = prevData?.id
      ? await updateBlog(prevData.id, data)
      : await createBlog(data);

    toast[res.success ? "success" : "error"](res.message);
    if (res.success) {
      router.push("/dashboard/blog");
    }
  }

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
          name="readTime"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Read Time (min)</FieldLabel>
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
          name="details"
          render={({ field, fieldState }) => (
            <Field className="md:col-span-3">
              <FieldLabel htmlFor={field.name}>Details</FieldLabel>
              <Editor
                value={prevData?.details ?? ""}
                fieldChange={(markdown: string) => {
                  field.onChange(markdown);
                }}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <FormButton className={"md:col-span-3 max-w-[15rem] w-full"}>
          Submit
        </FormButton>
      </FieldGroup>
    </form>
  );
}
