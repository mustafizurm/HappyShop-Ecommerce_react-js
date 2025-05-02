import React, { useCallback, useEffect, useState } from 'react'

const UseGetRequest = (url) => {
        const [data, setData] = useState(null);
        const [error, setError] = useState(null);
        const [isLoading, setIsLoading] = useState(false);
    
    const getFetchData  = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "Application/json"
                },
                credentials: "include"
            })
    
            const data = await response.json();
    
            if (!response.ok) {
                setError(data.message || "Something went wrong");
            } else {
                setError(null)
                setIsLoading(false)
                setData(data.data);
                return data.data;
            }
           } catch (error) {
            setError("Network Problem")
           }
    }

    const get_Refetch = () => {
        return getFetchData()
    }

    return { data, error, isLoading, get_Refetch}
}

export default UseGetRequest