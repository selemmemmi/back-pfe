import { Box, CircularProgress } from '@mui/material';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Addlist from './Addlist';
import List from './List';

function TodoList({add,IDClient}) {
  const params = useParams();
    const dispatch = useDispatch ()
    const tasklist = useSelector((state) => state.taskReducers.tasklist); 
    const isLoad = useSelector((state) => state.taskReducers.isLoad );
    const isError = useSelector((state) => state.taskReducers.isError );

    const [Liste, setListe] = useState(tasklist)
      useEffect(() => {
        setListe(tasklist)
      }, [isLoad])
      

    const deletState = (index) =>{
     
      setListe(Liste.filter((el,i)=> i!==index) )
    };
  return (<> 
  {add?<Addlist IDClient={IDClient}/>:null}
    
    <div className="add-box"> 
    {isLoad?<Box sx={{ display: 'flex' }}>  
              <CircularProgress />
              </Box>
              :isError?<p>Errer to get the  client </p>
              :<List Liste={Liste} IDClient={IDClient} deletState={deletState}/>}
    </div>
    </>
  )
}

export default TodoList