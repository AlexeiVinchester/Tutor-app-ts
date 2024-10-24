import { useState } from "react"

const useSendRequest = <T>() => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const sendRequest = async (url: string, method: string, data: T) => {
        setIsLoading(true);
        setError(null);
        setIsSuccess(false);
        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.statusText}, status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
            setIsSuccess(true);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Unknown error occured!')
            }

        } finally {
            setIsLoading(false);
        }
    }

    return { data, error, isLoading, isSuccess, sendRequest };
};

export { useSendRequest };