import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasEror: null,
    });

    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true,
        });

        const response = await fetch(url);
        const data = await response.json();

        setState({
            data,
            isLoading: false,
            hasEror: null,
        });
    }

    useEffect(()=>{
        getFetch();
    }, [url]);

    return state;
}