import query from "../../db/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const TOKEN_SECRET = "asdaasd2321dx12d1asd1121212sqs346sda";

const generateAccessToken = (userData) => {
	return jwt.sign(userData, TOKEN_SECRET, { expiresIn: "1800s" });
};

const login = async (req, res) => {
	const body = req.body;

	// query database for user by email then compare the password
	try {
		const user = await query(
			"SELECT * FROM users WHERE username=$1 OR email=$1",
			[body.identifier]
		).then((res) => {
			if (res.rowCount > 0) {
				return res.rows[0];
			} else {
				throw res;
			}
		});
	} catch (error) {
		const serverRes = {
			message: "Invalid request",
			error: "Invalid indentifier",
		};
		res.status(403).json(serverRes);
	}
};

export default login;
