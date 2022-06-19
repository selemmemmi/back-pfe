import axios from 'axios' ;
import { GET_FORMULAIRES_FAIL, GET_FORMULAIRES_LOAD, GET_FORMULAIRES_SUCCESS } from '../constants/clients';



export const getAllFormlaire=()=> async(dispatch)=>{
    dispatch ({ type :GET_FORMULAIRES_LOAD  })
    try {
       let result = await axios.get("/api/formulair/AllFormulaire");
       // if i send an http request 
       //result chikon feha
       // { status : "", headers:"" , data }
        dispatch({
            type :GET_FORMULAIRES_SUCCESS ,
            payload : result.data , //{msg , Formulairelist }
        });
    } catch (error) {
        dispatch ({ type :GET_FORMULAIRES_FAIL  })
    }
}

export const addformulaire = (newFormulaire) => async(dispatch)=>{
    dispatch ({ type :GET_FORMULAIRES_LOAD  })
    try {
        await axios.post("/api/formulair/envoyeFormulaire" , newFormulaire)
        dispatch (getAllFormlaire())
    } catch (error) {
        dispatch({ type :GET_FORMULAIRES_FAIL  })
    }

}