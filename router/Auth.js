import express from "express";
import Client from "../models/Client.js" ;
import jwt from "jsonwebtoken"
const router=express.Router();

router.post("/test",async(req,res)=>{
    console.log(req.body)
    return res.json({msg:"HELLO WORD "})
     
})
router.post("/Login",(req, res, next) => {
    console.log(req.body)
    const email = req.body.email;
    const password = req.body.password;

    const query = { email }
        //Check the user exists
        
        Client.findOne({email:req.body.email},async(err, user) => {
            const searchUser = await Client.findOne({ email });
        //Error during exuting the query
        if (err) {
            return res.send({
                success: false,
                message: 'Error, please try again'
            });
        }

        //No User match the search condition
        if (!user) {
            return res.send({
                success: false,
                message: 'Error, Account not found'
            });
        }
        console.log(user.password)
        //Check if the password is correct
        // user.isPasswordMatch(password, user.password, (err, isMatch) => {
        //     console.log(password)
        //     //Invalid password

        //     if (!isMatch) {
        //         return res.status(400).send({
        //             success: false,
        //             message: 'Error, Invalid Password'
        //         });
        //     }
        
            if(password===user.password){
                return res.send({
                    success: true,
                    message: 'secc ',
                    user : searchUser 

                })
            }else{
                return res.send({
                    success: false,
                     message: 'Error, Invalid Password'
                })
            }
            //User is Valid

            const ONE_WEEK = 604800; //Token validtity in seconds

            //Generating the token
            const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: ONE_WEEK });
            // console.log(token)
                //console.log( jwt.decode(token))
                //User Is Valid
                //This object is just used to remove the password from the returned fields
            let returnUser = {
                name: user.name,
                email: user.email,
                id: user._id, 
            }
            user.password=""
            //Send the response back
            return res.status(200).send({
                success: true,
                message: 'You are logged in now',
                user,
                token
            });
        });

    });


export default router;