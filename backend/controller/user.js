
import {userModel} from "../model/userModel";


export const postUser = async(req,res)=>{
    try{
        const {userName,email, password}  = req.body
        const user={
            userName:userName,
            email:email,
            password:password
        }
        const newUser = userModel(user);
        await newUser.save();
    }catch(e){
        console.log("Error in the Post User  : ", e);
    }
}