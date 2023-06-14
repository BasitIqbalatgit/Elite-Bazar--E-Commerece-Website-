
import mongoose from "mongoose";


const productSchema=mongoose.Schema(
    {
        name: String,
        qty:Number ,
        popular:String,
         decp:String,
         price:Number
    }
);
const productModel=mongoose.model("product",productSchema)

export {productModel}


