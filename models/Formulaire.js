import mongoose from "mongoose";
const {Schema} = mongoose ;
//model or we call it the client schema ==structure
const FormulaireSchema = new Schema({
    Mail: {
        type: String,
        required: true,
      },
      Message : {
        type: String,
        required:true,
      },
      Prénom: {
        type: String,
        required: true,
      },
      destinataire: {
        type: String,
        required: false,
      },
      Tél: {
        type: Number,
        required: true,
      },/*,
      avancement: {
        type: Number,
        required: true,
      },*/
    });
const Formulair = mongoose.model("Formulair", FormulaireSchema);
export default Formulair ; 