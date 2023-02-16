import express from "express";
const router = express.Router();
import models from '../models';

const getHandler = (req,res)=>{
    res.send('Hello world ' + req.query.id);
};

const postHandler = (req,res)=>{
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
}


router.get('/',getHandler);
router.post('/',postHandler);

const configure = (app)=>{
    app.use('/users',router);
}

export default configure;


