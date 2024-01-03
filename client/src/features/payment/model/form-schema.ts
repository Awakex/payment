import { z } from "zod";

export const formSchema = z.object({
  pan: z.string().regex(/^\d+$/).min(13).max(19),
  cvc: z.string().regex(/^\d+$/).min(3).max(3),
  expire: z.string().refine((v) => {
    const [month, year] = v.split("/");

    if (month && year) {
      return (
        Number(month) >= 1 &&
        Number(month) <= 12 &&
        Number(Number(year) >= 21 && Number(year) <= 26)
      );
    }
  }),
  cardholder: z
    .string()
    .regex(/^([^0-9]*)$/)
    .refine((v) => v.trim().split(" ").length > 1),
});

export type FormSchemaType = z.infer<typeof formSchema>;
