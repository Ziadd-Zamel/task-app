import { z } from "zod";

// Login schema for validating login form inputs
export const useLoginSchema = () => {
  return z.object({
    email: z
      .string({ message: "Email address is required" })
      .email({ message: "Please enter a valid email address" }),
    password: z
      .string({ message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Password must include at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long"
      ),
  });
};

export type LoginFields = z.infer<ReturnType<typeof useLoginSchema>>;
