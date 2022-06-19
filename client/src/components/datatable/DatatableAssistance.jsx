import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { assistanceColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAssistant } from "../../JS/actions/assistants";

const DatatableAssistance = ({assistants}) => {

  const dispatch = useDispatch ()
  
 
  const handelAssistant =(id)=> {
    dispatch(getAssistant(id))
  }

  const [data, setData] = useState(assistants.map((el)=>({name:el.name,id:el._id,poste:el.poste,email:el.email,})));
  console.log(data)
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
            <Link to={`/admin/assistance/:${params.id}`} style={{ textDecoration: "none" }}>
              <button className="viewButton" onClick={()=>handelAssistant(params.id)}>View</button>
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
        Add New assistance
        <Link to="/admin/assistance/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={assistanceColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DatatableAssistance;
