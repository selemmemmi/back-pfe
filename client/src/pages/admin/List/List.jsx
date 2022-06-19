import "./list.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/NavBaAdmin/NavBar"
import Datatable from "../../../components/datatable/Datatable"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getAllClients } from "../../../JS/actions/clients"
import { Box, CircularProgress } from "@mui/material"
import { getAllTasks } from "../../../JS/actions/task"


const List = () => {
 
  const clients = useSelector((state)=> state.clientReducers.clients);
  const isLoad = useSelector((state) => state.clientReducers.isLoad );
  const isError = useSelector((state) => state.clientReducers.isError );


  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getAllClients()) 
      dispatch(getAllTasks())
  }, [])
  return (
    <div className="list">
      <Sidebar role={true}/>
      <div className="listContainer">
        <Navbar/>
        {isLoad?<Box sx={{ display: 'flex' }}>
        <CircularProgress />
        </Box>:isError?<p>Errer to get the  client </p>:<Datatable clients={clients}/>}
      </div>
    </div>
  )
}

export default List