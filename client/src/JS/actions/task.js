import { GET_TASKS_SUCCESS, GET_TASK_SUCCESS, GET_TASKS_LOAD, GET_TASKS_FAIL} from '../constants/clients'
import axios from 'axios' ;



export const addTask = (newTask) => async(dispatch)=>{
    dispatch ({ type :GET_TASKS_LOAD  })
    try {
        await axios.post("/api/task/AddTask" , newTask)
        dispatch (getAllTasks())
 
    } catch (error) {
        dispatch({ type :GET_TASKS_FAIL  })
    }

}


export const getAllTasks=()=> async(dispatch)=>{
    dispatch ({ type :GET_TASKS_LOAD  })
    try {
       let result = await axios.get("/api/task/AllTasks");
       // if i send an http request 
       //result chikon feha
       // { status : "", headers:"" , data }
        dispatch({
            type :GET_TASKS_SUCCESS ,
            payload : result.data , //{msg , tasktlist }
        });
    } catch (error) {
        dispatch ({ type :GET_TASKS_FAIL  })
    }
}
export const deleteTask =(id)=>async(dispatch) =>{
    dispatch ({ type :GET_TASKS_LOAD  })
    try {
       await  axios.delete(`/api/task/deleteTask/${id}`);
        dispatch (getAllTasks())
    } catch (error) {
        dispatch({type:GET_TASKS_FAIL})
    }
}