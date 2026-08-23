"use client";

import { createMarathonInputsTypes } from "@repo/validator";
import React from "react";
import { Controller, useFieldArray, UseFormReturn } from "react-hook-form";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, PlusCircle, X } from "lucide-react";
import { deleteToastTemplate } from "@/lib/template";
import { deleteMarathonDistanceRule } from "../actions/marathon";

export default function DistanceRuleForm({
  form,
}: {
  form: UseFormReturn<createMarathonInputsTypes>;
}) {
  const { append, remove, fields } = useFieldArray({
    control: form.control,
    name: "distanceRule",
  });

  return (
    <div className="md:col-span-3 border rounded-xl p-4 flex flex-col gap-3">
      <div className="flex justify-between items-center gap-5 flex-wrap mb-5">
        <h2 className="font-medium text-xl">Distance Rule</h2>

        <Button
          variant={"outline"}
          type="button"
          onClick={() =>
            append({
              distanceKm: 0,
              attemptNo: 1,
              description: undefined,
            })
          }
        >
          <PlusCircle />
          Add
        </Button>
      </div>

      {fields.length > 0 ? (
        fields.map((item, index) => (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border-b pb-3 last:border-0" key={index}>
            <div className="md:col-span-2 flex items-end">
              <Controller
                control={form.control}
                name={`distanceRule.${index}.distanceKm`}
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
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Button
                variant={"outline"}
                size={"icon"}
                type="button"
                onClick={() => {
                  if (item.distanceRuleId) {
                    deleteToastTemplate(() =>
                      deleteMarathonDistanceRule(item.distanceRuleId ?? ""),
                    );
                  }
                  remove(index);
                }}
                className="text-destructive border-destructive"
              >
                <X />
                <span className="sr-only">Remove</span>
              </Button>
            </div>

            <Controller
              control={form.control}
              name={`distanceRule.${index}.attemptNo`}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor={field.name}>Attempt Number</FieldLabel>
                  <Input
                    id={field.name}
                    type="number"
                    placeholder="eg. 5"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    {...field}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              control={form.control}
              name={`distanceRule.${index}.description`}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor={field.name}>
                    Description (optional)
                  </FieldLabel>
                  <Input
                    id={field.name}
                    placeholder="Write here."
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
          </div>
        ))
      ) : (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant={"icon"}>
              <Plus />
            </EmptyMedia>
            <EmptyTitle>No rule added yet</EmptyTitle>
          </EmptyHeader>
          <EmptyDescription>Add age rule for marathon</EmptyDescription>
        </Empty>
      )}
    </div>
  );
}
