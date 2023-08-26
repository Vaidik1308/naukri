import axios from "axios";
import { useEffect, useState } from "react";


const rapidApiKey = "345235cc3fmshcb9f728f7bd1c74p132690jsn6b9132063243";
const useFetch = (endpoint,query) => {
    const [data , setData] = useState([]);
    const [isLoading,setIsLoading]= useState(false);
    const [error,setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {
            ...query
        },
      };

      const fetchData = async () => {
        setIsLoading(true)

        try{
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        }catch(error){
            setError(error);
            alert('There is an error')
        }finally{
            setIsLoading(false)
        }
      }

      useEffect(() => {
        fetchData()
      },[]);

      const refetch = () => {
        setIsLoading(true);
        fetchData();
      }

      return {data , isLoading, error, refetch}
}

export default useFetch;
