import express from "express";
import models from './models/index';

import connectWithDb from "./mongo";

const app = express();
const port = 3000;
app.use(express.json());



connectWithDb();


app.get('/',(req,res)=>{
    res.send('Hello world ' + req.query.id);
});

const log = (message) =>console.log(message)
app.post('/',(req,res)=>{
    const body = req.body;
    const user = new models.User({
        username:body.username,
        createdAt:new Date()
    })
   user.save().then((result)=>{
        res.status(200).send('User Saved Id : '+ result._id);
   }).catch((error)=>{
        res.status(500).send(error);
   });
})


app.listen(port , ()=>{
    console.log(`Listening to port No ${port}`);
});

log(models)




// configuration steps : 
// 1. Up and Running the express server 
// 2. configure the exress server 
// 3. handle the routes of the server 
// 4. use directory to import 
// 5. use async await function  