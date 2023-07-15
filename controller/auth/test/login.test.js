import request from "supertest";
import app from "../../../app.js";

describe("Try login with empty fields", () => {
	test("It should response with status code 403 and return message = Invalid request", async () => {
		return request(app)
			.post("/api/login")
			.send({
				identifier: "",
				password: "",
			})
			.then((response) => {
				expect(response.statusCode).toBe(403);
				expect(response.body.message).toEqual("Invalid request!");
			});
	});
});

describe("Try login using wrong username", () => {
	test("It should response status code 200 and return message and user data", async () => {
		return request(app)
			.post("/api/login")
			.send({
				identifier: "admin",
				password: "12345",
			})
			.then((response) => {
				expect(response.statusCode).toBe(401);
				//expect(response.body.message).toEqual("Login successfull");
			});
	});
});
