import {GET_TASKS_SUCCESS, GET_TASKS_LOAD, GET_TASKS_FAIL, GET_TASK_SUCCESS} from "../constants/clients"


const initialState={
     tasklist:[],
     isLoad:false,
     isError:false,
     assistant:[],
};


const taskReducers = ( state = initialState , { type , payload })=>{
        switch (type) {
            case GET_TASKS_SUCCESS:
                // if type howa get Assistant success=> payload :{msg , tasktlist:[{} , {}]}
                return {...state , tasklist: payload.tasktlist ,isLoad:false ,isError: false};
            case GET_TASKS_LOAD:
                return {...state ,isLoad: true }
            case GET_TASKS_FAIL:
                return {...state ,isError: true ,isLoad:false }
            case GET_TASK_SUCCESS:
                // if type howa get Assistant success=> payload :{msg , findAssistant:{} }
                return {...state,tasklist: payload.findAssistant , idLoad: false }
            default:
                return state;
        }
}
export default taskReducers ;