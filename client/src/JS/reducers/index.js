import  {combineReducers} from 'redux' ;
import clientReducers from "./clients";
import assisstantReducers from "./assisstants.js";
import taskReducers from "./tasks.js";
import formulaireReducers from "./formulaire.js";




const rootReducer = combineReducers ({ clientReducers , assisstantReducers,taskReducers,formulaireReducers})

export default  rootReducer ;