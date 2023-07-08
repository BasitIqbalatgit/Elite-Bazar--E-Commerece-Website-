import {userModel} from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const postUser = async(req,res)=>{
    try{      

        const {userName,email, password}  = req.body;

        
        const userExsist = await userModel.findOne({email: email});
        if(userExsist){
            res.status(402).json({error:"User Already Exsists "});
        }
       
        const salt = await bcrypt.genSalt();//default value is 10
        const hashedPassword = await bcrypt.hash(password,salt);

        const user={
            userName:userName,
            email:email,
            password:hashedPassword
        }
       
        const newUser = new userModel(user);

        await newUser.save()
        console.log("new User is : ",newUser);
    }catch(e){
        console.log("Error in the Post User  : ", e);
    }
}


export const getUser = async (req,res)=>{
    try{
        const user =await userModel.find() 
        res.json(user);
        console.log("i am in getUser: ",user);
     }
     catch(e){
 
         console.log("Error in the get User", e);
     }
}


export const loginUser = async(req,res)=>{
try{
    const{email, password} = req.body;

    if(!email || !password){
        return res.this.status(400).json({error:"Plz fill the form"});
    }

    const userLogin = await userModel.findOne({email: email});


    // console.log("in LoginUser Controller", userLogin);

    if(!userLogin)
    {
        res.status(400).json({error: "Invalid Credentials"});
    }
    else{
        const isMatch = await bcrypt.compare(password, userLogin.password);
        // jwt token
            const jwt = 
        if(isMatch){
            res.json({message:"user Login Successfull"})
        }
        else{
            res.status(400).json({error: "Invalid Credentials"});
        }
        
    }
   

}catch(err){
    console.log(err)
}

}