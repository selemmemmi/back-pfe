import { GET_CLIENTS_SUCCESS ,GET_CLIENTS_LOAD ,GET_CLIENTS_FAIL, GET_CLIENT_SUCCESS, LOGIN_USER} from "../constants/clients"


const initialState={
     clients:[],
     isLoad:false,
     isError:false,
     client:{},
};
console.log(initialState.client)

const clientReducers = ( state = initialState , { type , payload })=>{
        switch (type) {
            case GET_CLIENTS_SUCCESS:
                // if type howa get client success=> payload :{msg , clientlist:[{} , {}]}
                return {...state , clients: payload.clientlist ,isLoad:false ,isError: false};
            case GET_CLIENTS_LOAD:
                return {...state ,isLoad: true }
            case GET_CLIENTS_FAIL:
                return {...state ,isError: true ,isLoad:false }
            case GET_CLIENT_SUCCESS:
                // if type howa get client success=> payload :{msg , findClient:{} }
                return {...state,client: payload.findClient , idLoad: false }
            case LOGIN_USER:
                return {...state,isLoad: false,client: payload.user,isError: false,
                }
            default:
                return state;
        }

}
export default clientReducers ;