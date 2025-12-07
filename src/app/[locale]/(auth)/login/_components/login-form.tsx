"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { LoginFields, useLoginSchema } from "@/lib/schemes/auth.schema";
import { PasswordInput } from "@/components/common/password-input";
import { Input } from "@/components/ui/input";
import useLogin from "../_hooks/use-login";
import { Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  // Hooks
  const LoginSchema = useLoginSchema();
  const { login, isPending } = useLogin();

  // Form
  const form = useForm<LoginFields>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Handle form submission
  async function onSubmit(values: LoginFields) {
    console.log(values);
    login(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        {/* Email */}
        <FormField
          control={form.control}
          name={"email"}
          render={({ field, fieldState }) => (
            <FormItem>
              <Label className="font-poppins text-sm font-medium -mb-1">
                Email address
              </Label>
              <FormControl>
                <Input
                  {...field}
                  placeholder={"Enter your email  "}
                  className={`rounded-lg h-8 placeholder:text-gray-500 ${
                    fieldState?.error
                      ? "border-red-600 focus:border-none"
                      : "border-[#D9D9D9]"
                  }`}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Password */}
        <FormField
          control={form.control}
          name={"password"}
          render={({ field, fieldState }) => (
            <FormItem>
              {" "}
              <div className="flex items-center justify-between -mb-1">
                <Label className="font-poppins text-sm font-medium ">
                  Password
                </Label>
                <Link
                  className="no-underline font-poppins text-[10px] text-[#0C2A92] font-medium"
                  href="#"
                >
                  forgot password
                </Link>
              </div>
              <FormControl>
                <PasswordInput
                  className={`rounded-lg h-8 placeholder:text-gray-500 ${
                    fieldState?.error
                      ? "border-red-600 focus:border-none"
                      : "border-[#D9D9D9]"
                  }`}
                  placeholder={"Enter your password"}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-5">
            <input type="checkbox" />
            <p className="font-poppins text-[9px] font-medium ">
              Remember for 30 days
            </p>
          </div>
          <Button
            type="submit"
            disabled={isPending}
            className="h-9 rounded-lg bg-[#3A5B22] hover:bg-[#3A5B22]/90"
          >
            {isPending && <Loader2 className="animate-spin" />}
            {isPending ? "Loging" : "Sign in"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
