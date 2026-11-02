import supertest from "supertest";
import { describe, it, expect } from "vitest";

const apiTarget = process.env.BACKEND_URL || "http://localhost:8080";

const testUser = "9HmNgOsctZRJYdKSMhiUWBlC8pS3hb6H";
const testId = "d8f2285a-0ce4-4906-8f21-b4da5f625302";

describe("GET /links/:userId", () => {
  it("If user exists return 200, {success: true, data}", async () => {
    const response = await supertest(apiTarget).get(`/links/${testUser}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ success: true, data: expect.any(Array) });
  });

  it('If user does not exist return 400, {success:false, errors:[{field:"userId", message:"User does not exist"}]}', async () => {
    const response = await supertest(apiTarget).get("/links/invalid-user-id");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      success: false,
      errors: [{ field: "userId", message: "User does not exist" }],
    });
  });
});

describe("DELETE /links/:linkId", () => {
  it("If link exist and deleted return 200, {success: true}", async () => {
    const response = await supertest(apiTarget).delete(`/links/${testId}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ success: true });
  });

  it("If link does not exist return 400, {success: false, error: 'Id doesn't exist'}", async () => {
    const response = await supertest(apiTarget).delete("/links/invalid-id");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      success: false,
      errors: [{ field: "id", message: "Id doesn't exist" }],
    });
  });
});

describe("POST /links", () => {
  it("On success return status 200, {success: true}", async () => {
    const response = await supertest(apiTarget).post("/links").send({
      userId: testUser,
      name: "test",
      link: "https://test.com",
      group: 1,
    });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ success: true });
  });
});

describe("PUT /links", () => {
  it("On success return status 200, {success: true}", async () => {
    const response = await supertest(apiTarget).put("/links").send({
      id: testId,
      name: "test",
      link: "https://test.com",
      displayOrder: 1,
      group: 1,
      userId: testUser,
    });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ success: true });
  });
});
