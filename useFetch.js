import React, { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {
    const [state, setState] = useState({data:null, loading: true, error:null});
    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);


    useEffect(() => {
        fetch(url).then( resp => resp.json())
        .then(data =>{
            if (isMounted.current){
                setState({
                    data, loading: false, error:null 
                });
            }
        });
        
    }, [url])
    return state;
}
