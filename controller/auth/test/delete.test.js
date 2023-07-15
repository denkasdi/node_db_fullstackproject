import request from "supertest";
import app from "../../../app.js";

describe("Try login with empty fields", () => {
	test("It should response with status code 403 and return message = Invalid request", async () => {
		return request(app)
			.delete("/api/userdelete/:usersname")
			.send({
				username: "",
			})
			.then((response) => {
				expect(response.statusCode).toBe(403);
				expect(response.body.message).toEqual("Invalid request!");
			});
	});
});
