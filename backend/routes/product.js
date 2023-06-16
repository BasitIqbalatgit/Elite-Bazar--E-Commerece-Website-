import express from "express";
import { getProduct, postProduct, putProduct,deleteProduct } from "../controller/product.js";


const router = express.Router();

router.get("/",getProduct);
router.post("/",postProduct);
router.put("/",putProduct);
router.delete("/",deleteProduct)

export default router;



//get, post, put, delete