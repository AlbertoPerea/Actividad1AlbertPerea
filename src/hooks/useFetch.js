import { useEffect, useState } from "react";

const API_ENDPOINT = `https://658228df02f747c836791d73.mockapi.io/petclinic/products`;

export const useFetch = (params) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    const fetchMovie = (url) => {
        setIsLoading(true);
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(respuestaJson => {
                if (respuestaJson.Response !== "") {
                    setData(respuestaJson);
                    setError(false);
                } else {
                    setError(true);
                }
                setIsLoading(false);
            }).catch(error => {console.log(error);})
    }
    useEffect(() => {
        fetchMovie(`${API_ENDPOINT}${params}`);
    }, [params])

    return {isLoading, error, data}
}