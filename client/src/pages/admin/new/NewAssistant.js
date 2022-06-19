import "./new.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/NavBaAdmin/NavBar";
import { useState } from "react";
import {  editClient, getClient } from "../../../JS/actions/clients";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, CircularProgress } from "@mui/material";
import { addAssistant, editAssisstant, getAssistant } from "../../../JS/actions/assistants";




const NewAssistant = ({ inputs, title }) => {

  const AssistantToEdit = useSelector((state) => state.assisstantReducers.assistant); 
  const isLoad = useSelector((state) => state.clientReducers.isLoad );
  const isError = useSelector((state) => state.clientReducers.isError );
  const navigate= useNavigate();
  const dispatch = useDispatch() ;
  const params = useParams();
  console.log(isLoad)
  console.log(isError)
  const [Client, setClient] = useState({});
  const [edit, setedit] = useState(false);

useEffect(() => {
  if(params.id){
    dispatch(getAssistant(params.id));
  }
  
  
}, []);
useEffect(() => {

  if(params.id){
    setedit(true)
  }else{ 
    setedit(false)
  }
  edit ? setClient(AssistantToEdit) : setClient({name:"",phone:"",email:"", poste:"",}) ;
}, [params,edit , AssistantToEdit])
 
console.log(Client)
console.log(edit)

const handelChange = (e) =>{
  setClient({ ...Client, [e.target.name] : e.target.value });
}

const handeluser = () =>{  
  const result = window.confirm(edit ? "are you sure to modif that ?":"are you sure to save that ?")
  if (result){
      if(edit){
          dispatch(editAssisstant(params.id,Client ,navigate))
      }else{
          dispatch(addAssistant(Client));
      }
      setClient({name:"",phone:"",email:"", poste:"",})
  }
  
}

  return (
    <div className="new">
      <Sidebar role={true}/>
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          
          <div className="right">
            <form>
              <div className="formInput">

                <input
                  type="file"
                  id="file"
                  
                  style={{ display: "none" }}
                />
              </div>
             
                {false?(<Box sx={{ display: 'flex' }}>
              <CircularProgress />
              </Box>)
              :isError?<p>Errer to Edit the assistant ? </p>
              :(<>
                  <div className="formInput" key="1">
                      <label>Username</label>
                      <input type="text" name="name" placeholder="Name and surname" onChange={handelChange}  value={(Client.name)}/>
                </div>
                <div className="formInput" key="2">
                      <label>Email</label>
                      <input type="mail" name="email" placeholder="john_doe@gmail.com" onChange={handelChange}  value={(Client.email)}/>
                </div>
                <div className="formInput" key="3">
                      <label>Phone</label>
                      <input type="Number" name="phone" placeholder="+1 234 567 89" onChange={handelChange}  value={(Client.phone)}/>
                </div>
                <div className="formInput" key="4">
                      <label>Poste</label>
                      <input type="text" name="poste" placeholder="Poste" onChange={handelChange}  value={(Client.poste)}/>
                </div>
                </>)}
             
               
              <button onClick={handeluser}><a href="/admin" style={{textDecoration:'none'}}>Send</a> </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAssistant;
