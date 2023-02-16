import express from "express";
import configure from "./controllers";

import connectWithDb from "./mongo";

const app = express();
const port = 3000;
app.use(express.json());



connectWithDb();

configure(app);

const log = (message) =>console.log(message)
app.listen(port , ()=>{
    console.log(`Listening to port No ${port}`);
});







