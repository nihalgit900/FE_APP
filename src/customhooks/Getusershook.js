
import { useState,useEffect } from "react";
import { getallusers } from "../apis/users";

const Getusershook=()=>{

    var [userdata,Setuserdata]=useState([{}]);
    useEffect(()=>{
        
        getalluserdetails();
        
        
     },[])
    
     const getalluserdetails=()=>{
        getallusers()
        .then((res)=>{
            Setuserdata(res.data)
            console.log(userdata)
    
        })
    
        .catch((err)=>{
            console.log(err)
        })
     }

     return [userdata,getalluserdetails];

}

export default Getusershook;