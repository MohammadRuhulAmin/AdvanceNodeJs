
import mongoose  from "mongoose";


const uri = "mongodb://127.0.0.1:27017/parcelkoi";
const options = {};

const log = (msg) =>console.log(msg);
mongoose.set('strictQuery', true);
const connectWithDb = ()=>{
    mongoose.connect(uri,options,(err,db)=>{
        if(err)console.error(err);
        else{
            log("Database connection established");
        }
    })
}

export default connectWithDb

