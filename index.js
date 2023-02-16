import express from "express";
import configure from "./controllers";
import { handleErrors } from "./middlewares/handleErrors";

import connectWithDb from "./mongo";

const app = express();
const port = 3000;
app.use(express.json());



connectWithDb();

configure(app);

app.use(handleErrors);


app.listen(port , ()=>{
    console.log(`Listening to port No ${port}`);
});







