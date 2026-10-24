import supertest from "supertest";
import { app } from "./app.js";

const testUser = "J9Y7PTJXyc1lz6s6jdPH6MEs8hn211A4";

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
  it("If links exist and deleted return 200, {success: true}");
});
