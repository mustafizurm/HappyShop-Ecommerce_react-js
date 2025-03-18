import backendDomain from "./BackEndDomain";
import commonApi from "./commonApi";

export const userSignupFunck = ( data) =>{
	return commonApi(`${backendDomain}/api/user/signup`, "post", data, null)
}

export const userLoginFunck = ( data) =>{
	return commonApi(`${backendDomain}/api/user/login`, "post", data, null)
}

export const userLogOutFunck = () =>{
	return commonApi(`${backendDomain}/api/user/logout`, "get", null, null)
}

export const userCurrentDetailsFunck = () =>{
	return commonApi(`${backendDomain}/api/user/currentUserDetails`, "get", null, null)
}


export const allUsersFindFunck = async () =>{
	return await commonApi(`${backendDomain}/api/admin/allUser`, "get", null, null)

}

export const userRoleUpdateFunck = async (data, id) => {
	return await commonApi(`${backendDomain}/api/admin/userRoleUpdate`, "put", data, id)
}
