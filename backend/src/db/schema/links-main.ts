import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const main_links = pgTable("main_links", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull().unique(),
  link: text("link").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
