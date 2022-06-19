import express from "express";
import Client from "../models/Client.js";
import Formulair from "../models/Formulaire.js";


const router=express.Router();


//**************************************** *//

// create => POST ()
// 0Route Add Client
// 0 Method POST
// àdata : req.body
// pATH : HTTP:/localhost:5000/api/formulair/envoyeFormulaire
router.post("/envoyeFormulaire",async (req,res)=>{

    try {
        // new Formulaire 
        // save it in database
        const newFormulaire= new Formulair({...req.body});
        await newFormulaire.save();
        //send success
        res.send({msg:"add route", newFormulaire});
    } catch (error) {
        res.status(400).send({msg:"Client not saved", error});
    }
})


// create => GET ()
// 0Route GET All Client
// @ Method GET
// @data : 
// PATH : HTTP:/localhost:5000/api/formulair/AllFormulaire

router.get("/AllFormulaire",async (req,res)=>{
    try {
        const Formulairelist = await Formulair.find();
        res.send({Formulairelist , msg :"get all Formulaire"})
    } catch (error) {
        res.status(400).send({msg:"can not get ", error})
    }

})







export default router;