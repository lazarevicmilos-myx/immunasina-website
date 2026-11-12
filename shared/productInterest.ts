import { z } from "zod";

export const productInterestSchema = z.object({
  productId: z.enum(["latte", "matcha", "protein", "shake"]),
  fullName: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(254).transform(value => value.toLowerCase()),
  country: z.string().trim().min(1).max(100),
  notes: z.string().trim().max(2000).optional(),
  language: z.enum(["en", "sr"]),
});
