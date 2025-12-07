import { LoginFields } from "@/lib/schemes/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

export default function useLogin() {
  // Mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async ({ email, password }: LoginFields) => {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });

      if (response?.error) throw new Error(response.error);

      return response;
    },
    onSuccess: () => {
      toast.success("Login successfu!");

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);
    },
    onError: () => {
      toast.error("Login failed");
    },
  });

  return { isPending, error, login: mutate };
}
