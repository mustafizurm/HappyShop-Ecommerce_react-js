
import { useState } from 'react';

const UsePostRequest = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const postFetch = async (payload) => {
        setIsLoading(true);
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload),
                credentials: "include"
            });

            const data = await response.json();
            if (!response.ok) {
                setError(data.message || "Something went wrong");
            } else {
                setData(data.data);
                return data.data;
            }
        } catch (error) {
            setError("Network Problem");
            setData(null);
        } finally {
            setIsLoading(false);
        }
    };

    const post_Refetch = async (payload) => {
       return await postFetch(payload)
    }
    return {data, error, isLoading, post_Refetch}
};
export default UsePostRequest;
