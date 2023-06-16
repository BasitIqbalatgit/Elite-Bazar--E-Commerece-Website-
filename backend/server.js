import express from "express";
import {connection} from "./connection.js";
import product from "./routes/product.js";
const app = express();
import cors from "cors";
import bodyParser from "body-parser";

connection.then(()=>{console.log("DB Connected ")}).catch((e)=>{console.log( "Error:", e)})




app.listen(5000,()=>{console.log("Server is running ")})


// CORS middleware
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())
app.use("/product", product)

