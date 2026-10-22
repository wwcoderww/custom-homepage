import { and, eq, gte, ne, sql } from "drizzle-orm";
import { db } from "../db/index.js";
import { linksDb } from "../db/schema/links.js";

export const SidebarService = {
  async get(userId: string) {
    return await db.select().from(linksDb).where(eq(linksDb.userId, userId));
  },

  async delete(id: string) {
    return await db.delete(linksDb).where(eq(linksDb.id, id));
  },

  async post(
    group: number,
    userId: string,
    name: string,
    link: string,
    displayOrder: number,
  ) {
    return await db
      .insert(linksDb)
      .values({ userId, name, link, displayOrder, group });
  },

  async put(
    group: number,
    id: string,
    name: string,
    link: string,
    displayOrder: number,
  ) {
    await db
      .update(linksDb)
      .set({
        displayOrder: sql`${linksDb.displayOrder} + 1`,
      })
      .where(and(gte(linksDb.displayOrder, displayOrder), ne(linksDb.id, id)));

    // Step B: Update and return the modified record to the Express controller
    return await db
      .update(linksDb)
      .set({ name, link, displayOrder, group })
      .where(eq(linksDb.id, id))
      .returning();
  },
};
