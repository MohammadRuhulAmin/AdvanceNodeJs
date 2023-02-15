import express from "express";
import models from './models/index.js';


const app = express();
const port = 3000;
app.use(express.json());

const log = (msg) =>console.log(msg);

app.get('/',(req,res)=>{
    res.send('Hello world ' + req.query.id);
});

app.post('/',(req,res)=>{
    const body = req.body;

    res.send('This is post request ' + body.message);
})

app.listen(port , ()=>{
    console.log(`Listening to port No ${port}`);
});

log(models)