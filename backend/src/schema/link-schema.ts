import z from "zod";

export const linkSchema = z.object({
  name: z.coerce.string().min(1, "Name is required"),
  link: z.coerce.number().min(1, "Price is required"),
});
