import { useState, useEffect } from "react";

export const useFetch = (url, method="GET" ) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState(null);
    
    const postData = (postData) => {
        setOptions({
            method:"POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify(postData)
        })
    }

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async(fetchOptions) => {
            setIsPending(true)
            try{
                const response = await fetch(url, { ...fetchOptions, signal: controller.signal})
                if(!response.ok) {
                    throw new Error(response.statusText)
                }
                const json = await response.json()

                setIsPending(false)
                setData(json)
                setError(null)

            }catch(err) {
                if(err.name === "AbortError"){
                    console.log('the fetch was aborted')
                }else {
                    
                    setIsPending(false);
                    setError(err.message)
                }
                
            }
        }
        

        if(method === 'GET'){
            fetchData()
        }
        if(method === 'POST' && options){
            fetchData(options)
        }

        return () => {
            controller.abort()
        }

    }, [url, method, options])

    return { data, isPending, error, postData }
}

