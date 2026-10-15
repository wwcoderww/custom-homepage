import { eq, or } from "drizzle-orm";
import { db } from "../db/index.js";
import { mainLinks } from "../db/schema/links-main.js";
import { sidebarLinks } from "../db/schema/links-sidebar.js";

export type tableType = typeof mainLinks | typeof sidebarLinks;

export const SidebarService = {
  async get(table: tableType) {
    return await db.select().from(table);
  },

  async delete(table: tableType, name: string) {
    return await db.delete(table).where(eq(table.name, name));
  },

  async post(table: tableType, name: string, link: string) {
    return await db.insert(table).values({ name, link });
  },

  async put(table: tableType, id: string, name: string, link: string) {
    return await db
      .update(table)
      .set({ name, link })
      .where(eq(table.id, id))
      .returning();
  },
};
