import { z } from "zod";
export const todoFormSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Username must be at least 5 characters.",
    })
    .max(20, {
      message: "Username must not be longer than 20 characters.",
    }),
  body: z
    .string()

    .max(80, {
      message: "Username must not be longer than 20 characters.",
    })
    .optional(),
  completed: z.boolean(),
});
export type todoFormValues = z.infer<typeof todoFormSchema>;
