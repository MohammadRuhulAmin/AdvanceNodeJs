import express from "express";
import configure from "./controllers";
import { handleErrors } from "./middlewares/handleErrors";
import processRequest from "./middlewares/processRequest";
import connectWithDb from "./mongo";

import winston from "winston";
import expressWinston from "express-winston";
import winstonDaily from "winston-daily-rotate-file";
import winstonMongo from "winston-mongodb";
import { ElasticsearchTransport } from "winston-elasticsearch";


const app = express();
const port = 3000;
app.use(express.json());
app.use(processRequest);
app.use(handleErrors);

connectWithDb();
// https://www.youtube.com/watch?v=Jgc6gZsHwd0&list=PLEYpvDF6qy8avZ212mzmQ7VPSNHDZ1CNf&index=25
const infoLogger =  expressWinston.logger({
    transports:[
        new winston.transports.Console()
    ],
    format:winston.format.combine(winston.format.colorize(),winston.format.json()),
    meta:true,
    msg:'this is a log {{req.method}}',
});

app.use(infoLogger);
configure(app);

app.listen(port , ()=>{
    console.log(`Listening to port No ${port}`);
});







