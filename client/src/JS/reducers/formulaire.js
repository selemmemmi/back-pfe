import {GET_FORMULAIRES_SUCCESS, GET_FORMULAIRES_LOAD, GET_FORMULAIRE_SUCCESS, GET_FORMULAIRES_FAIL} from "../constants/clients"


const initialState={
     formulaires:[],
     isLoad:false,
     isError:false,
     formulaire:[],
};


const formulaireReducers = ( state = initialState , { type , payload })=>{
        switch (type) {
            case GET_FORMULAIRES_SUCCESS:
                // if type howa get formulaire success=> payload :{msg , Formulairelist:[{} , {}]}
                return {...state , formulaires: payload.Formulairelist ,isLoad:false ,isError: false};
            case GET_FORMULAIRES_LOAD:
                return {...state ,isLoad: true }
            case GET_FORMULAIRE_SUCCESS:
                return {...state ,isError: true ,isLoad:false }
            case GET_FORMULAIRES_FAIL:
                // if type howa get formulaire success=> payload :{msg , Formulairelist:{} }
                return {...state,formulaire: payload.findAssistant , idLoad: false }
            default:
                return state;
        }

}
export default formulaireReducers ;