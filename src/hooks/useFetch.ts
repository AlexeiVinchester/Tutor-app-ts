import { useCallback, useEffect, useState } from "react"

const useFetch = <T>(url: string) => {
    const [data, setData] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    
    const fetchData = useCallback(async () => {
        setData([])
        setError('')
        setIsLoading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch data! Response status: ${response.status}, Response text: ${response.statusText}`)
            }
            return response.json();
        } catch{
            throw new Error('Error while fetching!')
        } 
    }, [url])

    useEffect(() => {
        fetchData()
            .then(data => {
                setData(data);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err.message);
            })
    }, [fetchData]);

    return { data, isLoading, error };
};

export { useFetch };