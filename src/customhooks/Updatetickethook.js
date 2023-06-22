import { useState } from "react";
import { updateticketdetails } from "../apis/ticket";



const Updatetickethook=(fetchtickets)=>{
    var [currentticket,Setcurrentticketdetail]=useState({})
    var [ticketupdatemodal,Setticketupdatemodal]= useState(false);
    var setrowdata=(rowdata)=>{
      console.log(rowdata)
      Setticketupdatemodal(true)
      Setcurrentticketdetail(rowdata)
     
  
  }
  
  var editticket=(e)=>{
  
      var name = e.target.name;
  
      console.log(name)
  
      if(name==="title"){
          
          currentticket.title=e.target.value
      }
      else if(name==="description"){
          currentticket.description=e.target.value
      }
  
      else if(name==="status"){
          currentticket.status=e.target.value
      }
      else if(name==="assignee"){
          currentticket.assignee=e.target.value
      }
      else if(name==="ticketPriority"){
          currentticket.ticketPriority=e.target.value
      }
      
     Setcurrentticketdetail({...currentticket})
  
      
  
  }
   var closeeditticketmodal=()=>{
      Setticketupdatemodal(false);
   }
      var editticketdetails=(e)=>{
  
          e.preventDefault();
          updateticketdetails(currentticket)
          .then(()=>{
              console.log("ticket is updated")
              Setticketupdatemodal(false)
              fetchtickets()
             
  
  
          })
  
          .catch((e)=>{
              console.log(e)
  
          }  
          )
        }
        return [editticketdetails,closeeditticketmodal,editticket,setrowdata,ticketupdatemodal,currentticket]
  
  }

  export default Updatetickethook;