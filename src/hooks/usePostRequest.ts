import { useState } from "react"

const useSendRequest = <T>() => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const sendRequest = async (url: string, method: string, data: T) => {
        setIsLoading(true);
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
            return { status: true };
        } catch (err) {
            return {
                status: false,
                error: err instanceof Error ? err.message : 'Unknown error was occured!'
            };
        } finally {
            setIsLoading(false);
        }
    }

    return { data, isLoading, sendRequest };
};

export { useSendRequest };