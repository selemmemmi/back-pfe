import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { getClient } from "../../JS/actions/clients";
import { useDispatch } from "react-redux";
import { getAllTasks } from "../../JS/actions/task";

const Datatable = ({clients}) => {
  const dispatch = useDispatch ()
  
 
  const handelClient =(id)=> {
    dispatch(getClient(id))
    dispatch(getAllTasks())
  }


const [data, setData] = useState(clients.map((el)=>({username:el.name,id:el._id,projet:el.projet,email:el.email,avancement:el.avancement})));
   
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/admin/users/:${params.id}`} style={{ textDecoration: "none" }}>
              <button className="viewButton" onClick={()=>handelClient(params.id)}>View</button>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      
      <div className="datatableTitle">
            Add New client
            <Link to="/admin/users/new" className="link">
              Add New
            </Link>
        </div> 
  
      
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
