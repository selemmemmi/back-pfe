
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/NavBaAdmin/NavBar"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getAllAssistant } from "../../../JS/actions/assistants"
import { useEffect } from "react"
import { Box, CircularProgress } from "@mui/material"
import OutlinedCard from "../../../components/FormCard"
import { getAllFormlaire } from "../../../JS/actions/formulaire"


const Formulaire = () => {

  const formulaires = useSelector((state)=> state.formulaireReducers.formulaires);
  const isLoad = useSelector((state) => state.formulaireReducers.isLoad );
  const isError = useSelector((state) => state.formulaireReducers.isError );
  

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getAllFormlaire())
  }, [])
  console.log(formulaires)

  return (
    <div className="list">
      <Sidebar role={true}/>
      <div className="listContainer">
        <Navbar/>
        {isLoad?<Box sx={{ display: 'flex' }}>
        <CircularProgress />
        </Box>:isError?<p>Errer to get the  client </p>:<OutlinedCard formulaires={formulaires}/>}
      </div>
    </div>
  )
}

export default Formulaire