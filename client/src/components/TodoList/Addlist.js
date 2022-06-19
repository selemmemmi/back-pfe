import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../JS/actions/task.js";
import "./style.css";

const Addlist = ({ IDClient}) => {
  const dispatch = useDispatch ()
  const [item, setItem] = useState({IDClient:IDClient});
  const handleChange = (e) => {
    setItem({...item , [e.target.name] : e.target.value});
  };
  console.log(item)
  const handelTask=()=>{
    dispatch(addTask(item))
  }

  return (
    <div className="input-box">
      <TextField
      name="name"
        id="outlined-basic"
        label="Add"
        variant="outlined"
        placeholder="Add To Do"
        onChange={handleChange}
        
      />
      <Button
        variant="contained"
        onClick={handelTask}
      >
        Add
      </Button>
    </div>
  );
};

export default Addlist;
