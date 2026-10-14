import { eq } from "drizzle-orm";
import { db } from "../db/index.js";
import { sidebarLinks } from "../db/schema/links-sidebar.js";

export const SidebarService = {
  async get() {
    return await db.select().from(sidebarLinks);
  },

  async delete(name: string) {
    return await db.delete(sidebarLinks).where(eq(sidebarLinks.name, name));
  },
};
