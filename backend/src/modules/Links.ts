import { and, eq, gte, ne, sql } from "drizzle-orm";
import { db } from "../db/index.js";
import { linksDb } from "../db/schema/links.js";

export const SidebarService = {
  async get(userId: string) {
    return await db.select().from(linksDb).where(eq(linksDb.userId, userId));
  },

  async delete(id: string) {
    return await db.delete(linksDb).where(eq(linksDb.id, id)).returning();
  },

  async post(
    userId: string,
    name: string,
    link: string,
    group: number,
    displayOrder: number,
  ) {
    return await db
      .insert(linksDb)
      .values({ userId, name, link, displayOrder, group });
  },

  async put(
    id: string,
    name: string,
    link: string,
    displayOrder: number,
    group: number,
    userId: string,
  ) {
    // --- STEP 1: DEFRAGMENT THE ENTIRE GROUP (Fixed PostgreSQL constraint) ---
    await db.execute(sql`
    WITH ordered_links AS (
      SELECT ${linksDb.id} as sub_id, ROW_NUMBER() OVER (ORDER BY ${linksDb.displayOrder} ASC) as new_order
      FROM ${linksDb}
      WHERE ${linksDb.userId} = ${userId} AND ${linksDb.group} = ${group} AND ${linksDb.id} != ${id}
    )
    UPDATE ${linksDb}
    /* 💡 FIXED: We use the plain column identifier without qualifying it with the table name */
    SET "displayOrder" = ordered_links.new_order
    FROM ordered_links
    WHERE ${linksDb.id} = ordered_links.sub_id;
  `);

    // --- STEP 2: OPEN A HOLE FOR THE UPDATED ITEM ---
    await db
      .update(linksDb)
      .set({
        displayOrder: sql`${linksDb.displayOrder} + 1`,
      })
      .where(
        and(
          eq(linksDb.userId, userId),
          eq(linksDb.group, group),
          gte(linksDb.displayOrder, displayOrder),
          ne(linksDb.id, id),
        ),
      );

    // --- STEP 3: ASSIGN THE NEW PROPERTIES ---
    return await db
      .update(linksDb)
      .set({ name, link, displayOrder, group })
      .where(eq(linksDb.id, id))
      .returning();
  },
};
