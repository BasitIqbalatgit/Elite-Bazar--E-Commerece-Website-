import express from "express";
import { getProducts } from "../controller/product.js";


const router = express.Router();

router.get("/",getProducts);

export default router;
