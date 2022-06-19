import { GET_ASSISTANTS_LOAD, GET_ASSISTANTS_SUCCESS, GET_ASSISTANTS_FAIL, GET_ASSISTANT_SUCCESS} from '../constants/clients'
import axios from 'axios' ;
import { Navigate } from 'react-router-dom';


export const addAssistant = (newAssistant) => async(dispatch)=>{
    dispatch ({ type :GET_ASSISTANTS_LOAD  })
    try {
        await axios.post("/api/Assistant/AddAssistants" , newAssistant)
        dispatch (getAllAssistant())
        Navigate("/contacts")
    } catch (error) {
        dispatch({ type :GET_ASSISTANTS_FAIL  })
    }

}


export const getAllAssistant=()=> async(dispatch)=>{
    dispatch ({ type :GET_ASSISTANTS_LOAD  })
    try {
       let result = await axios.get("/api/Assistant/AllAssistants");
       // if i send an http request 
       //result chikon feha
       // { status : "", headers:"" , data }
        dispatch({
            type :GET_ASSISTANTS_SUCCESS ,
            payload : result.data , //{msg , Assistantslist }
        });
    } catch (error) {
        dispatch ({ type :GET_ASSISTANTS_FAIL  })
    }
}

export const getAssistant =(id)=> async(dispatch)=>{
    dispatch ({ type :GET_ASSISTANTS_LOAD  })
    try {
        let result = await axios.get(`/api/Assistant/getOne/${id}`)
        dispatch ({ type:GET_ASSISTANT_SUCCESS , payload:result.data}) //payloat: {msg , findAssistant}
    } catch (error) {
        dispatch({ type :GET_ASSISTANTS_FAIL  })
    }

}


export const editAssisstant =(id,editAssistant,navigate)=>async(dispatch)=> {
    dispatch ({ type :GET_ASSISTANTS_LOAD  })
    try {
        await axios.put(`/api/Assistant/update/${id}`,editAssistant)
        dispatch (getAssistant(id))
        alert("Assistant updated")
        Navigate(`/admin`)
    } catch (error) {
        dispatch({ type :GET_ASSISTANTS_FAIL  })
    }
}