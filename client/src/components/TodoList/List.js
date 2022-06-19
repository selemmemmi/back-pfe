import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteTask } from "../../JS/actions/task";


export default function BasicTable({ Liste ,IDClient ,deletState  }) {
  const dispatch = useDispatch()
  const tasklist = useSelector((state) => state.taskReducers.tasklist); 
  console.log(Liste)
  console.log(IDClient)
const hundeldelete = (id)=>{
  dispatch(deleteTask(id))
  console.log(id)
}
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Liste.map((item ,index) => ((item.IDClient===IDClient?<TableRow
                key={item}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="item">
                  {item.name}
                </TableCell>
                <TableCell align="right">
                  <Button variant="outlined" startIcon={<DeleteIcon />} onClick={()=>hundeldelete(item._id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>:null)
              
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
