import { eq } from "drizzle-orm";
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

  async put(table: tableType, id: string, name: string, link: string) {
    return await db
      .update(table)
      .set({ name, link })
      .where(eq(table.id, id))
      .returning();
  },
};
