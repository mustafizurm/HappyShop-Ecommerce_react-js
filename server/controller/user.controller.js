const User = require("../model/user.model");
const jwt = require("jsonwebtoken")




// user signup
exports.userSignup = async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;

  const newUser = {
    name,
    email,
    password,
    confirmPassword,
  };

  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    return res.status(404).json({
      success: false,
      message: "User already register",
    });
  }

  if (password !== confirmPassword) {
    return res.status(404).json({
      success: false,
      message: "password incorrect",
    });
  }

  const user = await User.create(newUser);

  await user.save();

  return res.status(404).json({
    success: true,
    message: "User create successfully",
    user,
  });
};


// user login
exports.userLogin = async (req, res, next) => {
	const {email, password} = req.body;

	const existingUser = await User.findOne({email: email});
	console.log(existingUser)

	if(!existingUser){
		return res.status(404).json({
			success: false,
			message: "User not found"
		})
	} else{
		if(existingUser.password !== password){
			return res.status(404).json({
				success: false,
				message: "Incorrect Password"
			})
		} else{

			const auth_token = jwt.sign({email: existingUser.email }, process.env.SECRET_KEY, {expiresIn: "2d"})
			
			const optionInToken = {
				httpOnly: true,
				secure: true,
				sameSite: "None",
			}

			return res.cookie("auth_token", auth_token, optionInToken).status(200).json({
				success: true,
				message: "Login Successfully",
				user: existingUser,
				auth_token
			})
		}
	}
};



// user logout
exports.userLogout = async (req,res,next) => {
	res.clearCookie("auth_token").status(200).json({
		success: true,
		message: "User Logout successfully"
	})
}

exports.getSingleUserDetails = async (req, res, next) => {
	try {
		const user = await User.findOne({email: req.user});

		res.status(200).json({
			success: true,
			message: "single user",
			user
		})
	} catch (error) {
		res.status(404).json({
			success: false,
			message: "Can not find",
		})
	}
}


// allUser find by Admin

exports.getAllUsers = async (req, res, next) => {
	const users = await User.find();

	if(users){
		return res.status(200).json({
			success: true,
			message: "All users found",
			users
		})
	} else{
		return res.status(404).json({
			success: false,
			message: "users not found",
		}) 
	}
}

exports.getUserRoleUpdate = async (req, res, next) => {
	const {id, userRole} = req.body;

	const existingUser = await User.findOne({_id: id})

	if(existingUser){
		const updateResult = await User.findOneAndUpdate({_id:id}, {role: userRole}, {new: true})
		
		if(updateResult){
			return res.status(202).json({
				success: true,
				message: "User Role Updated Successfully",
				updateResult
			})
		} else{
		return	res.status(404).json({
				success: false,
				message: "Sever Problem"
			})
		}
	} else{
		return res.status(404).json({
			success: false,
			message: "User Not Found"
		})
	}
	res.json({
		id,
		userRole
	})

}