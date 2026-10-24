import supertest from "supertest";
import { app } from "./app.js";

const testUser = "J9Y7PTJXyc1lz6s6jdPH6MEs8hn211A4";
const testId = "04867bfc-33a6-4f78-9869-6bd5a7057599";

describe(`GET /api/links`, () => {
  it("If user exists return 200, {success: true, data}", async () => {
    const response = await supertest(app).get(`/api/links/${testUser}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ success: true, data: expect.any(Array) });
  });

  it('If user does not exist return 400, {success:false, errors:[{field:"userId", message:"User does not exist"}]}', async () => {
    const response = await supertest(app).get("/api/links/invalid-user-id");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      success: false,
      errors: [{ field: "userId", message: "User does not exist" }],
    });
  });
});

describe("DELETE /api/links/", () => {
  it("If link exist and deleted return 200, {success: true}", async () => {
    const response = await supertest(app).delete(`/api/links/${testId}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ success: true });
  });
  it("If link does not exist return 400, {success: false, error: 'Id doesn't exist'}", async () => {
    const response = await supertest(app).delete("/api/links/invalid-id");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      success: false,
      errors: [{ field: "id", message: "Id doesn't exist" }],
    });
  });
});
