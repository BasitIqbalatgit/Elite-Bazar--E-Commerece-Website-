import express from "express";
import { getProducts, postProduct } from "../controller/product.js";


const router = express.Router();

router.get("/",getProducts);
router.post("/",postProduct)

export default router;



