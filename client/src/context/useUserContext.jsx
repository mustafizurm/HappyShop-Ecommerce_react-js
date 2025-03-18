import React, { createContext, useContext, useState } from "react";
import { allUsersFindFunck, userCurrentDetailsFunck } from "../helper/allApi";

// 1. Create a Context
export const userContext = createContext();

const UserProvider = ({ children }) => {
const [boxShow, setBoxShow] = useState(false)
const [currentUser, setCurrentUser] = useState()
const [users, setUsers] = useState()
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)



const fetchAllUser = async () => {
	try {
	    setLoading(true)
		const response = await allUsersFindFunck()
		setUsers(response)
	} catch (error) {
		setError(error)
	} finally{
		setLoading(false)
	}
}

const fetchCurrentUser = async () => {
	try {
		setLoading(true)
		const response = await userCurrentDetailsFunck()
		setCurrentUser(response)
	} catch (error) {
		setError(error)
	} finally{
		setLoading(false)
	}
}



    return (
        <userContext.Provider value={{ boxShow, setBoxShow, fetchAllUser,fetchCurrentUser, currentUser, users}}>
            {children}
        </userContext.Provider>
    );
};

export default UserProvider;
