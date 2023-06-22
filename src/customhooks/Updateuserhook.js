import { updateuserstatus } from "../apis/users"

import { useState } from "react"

const Updateuserhook= (getalluserdetails)=>{
    var [currentusereditdata,Setcurrentusereditdata] = useState({})
 
    var [userupdatemodal,Setuserupdatemodal]= useState(false)
    var userdataedit=(rowdata)=>{
        Setuserupdatemodal(true);
        Setcurrentusereditdata(rowdata);

       
      }
      var closeuserupdatemodal=()=>{
        Setuserupdatemodal(false);
      }

      var userstatusupdate=(e)=>{
        console.log(e.target.value)
        var name = e.target.name
        if(name==="status"){
            currentusereditdata.userStatus =e.target.value;

        }
        Setcurrentusereditdata({...currentusereditdata})
        console.log(currentusereditdata)
      }
      var userstatusapicall=(e)=>{

        var userdata={
            _id:currentusereditdata._id,
            status:currentusereditdata.userStatus,
        }

    e.preventDefault();
        updateuserstatus(userdata).then((res)=>{
            if(res.status==200){
            console.log("user status updated")
            Setuserupdatemodal(false)
           
            }
       

        })
        .catch((e)=>{
            console.log("hello")
            console.log(e.message)
        })
      }

      return [userdataedit,closeuserupdatemodal,userstatusupdate,userstatusapicall,userupdatemodal,currentusereditdata]


}

export default Updateuserhook;