import express from "express";
import {connection} from "./connection.js";
import product from "./routes/product.js";
const app = express();
import cors from "cors";

connection.then(()=>{console.log("DB Connected ")}).catch((e)=>{console.log( "Error:", e)})
app.use(cors());
app.use(express.json())
app.use("/product", product)



app.listen(5000,()=>{console.log("Server is running ")})


// CORS middleware


