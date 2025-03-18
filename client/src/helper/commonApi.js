const commonApi = async (url, methods, data, id) => {

	const config = {
		method: methods,
		headers: {
			"Content-type": "application/json",
		 },
		 credentials: "include" 
	}

	if(methods === "post"){
		config.body = JSON.stringify(data)
	}

	if(methods === "put"){
		config.body = JSON.stringify({id: id, userRole: data})
	}
	
	const jsonData = await fetch(url, config)
	const response = await jsonData.json()
	return response;
   
};

export default commonApi;

