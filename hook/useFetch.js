import { useState,useEffect } from "react";
import axios from "axios";
// import {RAPID_API_KEY} from '@env'
// const rapidApiKey=RAPID_API_KEY

export const useFetch=(endpoint,query)=>{
    const [data, setdata] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const [error, seterror] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
        //  
        ...query
        },
        headers: {
          'X-RapidAPI-Key': 'e772aa741bmsh2676eeb4e3fd77ap103333jsnc2f52d93fadc',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

      const fetchData=async()=>{
        setisLoading(true)

        try{
            const response = await axios.request(options);
            setdata(response.data.data)
            setisLoading(false)
        }
        catch(error){
          seterror(error)
          alert(error)
        }
        finally{
setisLoading(false)
        }
      }

useEffect(() => {
  fetchData()
}, [])

const refetch=()=>{
    setisLoading(true);
    fetchData();
}

return {data,isLoading,error,refetch}
}