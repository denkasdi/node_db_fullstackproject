import request from "supertest";
import app from "../../../app.js";

describe("Check root path", () => {
	test("It should respond with the GET method and return status 'ok'", async () => {
		const response = await request(app).get("/");
		expect(response.statusCode).toBe(200);
		expect(response.body.status).toEqual("ok");
	});
});
