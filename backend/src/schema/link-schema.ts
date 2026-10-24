import z from "zod";

export const linkPostSchema = z.object({
  userId: z.coerce.string().optional(),
  name: z.coerce.string().min(1, "Name is required"),
  link: z.coerce.string().min(1, "Link is required"),
  group: z.coerce.number(),
});

export const linkPutSchema = z.object({
  id: z.coerce.string(),
  name: z.coerce.string().min(1, "Name is required"),
  link: z.coerce.string().min(1, "Link is required"),
  displayOrder: z.coerce.number(),
  group: z.coerce.number(),
  userId: z.coerce.string(),
});
