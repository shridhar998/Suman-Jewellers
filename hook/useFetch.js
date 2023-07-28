import { View, Text } from 'react-native'
import {useEffect,useState} from 'react'
import axios from 'axios'
import { URL } from '../constants/url'

const useFetch = () => {

    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    const fetchData = async ()=>{
        setIsLoading(true)
        try {
            const response = await axios.get(URL+'/api/products',{
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
              },)
            setData(response.data)
            console.log("YEHDATa")
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setError(error)
        }finally{
            setIsLoading(false);
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }
  return (
    {data,isLoading,error,refetch}
  )
}

export default useFetch