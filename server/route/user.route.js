const express = require("express");
const { userSignup, userLogin, userLogout, getSingleUserDetails, getAllUsers, getUserRoleUpdate } = require("../controller/user.controller");
const Auth = require("../midelware/auth");
const Router = express.Router();


Router.post("/user/signup", userSignup)
Router.post("/user/login", userLogin)
Router.get("/user/logout", userLogout)
Router.get("/user/currentUserDetails", Auth, getSingleUserDetails)


// admin
Router.get("/admin/allUser", getAllUsers)
Router.put("/admin/userRoleUpdate", getUserRoleUpdate)

module.exports = Router;