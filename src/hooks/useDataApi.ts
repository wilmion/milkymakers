import axios, {AxiosResponse } from 'axios';
import {useState , useEffect} from 'react'


const useDataApi:Function = (API:string , dependecy:Array<any>):Object => {
    const [response , setResponse] = useState({data: {data:{products:[]}} , loading:true , error:null});

    useEffect(() => {
        setResponse({data:{data:{products:[]}} , loading:true , error:null});
        fecthData();
    },dependecy)
    const fecthData = async ():Promise<any> => {
        try{
            const response_API:AxiosResponse = await axios(API);
            setResponse({data:response_API , loading:false , error:null});
        }catch(error){
            setResponse({data:{data:{products:[]}} , loading:false , error:error.message});
        }
        
    }
    return {
        response
    }
}

export default useDataApi
