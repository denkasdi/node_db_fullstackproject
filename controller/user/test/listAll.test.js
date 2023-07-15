import request from "supertest";
import app from "../../../app.js";

describe("Try get location of user without entering location", () => {
	test("It should response with status code 404 and return message = Not found", async () => {
		return request(app)
			.get("/api/location")
			.then((response) => {
				expect(response.statusCode).toBe(404);
				//expect(response.body.message).toEqual("Invalid request!");
			});
	});
});
