import { z } from "zod";

export const loginSchema = z.object({
  phone: z.string().min(10, "errors.phone.min"),
  pin: z.string().min(6, "errors.pin.min"),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
