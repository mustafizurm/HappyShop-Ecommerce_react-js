const User = require("../model/user.model");
const jwt = require("jsonwebtoken")

// user signup
exports.userSignup = async (req, res, next) => {
	try {
		const { name, email, password, confirmPassword } = req.body;
		const newUser = {
			name,
			email,
			password,
			confirmPassword,
		};

		const existingUser = await User.findOne({ email: email });
		if (!name || !email || !password || !confirmPassword) {
			return res.status(400).json({
				success: false,
				message: "All field are required",
			});
		}
		if (existingUser) {
			// client error
			return res.status(404).json({
				success: false,
				message: "User already register",
			});
		}

		if (password !== confirmPassword) {
			// client error
			return res.status(404).json({
				success: false,
				message: "password incorrect",
			});
		}
		const user = await User.create(newUser);
		await user.save();
		// successfully
		return res.status(200).json({
			success: true,
			message: "User create successfully",
			data: user,
		});
	} catch (error) {
		// srever error
		return res.status(500).json({
			success: false,
			message: "Server Problem",
		});
	}
};


// user login
exports.userLogin = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const existingUser = await User.findOne({ email: email });

		if (!email || !password) {
			// client error
			return res.status(404).json({
				success: false,
				message: "All field are required"
			})
		}

		if (!existingUser) {
			// client error
			return res.status(404).json({
				success: false,
				message: "User not found"
			})
		} else {
			if (existingUser.password !== password) {
				// client error
				return res.status(404).json({
					success: false,
					message: "Incorrect Password"
				})
			} else {
				const auth_token = jwt.sign({ email: existingUser.email }, process.env.SECRET_KEY, { expiresIn: "2d" })
				const optionInToken = {
					httpOnly: true,
					secure: true,
					sameSite: "None",
				}
				// successfully
				return res.cookie("auth_token", auth_token, optionInToken).status(200).json({
					success: true,
					message: "Login Successfully",
					data: existingUser,
					auth_token
				})
			}
		}
	} catch (error) {
		// srever error
		return res.status(500).json({
			success: false,
			message: "Server Problem",
		});
	}
};



// user logout
exports.userLogout = async (req, res, next) => {
	try {
		return res.clearCookie("auth_token").status(200).json({
			success: true,
			message: "User Logout successfully",
		})
	} catch (error) {
		// srever error
		return res.status(500).json({
			success: false,
			message: "Server Problem",
		});
	}
}

exports.getSingleUserDetails = async (req, res, next) => {
	try {
		const user = await User.findOne({ email: req.user });
		res.status(200).json({
			success: true,
			message: "single user",
			data: user
		})
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Server Problem",
		})
	}
}


// allUser find by Admin
exports.getAllUsers = async (req, res, next) => {
	try {
		const users = await User.find();
		if (users) {
			return res.status(200).json({
				success: true,
				message: "All users found",
				data: users
			})
		} else {
			// client error
			return res.status(404).json({
				success: false,
				message: "users not found",
			})
		}
	} catch (error) {
		// server error
		res.status(500).json({
			success: false,
			message: "Server Problem",
		})
	}
}

exports.getUserRoleUpdate = async (req, res, next) => {
	try {
		const { id, userRole } = req.body;
		const existingUser = await User.findOne({ _id: id })
		if (existingUser) {
			const updateResult = await User.findOneAndUpdate({ _id: id }, { role: userRole }, { new: true })
			if (updateResult) {
				// successfully
				return res.status(202).json({
					success: true,
					message: "User Role Updated Successfully",
					data: updateResult
				})
			} else {
				// client error
				return res.status(404).json({
					success: false,
					message: "Something is wrong"
				})
			}
		} else {
			// client error
			return res.status(404).json({
				success: false,
				message: "User Not Found"
			})
		}
		// res.json({
		// 	id,
		// 	userRole
		// })
	} catch (error) {
		// server error
		res.status(500).json({
			success: false,
			message: "Server Problem",
		})
	}
}

