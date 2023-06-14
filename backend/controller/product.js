import { Items } from "../data.js";

export const getProducts = (req,res)=>{
    // console.log(Items)
    res.json(Items);
}

