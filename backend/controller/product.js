import { Items } from "../data.js";
import { productModel } from "../model/productModel.js";


export const getProduct = async (req,res)=>{
    try{
       const Items =await productModel.find() 
       console.log(Items);
       res.json(Items);
    }
    catch(e){

        console.log("Error in the get Product", e);
    }
    
}


export const postProduct = async (req,res)=>{
    try{
    const {name, price, stock, category, qty, popular}=req.body
    const product={
        name: name,
        qty: qty,
        popular: popular,
        category : category,
        price : parseInt(price),
        stock: parseInt(stock)        
    }
    
  const newItem= new productModel(product);
  
  const savedItem = await newItem.save();// Product saved 
  console.log("Saved Item is : ", savedItem);
  
    }
    catch(e){
        console.log("Error during saving the item is : ",e);
    }
}





export const putProduct=()=>{}

export const deleteProduct=()=>{}

