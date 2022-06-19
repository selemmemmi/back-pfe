import React from 'react'
import "./home.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/NavBaAdmin/NavBar"
import Widget from '../../../components/widget/Widget';
import Featured from '../../../components/featured/Featured';
import Chart from "../../../components/chart/Chart";
import Table from "../../../components/table/Table";
import Datatable from '../../../components/datatable/Datatable';
import { useDispatch } from 'react-redux';
import { getAllClients } from '../../../JS/actions/clients';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Home = () => {
  const clients = useSelector(state=> state.clientReducers.clients)
  const isLoad = useSelector((state) => state.clientReducers.isLoad );
  const isError = useSelector((state) => state.clientReducers.isError );

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllClients())
  
  }, [])
  

    return (
      <div className="home">
        <Sidebar role={true}/>
        <div className="homeContainer">
          <Navbar />
          
          <div className="charts">
            <Featured />
            <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            {isLoad?<Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>:isError?<p>Errer to get the  client </p>:<Datatable clients={clients}/>}
          </div>
        </div>
      </div>
    );
}

export default Home