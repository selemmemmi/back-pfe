import "./assistance.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/NavBaAdmin/NavBar"
import DatatableAssistance from "../../../components/datatable/DatatableAssistance"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getAllAssistant } from "../../../JS/actions/assistants"
import { useEffect } from "react"
import { Box, CircularProgress } from "@mui/material"
import Datatable from "../../../components/datatable/Datatable"

const Assistance = () => {

  const assistants = useSelector((state)=> state.assisstantReducers.assistants);
  const isLoad = useSelector((state) => state.clientReducers.isLoad );
  const isError = useSelector((state) => state.clientReducers.isError );
  

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getAllAssistant())
  }, [])

  return (
    <div className="list">
      <Sidebar role={true}/>
      <div className="listContainer">
        <Navbar/>
        {isLoad?<Box sx={{ display: 'flex' }}>
        <CircularProgress />
        </Box>:isError?<p>Errer to get the  client </p>:<DatatableAssistance assistants={assistants}/>}
      </div>
    </div>
  )
}

export default Assistance