import { z } from "zod";

export const loginSchema = z.object({
  phone: z.string().min(10, "errors.phone.min"),
  password: z.string().min(6, "errors.password.min"),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
