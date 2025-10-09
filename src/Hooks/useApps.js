import axios from "axios";
import { useEffect, useState } from "react"


const useApps = ()=>{
    const [apps, setApps] = useState([]);
   const [loading, setLoadin]= useState(true);
   const [error, setError]= useState(null);

   useEffect(()=>{
    setLoadin(true)
    axios('../appData.json').then (data=>setApps(data.data)
    .catch(err=> setError(err))
    .finally (()=> setLoadin(false))
    )
   }, [])

 return{apps, loading, error}
}

export default useApps