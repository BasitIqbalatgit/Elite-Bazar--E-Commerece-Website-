
import mongoose from "mongoose";


const productSchema=mongoose.Schema(
    {
        name: String,
        qty:{
            type:Number,
            default:1
        } ,
        popular: {
            type: Boolean,
            default: false,
          },
          image:{
            type:String,
            require:true,
          },
         category:String,
         price:Number,
         stock:Number,
    }
);
const productModel=mongoose.model("product",productSchema)

export {productModel}


