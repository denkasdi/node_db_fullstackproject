import request from "supertest";
import app from "../../../app.js";

describe("Try register with empty username", () => {
	test("It should response with status code 500 and return message = Invalid request", async () => {
		return request(app)
			.post("/api/register")
			.send({
				email: "",
				username: "",
				password: "",
				password_confirmation: "",
				lokasi: "",
				phone: "",
				result_spm: "",
				sex: "",
				subjek: "",
				aboutme: "",
				rate: "",
			})
			.then((response) => {
				expect(response.statusCode).toBe(500);
				expect(response.body.message).toEqual("Key (email)=() already exists.");
			});
	});
});

// describe("Try register with existing username", () => {
// 	test("It should response with status code 500 and return message = Invalid request", async () => {
// 		return request(app)
// 			.post("/api/register")
// 			.send({
// 				email: "",
// 				username: "",
// 				password: "",
// 				password_confirmation: "",
// 			})
// 			.then((response) => {
// 				expect(response.statusCode).toBe(500);
// 				//expect(response.body.message).toEqual("Key (email)=() already exists.");
// 			});
// 	});
// });
