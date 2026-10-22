import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { user } from "./auth.js";

export const linksDb = pgTable("links", {
  id: uuid().defaultRandom().primaryKey(),
  name: text().notNull(),
  link: text().notNull(),
  displayOrder: integer().notNull(),
  group: integer().notNull().default(1),
  createdAt: timestamp().defaultNow().notNull(),
  userId: text()
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});
