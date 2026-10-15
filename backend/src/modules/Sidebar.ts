import { and, eq, or } from "drizzle-orm";
import { db } from "../db/index.js";
import { sidebarLinks } from "../db/schema/links-sidebar.js";

export const SidebarService = {
  async get() {
    return await db.select().from(sidebarLinks);
  },

  async delete(name: string) {
    return await db.delete(sidebarLinks).where(eq(sidebarLinks.name, name));
  },

  async post(name: string, link: string) {
    return await db.insert(sidebarLinks).values({ name, link });
  },

  async put(name: string, link: string) {
    return await db
      .update(sidebarLinks)
      .set({ name, link })
      .where(or(eq(sidebarLinks.name, name), eq(sidebarLinks.link, link)))
      .returning();
  },
};
