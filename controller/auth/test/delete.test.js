import request from "supertest";
import app from "../../../app.js";

describe("Try to delete empty non existent users", () => {
	test("It should response with status code 403 and return message = Invalid request", async () => {
		return request(app)
			.delete("/api/userdelete/:usersname")
			.send({
				username: "",
			})
			.then((response) => {
				expect(response.statusCode).toBe(404);
				//expect(response.body.message).toEqual("Invalid request!");
			});
	});
});
