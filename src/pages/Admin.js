import Sidebar from "../components/Sidebar"
import Updatetickethook from "../customhooks/Updatetickethook"

import { useEffect, useState } from "react";
import MaterialTable from 'material-table'
import { ThemeProvider, createTheme } from '@mui/material';
import { getallusers,updateuserstatus } from "../apis/users";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Fetchtickethook from "../customhooks/Fetchtickethook";
import Status from "../components/Status";
import Getusershook from "../customhooks/Getusershook";
import Updateuserhook from "../customhooks/Updateuserhook";



function Admin(){

    const [ticketdata,fetchtickets]=Fetchtickethook()
    const [editticketdetails,closeeditticketmodal,editticket,setrowdata,ticketupdatemodal,currentticket]= Updatetickethook(fetchtickets)
    const [userdata,getalluserdetails]= Getusershook();
    const [userdataedit,closeuserupdatemodal,userstatusupdate,userstatusapicall,userupdatemodal,currentusereditdata] = Updateuserhook()
    

    
    const defaultMaterialTheme = createTheme();




 




 

 
 
 





 



    return (
        
        <div className="row bg-light" >

              <div className="col-1">
      
                <Sidebar/>
           
                  </div>
            <div className="col  my-4">
                <Status ticketdetails={ticketdata} />

               
                        <br />
                        <div style={{ maxWidth: '100%' }}>
            <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialTable
          onRowClick ={(e,rowdata)=>{userdataedit(rowdata)}} 
          columns={[
            { title: 'USER_ID', field: 'userId' },
            { title: 'NAME', field: 'name' },
            { title: 'EMAIL', field: 'email'},
            { title: 'ROLE', field: 'userTypes' },
            { title: 'STATUS', field: 'userStatus' },
          ]}
          data={userdata}
          
          title="Customer Details"
        />
        </ThemeProvider>
        <Modal
        show={userupdatemodal}
        onHide={closeuserupdatemodal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update user status</Modal.Title>
        
    

        </Modal.Header>
        <Modal.Body>
      
        <form onSubmit={userstatusapicall}>
        <p>id : {currentusereditdata._id}
        </p>
       

       <label>name</label> <input className="input-group" disabled name="name" value={currentusereditdata.name} ></input>
       <label>userID</label> <textarea className="input-group" disabled name="userID" value={currentusereditdata.userId} ></textarea>
       <label>email</label> <input className="input-group"disabled name="email" value={currentusereditdata.email} ></input>
       <label>userStatus</label> <select className="input-select" name="status" value={currentusereditdata.userStatus}  onChange={userstatusupdate}>
        <option>PENDING</option>
        <option>BLOCKED</option>
        <option>APPROVED</option>
        <option>REJECTED</option>   </select><br />
    
       <label>userTypes</label> <input className="input-group" disabled name="userTypes" value={currentusereditdata.userTypes} ></input>
       <Button variant="secondary" onClick={closeuserupdatemodal} >
            Close
          </Button>
          <Button type="submit" variant="primary">Update</Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      
      </Modal>

        
      </div>
      <hr />
                         <div style={{ maxWidth: '100%' }}>
      <ThemeProvider theme={defaultMaterialTheme}>
        
        <MaterialTable
        onRowClick = {(e,rowdata)=>{setrowdata(rowdata)}}
          columns={[
            { title: 'TICKET ID', field: '_id' },
            { title: 'TITLE', field: 'title' },
            { title: 'DESCRIPTION', field: 'description' },
            { title: 'REQUESTOR', field: 'requestor' },
            { title: 'PRIORITY', field: 'ticketPriority' },
            { title: 'ASSIGNEE', field: 'assignee' },
            { title: 'STATUS', field: 'status' },

          ]}
          data={ticketdata}

          title="TICKET RECORDS"

               
        />
         </ThemeProvider>
         <Modal
        show={ticketupdatemodal}
        onHide={closeeditticketmodal}
       
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update ticket details</Modal.Title>
        
    

        </Modal.Header>
        <Modal.Body>
      
        <form onSubmit={editticketdetails}>
        <p>id : {currentticket._id}
        </p>
       

       <label>title</label> <input className="input-group" name="title" value={currentticket.title} onChange={editticket}></input>
       <label>description</label> <textarea className="input-group" name="description" value={currentticket.description} onChange={editticket}></textarea>
       <label>status</label> <input className="input-group" name="status" value={currentticket.status} onChange={editticket}></input>
       <label>assignee</label> <input className="input-group" name="assignee" value={currentticket.assignee} onChange={editticket}></input>
       <label>ticketPriority</label> <input className="input-group" name="ticketPriority" value={currentticket.ticketPriority} onChange={editticket}></input>
       <Button variant="secondary" onClick={closeeditticketmodal} >
            Close
          </Button>
          <Button type="submit" variant="primary">Update</Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      
      </Modal>

      </div>
        
 
 
     


                   

  </div>
                

            </div>
            
            
            
      
    
   
          

 
    
    

        

        
      
    )
}


export default Admin