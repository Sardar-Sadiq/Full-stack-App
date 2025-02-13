"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, FieldValues, useForm, UseFormReturn, SubmitHandler, Path } from "react-hook-form";
import React from "react";
import { z, ZodType } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: DefaultValues<T>;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  type: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({ type, schema, defaultValues, onSubmit }: Props<T>) => {
  const isSignIn = type === "SIGN_IN";

  const form: UseFormReturn<T> = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    await onSubmit(data);
  };

  return (
    <div className="flex flex-col gap-4">
    <h1 className="text-2xl font-semibold text-white">
      {isSignIn ? "Welcome back to BookSage" : "Create your library account"}
    </h1>
    <p className="text-light-100">
      {isSignIn
        ? "Access the vast collection of resources, and stay updated"
        : "Please complete all fields and upload a valid university ID to gain access to the library"}
    </p>

    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name={"username" as Path<T>} // ✅ Corrected TypeScript error
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    <p></p>
  </div>
  );
};

export default AuthForm;
