"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import React from "react";
import { userLogin } from "../actions/login";
import { toast } from "sonner";
import { useRouter } from "@bprogress/next";
import { adminLoginDTOSchema, adminsLoginInputTypes } from "@repo/validator";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Asterisk } from "lucide-react";
import { PasswordInput } from "@/components/shared/inputs/password";
import { FormButton } from "@/components/shared/button/button";

const LoginForm = () => {
  const form = useForm<adminsLoginInputTypes>({
    resolver: zodResolver(adminLoginDTOSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const router = useRouter();

  async function onSubmit(data: adminsLoginInputTypes) {
    const res = await userLogin(data);
    toast[res.success ? "success" : "error"](res.message);

    if (res.success) {
      router.replace("/dashboard");
    }
  }

  return (
    <main className="min-w-[20rem]">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <Controller
            control={form.control}
            name="username"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>
                  Username <Asterisk size={10} className="text-destructive" />
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Username"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>
                  Password <Asterisk size={10} className="text-destructive" />
                </FieldLabel>
                <PasswordInput
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="PASSWORD"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Field>
            <FormButton isPending={form.formState.isSubmitting} type="submit">
              Login
            </FormButton>
          </Field>
        </FieldGroup>
      </form>
    </main>
  );
};

export { LoginForm };
