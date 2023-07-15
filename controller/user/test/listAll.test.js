import request from "supertest";
import app from "../../../app.js";

describe("Try get all users", () => {
	test("It should response with status code 200 and return message = Ok", async () => {
		const response = await request(app).get("/api/users");
		expect(response.statusCode).toBe(200);
		expect(response.body.status).toEqual("Ok");
	});
});
