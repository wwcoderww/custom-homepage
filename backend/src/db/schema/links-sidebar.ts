import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const sidebarLinks = pgTable("sidebar_links", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull().unique(),
  link: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
