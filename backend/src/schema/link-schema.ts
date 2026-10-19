import z from "zod";

export const linkSchema = z.object({
  name: z.coerce.string().min(1, "Name is required"),
  link: z.coerce.string().min(1, "Link is required"),
  userId: z.coerce.string(),
  displayOrder: z.coerce.number().optional(),
  id: z.coerce.string().optional(),
});
