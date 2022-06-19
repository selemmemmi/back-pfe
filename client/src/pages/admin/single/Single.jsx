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
import { useParams } from "react-router-dom";




const Single = () => {
  const dispatch = useDispatch ()
  const params = useParams();
  const clientdata = useSelector((state) => state.clientReducers.client); 
  const isLoad = useSelector((state) => state.clientReducers.isLoad );
  const isError = useSelector((state) => state.clientReducers.isError );

  const handelContact =()=> {
    dispatch(getClient(clientdata._id))
}


console.log(params.userId)




  return (
    <div className="single">
      <Sidebar role={true}/>
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <Button className="editButton" onClick={handelContact}><a href={`Edit/${clientdata._id}`} style={{textDecoration:'none'}}>Edit</a></Button>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              {!isLoad?<Box sx={{ display: 'flex' }}>
              <CircularProgress />
              </Box>
              :isError?<p>Errer to get the  client </p>
              :<div className="details">
                <h1 className="itemTitle">{clientdata.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{clientdata.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{clientdata.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    {clientdata.adress}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{clientdata.country}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Type de projet:</span>
                  <span className="itemValue">{clientdata.projet}</span>
                </div>
              </div>}
               
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="projet Spending ( Last 6 Months)" />
          </div>
          
        </div>
        
        <div className="bottom">
            <TodoList add={true} IDClient={params.userId}/>
        </div>
        <div className="bottom">
          <h1 className="title">messages</h1>
          <Message /> 
        </div>
        
       
      </div>
    </div>
  );
};

export default Single;
