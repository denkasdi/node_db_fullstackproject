import request from "supertest";
import app from "../../../app.js";

describe("Check private route path without authorisation", () => {
	test("It should respond with the GET method and return status 'Unauthorised'", async () => {
		const response = await request(app).get("/private");
		expect(response.statusCode).toBe(401); // Check for the correct status code
		expect(response.body.message).toEqual("Unauthorised"); // Check for the correct error message
	});
});

describe("Check public route path without authorisation", () => {
	test("It should respond with the GET method and return status 'Unauthorised'", async () => {
		const response = await request(app).get("/public");
		expect(response.statusCode).toBe(200); // Check for the correct status code
		expect(response.body.message).toEqual("Public route"); // Check for the correct error message
	});
});

// import request from "supertest";
// import app from "../../../app.js";

describe("Check if admin without correct input", () => {
	test("It should respond with the GET method and return status 'Unauthorised'", async () => {
		const response = await request(app).get("/admin");
		expect(response.statusCode).toBe(401); // Check for the correct status code
		expect(response.body.message).toEqual("Unauthorised"); // Check for the correct error message
	});
});

describe("Check for empty location input", () => {
	test("It should respond with the GET method and return status 'Cannot GET /api/location'", async () => {
		const response = await request(app).get("/api/location/");
		expect(response.statusCode).toBe(404); // Check for the correct status code
		//expect(response.body.message).toEqual("Unauthorised"); // Check for the correct error message
	});
});
