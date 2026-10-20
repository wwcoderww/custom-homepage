import { and, eq, gte, ne, sql } from "drizzle-orm";
import { db } from "../db/index.js";
import { mainLinks } from "../db/schema/links-main.js";
import { sidebarLinks } from "../db/schema/links-sidebar.js";

export type tableType = typeof mainLinks | typeof sidebarLinks;

export const SidebarService = {
  async get(table: tableType, userId: string) {
    return await db.select().from(table).where(eq(table.userId, userId));
  },

  async delete(table: tableType, id: string) {
    return await db.delete(table).where(eq(table.id, id));
  },

  async post(table: tableType, userId: string, name: string, link: string) {
    return await db.insert(table).values({ userId, name, link });
  },

  async put(
    table: tableType,
    id: string,
    name: string,
    link: string,
    displayOrder: number | null,
  ) {
    // 1. If displayOrder is null, perform a simple direct update
    if (!displayOrder) {
      return await db
        .update(table)
        .set({ name, link, displayOrder })
        .where(eq(table.id, id))
        .returning();
    }

    // 2. FIXED: Execute sequential updates instead of db.transaction()
    // This safely complies with neon-http's stateless constraints

    // Step A: Shift existing colliding elements upward by 1
    await db
      .update(table)
      .set({
        displayOrder: sql`${table.displayOrder} + 1`,
      })
      .where(and(gte(table.displayOrder, displayOrder), ne(table.id, id)));

    // Step B: Update and return the modified record to the Express controller
    return await db
      .update(table)
      .set({ name, link, displayOrder })
      .where(eq(table.id, id))
      .returning();
  },
};
