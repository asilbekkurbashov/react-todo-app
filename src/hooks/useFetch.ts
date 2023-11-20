import axios from "axios";
import { useState, useEffect } from "react"

interface IUseFetch  {
    data: [];
    error: String | undefined;
    pending: Boolean | undefined;
}

export const useFetch = (API:string):IUseFetch => {
    const [pending, setPending] = useState<Boolean>()
    const [error, setError] = useState<String>();
    const [data, setData] = useState<[]>([]);

    const getData = async (API:string) => {
        try {
            setPending(true)
            const response = await axios.get(API)
            setData(response.data)
        } catch (error: any) {
            setError(error.message)
        } finally {
            setPending(false)
        }
    }

    useEffect(() => {
        getData(API)
    }, [API])

    return {data, error, pending}
    
}