import "./single.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/NavBaAdmin/NavBar";
import Chart from "../../../components/chart/Chart";
import Message from "../../../components/messeage/Message";
import TodoList from '../../../components/TodoList/TodoList'
import { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Button, CircularProgress } from "@mui/material";
import { getClient } from "../../../JS/actions/clients";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAssistant } from "../../../JS/actions/assistants";




const SingleAssistant = () => {
  const dispatch = useDispatch ()
  const assistantdata = useSelector((state) => state.assisstantReducers.assistant);
  const clientdata = useSelector((state) => state.clientReducers.client); 
  const isLoad = useSelector((state) => state.clientReducers.isLoad );
  const isError = useSelector((state) => state.clientReducers.isError );

  const handelAssistant =()=> {
    dispatch(getAssistant(assistantdata._id))
}
const [Client, setClient] = useState()
console.log(assistantdata)






  return (
    <div className="single">
      <Sidebar role={true}/>
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <Button className="editButton" onClick={handelAssistant}><a href={`Edit/${assistantdata._id}`} style={{textDecoration:'none'}}>Edit</a></Button>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              {isLoad?<Box sx={{ display: 'flex' }}>
              <CircularProgress />
              </Box>
              :isError?<p>Errer to get the  client </p>
              :<div className="details">
                <h1 className="itemTitle">{assistantdata.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{assistantdata.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{assistantdata.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Poste : </span>
                  <span className="itemValue">
                    {assistantdata.poste}
                  </span>
                </div>
              
              
              </div>}
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAssistant;
