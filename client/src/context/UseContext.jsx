import { createContext, useEffect, useState } from "react";
import UseGetRequest from "../helper/UseGetRequest";

export const UseContext = createContext();

const UseProvider = ({children}) => {

    const {data, error, isLoading, refetch} = UseGetRequest("http://localhost:5000/api/user/currentUserDetails")

    return (
        <UseContext.Provider value={{data, error, isLoading, refetch}}>
            {children}
        </UseContext.Provider>
    )
}

export default UseProvider