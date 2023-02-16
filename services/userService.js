import models from "../models";
export const saveUser = async (user)=>{
    const model = new models.User({
        username:user.username,
        createdAt:new Date()
    })
   const savedUser =  await model.save();
   return savedUser;
}


