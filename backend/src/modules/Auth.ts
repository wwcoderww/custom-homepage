import { eq } from "drizzle-orm";
import { user } from "../db/schema/auth.js";
import { db } from "../db/index.js";

export const AuthService = {
  async getUser(userId: string) {
    return await db.select().from(user).where(eq(user.id, userId));
  },
};
