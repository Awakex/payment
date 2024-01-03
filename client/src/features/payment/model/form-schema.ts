import { z } from "zod";

export const formSchema = z.object({
  pan: z.string().regex(/^\d+$/).min(13).max(19),
  cvc: z.string().min(3).max(3),
  expire: z.string(),
  cardholder: z
    .string()
    .regex(/^([^0-9]*)$/)
    .refine((v) => v.split(" ").length > 1),
});

export type FormSchemaType = z.infer<typeof formSchema>;
