const backendDomain = 'http://localhost:5000';

const SummaryApi = {
    signup: {
        url: `${backendDomain}/api/user/signup`,
        method: 'post' 
    },
	login: {
		url: `${backendDomain}/api/user/login`,
		method: 'post'
	},
	logOut: {
		url: `${backendDomain}/api/user/logout`,
		method: 'get'
	},
	currentUser: {
		url: `${backendDomain}/api/user/currentUserDetails`,
		method: 'get'
	},
};

export default SummaryApi;


       // const response = await fetch(SummaryApi?.signup?.url, {
        //     method: SummaryApi.signup.method,
        //     headers: {
        //         "Content-type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        // });

        // const responseData = await response.json();

		// const commonApi = await commonApi(`${backendDomain}/api/user/signup`,"post", data);
		// console.log(commonApi)

		export const ROLE = {
			ADMIN: 'Admin',
			GENERAL: 'User'
		}
