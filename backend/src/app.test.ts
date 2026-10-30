import supertest from "supertest";
import { app } from "./app.js";
import { describe, it, expect } from "vitest";

const testUser = "J9Y7PTJXyc1lz6s6jdPH6MEs8hn211A4";
const testId = "04867bfc-33a6-4f78-9869-6bd5a7057599";

describe(`GET /links/:userId`, () => {
  it("If user exists return 200, {success: true, data}", async () => {
    const response = await supertest(app).get(`/links/${testUser}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ success: true, data: expect.any(Array) });
  });

  it('If user does not exist return 400, {success:false, errors:[{field:"userId", message:"User does not exist"}]}', async () => {
    const response = await supertest(app).get("/links/invalid-user-id");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      success: false,
      errors: [{ field: "userId", message: "User does not exist" }],
    });
  });
});

describe("DELETE /links/:linkId", () => {
  it("If link exist and deleted return 200, {success: true}", async () => {
    const response = await supertest(app).delete(`/links/${testId}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ success: true });
  });
  it("If link does not exist return 400, {success: false, error: 'Id doesn't exist'}", async () => {
    const response = await supertest(app).delete("/links/invalid-id");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      success: false,
      errors: [{ field: "id", message: "Id doesn't exist" }],
    });
  });
});

describe("POST /links", () => {
  // Already validate form data in middleware and frontend
  it("On success return status 200, {success: true}", async () => {
    const response = await supertest(app).post("/links").send({
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
    const response = await supertest(app).put("/links").send({
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
