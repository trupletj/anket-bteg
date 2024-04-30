import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, "Password is required"),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(6, "Password is required"),
  name: z.string().min(1, "Name is required"),
});

export const JobSchema = z.object({
  name: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  openingAt: z.date(),
  closingAt: z.date(),
  // jobLocationId: z.number().int(),
  // organizationId: z.number().int(),
  // processId: z.number().int(),
  // jobCategoryId: z.number().int(),
});
