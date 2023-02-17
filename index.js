import express from "express";
import configure from "./controllers";
import { handleErrors } from "./middlewares/handleErrors";
import processRequest from "./middlewares/processRequest";

import connectWithDb from "./mongo";

const app = express();
const port = 3000;
app.use(express.json());
app.use(processRequest);

connectWithDb();

configure(app);

app.use(handleErrors);


app.listen(port , ()=>{
    console.log(`Listening to port No ${port}`);
});







