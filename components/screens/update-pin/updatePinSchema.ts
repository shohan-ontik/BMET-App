import { z } from "zod";

export const updatePinSchema = z.object({
  newPin: z.string().min(4, "errors.pin.min"),
  confirmPin: z.string().min(4, "errors.pin.min"),
});

export type UpdatePinSchemaType = z.infer<typeof updatePinSchema>;
