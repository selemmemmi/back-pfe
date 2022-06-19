import {GET_ASSISTANTS_SUCCESS, GET_ASSISTANTS_LOAD, GET_ASSISTANTS_FAIL, GET_ASSISTANT_SUCCESS} from "../constants/clients"


const initialState={
     assistants:[],
     isLoad:false,
     isError:false,
     assistant:[],
};
console.log(initialState.assistant)

const assisstantReducers = ( state = initialState , { type , payload })=>{
        switch (type) {
            case GET_ASSISTANTS_SUCCESS:
                // if type howa get Assistant success=> payload :{msg , Assistantslist:[{} , {}]}
                return {...state , assistants: payload.Assistantslist ,isLoad:false ,isError: false};
            case GET_ASSISTANTS_LOAD:
                return {...state ,isLoad: true }
            case GET_ASSISTANTS_FAIL:
                return {...state ,isError: true ,isLoad:false }
            case GET_ASSISTANT_SUCCESS:
                // if type howa get Assistant success=> payload :{msg , findAssistant:{} }
                return {...state,assistant: payload.findAssistant , idLoad: false }
            default:
                return state;
        }

}
export default assisstantReducers ;