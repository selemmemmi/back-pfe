import express from 'express';
import 'dotenv/config';
import connectDB from './config/connectDB.js';
import routerClient from './router/Client.js';
import routerAssistant from './router/assistants.js';
import routertask from './router/task.js';
import bodyParser from 'body-Parser';
import routerAuth from './router/Auth.js'; 
import routerformulair from './router/formulaire.js';

const app =express()

//creat a server PORT
const PORT =process.env.PORT;
//*********************************************************

//call function that connect with the database
connectDB();

 

//middleware to read the json type
app.use(bodyParser.json());

// // middleware for client API
app.use("/api/Auth",routerAuth);

// middleware for client API
app.use("/api/Client",routerClient);

// middleware for Assistant API
app.use("/api/Assistant",routerAssistant);

// middleware for task API
app.use("/api/task",routertask);

//middleware for formulair API
app.use("/api/formulair",routerformulair);

// create server 
app.listen(PORT,(err)=>err?console.log(err):console.log(`serve is runnig in port ${PORT}`))