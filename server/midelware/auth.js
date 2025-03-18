const jwt = require("jsonwebtoken");
const User = require("../model/user.model")

const Auth = async (req, res, next) => {
    const auth_token = req.cookies.auth_token;

    if (!auth_token) {
        res.status(404).json({
            success: false,
            message: "Private Route, plz login",
        });
    } else {
        const decodeData = await jwt.verify(auth_token, process.env.SECRET_KEY);
		
		req.user = decodeData.email;

        next();
    }
};

module.exports = Auth;
