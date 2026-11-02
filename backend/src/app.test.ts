import supertest from "supertest";
import { describe, it, expect, afterAll } from "vitest";
import { app } from "./app.js";
import { db } from "./db/index.js";
import { user } from "./db/schema/auth.js";
import { eq } from "drizzle-orm";

const testEmail = "a@a.com";
let testUserId: string;
let testLinkId: string;

describe("AUTH new user", () => {
  afterAll(async () => {
    await db.delete(user).where(eq(user.email, testEmail));
    console.log(`Successfully cleaned up test user: ${testEmail}`);
  });

  it("AUTH NEW USER: Should return 200 and data", async () => {
    const response = await supertest(app).post("/auth/sign-up/email").send({
      email: "a@a.com",
      name: "a@a.com",
      password: "aaaaaaaaa",
    });
    expect(response.status).toBe(200);
    testUserId = response.body.user.id;
  });

  it("POST LINK: On success return status 200, {success: true}", async () => {
    const response = await supertest(app).post("/links").send({
      userId: testUserId,
      name: "test",
      link: "https://test.com",
      group: 1,
    });
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    testLinkId = response.body.data[0].id;
  });

  it("PUT LINK: On success return status 200, {success: true}", async () => {
    const response = await supertest(app).put("/links").send({
      id: testLinkId,
      name: "test",
      link: "https://test.com",
      displayOrder: 1,
      group: 1,
      userId: testUserId,
    });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ success: true });
  });

  it("GET LINNK: If user exists return 200, {success: true, data}", async () => {
    const response = await supertest(app).get(`/links/${testUserId}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ success: true, data: expect.any(Array) });
  });

  it('GET LINK: If user does not exist return 400, {success:false, errors:[{field:"userId", message:"User does not exist"}]}', async () => {
    const response = await supertest(app).get("/links/invalid-user-id");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      success: false,
      errors: [{ field: "userId", message: "User does not exist" }],
    });
  });

  it("DELETE LINK: If link exist and deleted return 200, {success: true}", async () => {
    const response = await supertest(app).delete(`/links/${testLinkId}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ success: true });
  });

  it("DELETE LINK: If link does not exist return 400, {success: false, error: 'Id doesn't exist'}", async () => {
    const response = await supertest(app).delete("/links/invalidId");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      success: false,
      errors: [{ field: "id", message: "Id doesn't exist" }],
    });
  });
});
