import { Items } from "../data.js";
import { productModel } from "../model/productModel.js";


export const getProducts = (req,res)=>{
    // console.log(Items)
    res.json(Items);
}


export const postProduct = (req,res)=>{
    
}

