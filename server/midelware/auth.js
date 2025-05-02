const jwt = require("jsonwebtoken");
const User = require("../model/user.model")

const Auth = async (req, res, next) => {
    try {
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
    } catch (error) {
    // srever error
	return res.status(500).json({
		success: false,
		message: "Server Problem",
	  });
    }
};

module.exports = Auth;
