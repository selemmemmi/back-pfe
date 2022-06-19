import { GET_CLIENTS_SUCCESS , GET_CLIENTS_LOAD , GET_CLIENTS_FAIL, GET_CLIENT_SUCCESS} from '../constants/clients'

import axios from 'axios' ;
import { Navigate } from 'react-router-dom';


export const addContact = (newContact) => async(dispatch)=>{
    dispatch ({ type :GET_CLIENTS_LOAD  })
    try {
        await axios.post("/api/Client/AddClient" , newContact)
        dispatch (getAllClients())
        Navigate("/contacts")
    } catch (error) {
        dispatch({ type :GET_CLIENTS_FAIL  })
    }

}


export const getAllClients=()=> async(dispatch)=>{
    dispatch ({ type :GET_CLIENTS_LOAD  })
    try {
       let result = await axios.get("/api/Client/AllClients");
       // if i send an http request 
       //result chikon feha
       // { status : "", headers:"" , data }
        dispatch({
            type :GET_CLIENTS_SUCCESS ,
            payload : result.data , //{msg , clientlist }
        });
    } catch (error) {
        dispatch ({ type :GET_CLIENTS_FAIL  })
    }
}

export const getClient =(id)=> async(dispatch)=>{
    dispatch ({ type :GET_CLIENTS_LOAD  })
    try {
        let result = await axios.get(`/api/Client/getOne/${id}`)
        dispatch ({ type:GET_CLIENT_SUCCESS , payload:result.data}) //payloat: {msg , findClient}
    } catch (error) {
        dispatch({ type :GET_CLIENTS_FAIL  })
    }

}


export const editClient =(id,editContact,navigate)=>async(dispatch)=> {
    dispatch ({ type :GET_CLIENTS_LOAD  })
    try {
        await axios.put(`/api/Client/update/${id}`,editContact)
        dispatch (getClient(id))
        alert("Client updated")
        navigate(`/admin/users/:${id}`)
    } catch (error) {
        dispatch({ type :GET_CLIENTS_FAIL  })
    }
}
