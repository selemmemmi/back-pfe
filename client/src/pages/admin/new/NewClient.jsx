import "./new.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/NavBaAdmin/NavBar";
import { useState } from "react";
import { addContact, editClient, getClient } from "../../../JS/actions/clients";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, CircularProgress } from "@mui/material";




const New = ({ inputs, title }) => {

  const ClientToEdit = useSelector((state) => state.clientReducers.client); 
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
    dispatch(getClient(params.id));
  }
  
  
}, []);
useEffect(() => {

  if(params.id){
    setedit(true)
  }else{ 
    setedit(false)
  }
  edit ? setClient(ClientToEdit) : setClient({name:"",phone:"",email:"", adress:"",password:"",projet:"",country:"",avancement:"",}) ;
}, [params,edit , ClientToEdit])
 
console.log(ClientToEdit)
console.log(edit)

const handelChange = (e) =>{
  setClient({ ...Client, [e.target.name] : e.target.value });
}

const handeluser = () =>{  
  const result = window.confirm(edit ? "are you sure to modif that ?":"are you sure to save that ?")
  if (result){
      if(edit){
          dispatch(editClient(params.id,Client ,navigate))
      }else{
          dispatch(addContact(Client ));
      }
      setClient({name:"",phone:"",email:"", adress:"",password:"",projet:"",country:"",avancement:""})
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
              :isError?<p>Errer to Edit the client </p>
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
                      <label>Password</label>
                      <input type="password" name="password" placeholder="password" onChange={handelChange}  value={(Client.password)}/>
                </div>
                <div className="formInput" key="5">
                      <label>Address</label>
                      <input type="text" name="adress" placeholder="Elton St. 216 NewYork" onChange={handelChange}  value={(Client.adress)}/>
                </div>
                <div className="formInput" key="6">
                      <label>type de projet</label>
                      <input type="text" name="projet" placeholder="web / mobile / ..." onChange={handelChange}  value={(Client.projet)}/>
                </div>
                <div className="formInput" key="7">
                      <label>Country</label>
                      <input type="text" name="country" placeholder="USA" onChange={handelChange}  value={(Client.country)}/>
                </div>
                <div className="formInput" key="8">
                      <label>Avancement</label>
                      <input type="Number" name="avancement" placeholder="avancement de projet 100%" onChange={handelChange}  value={Client.avancement}/>
                </div>
                </>)}
             
               
              <button onClick={handeluser}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
