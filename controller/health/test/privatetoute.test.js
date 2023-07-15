import request from "supertest";
import app from "../../../app.js";

describe("Check private route path", () => {
	test("It should response the GET method and return status 'ok", () => {
		return request(app)
			.get("/private")
			.then((response) => {
				expect(response.statusCode).toBe(401);
				expect(response.body.status).toEqual("Unauthorised");
			});
	});
});
