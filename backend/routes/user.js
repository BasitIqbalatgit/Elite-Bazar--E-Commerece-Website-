import express from "express";
import { postUser, getUser, loginUser } from "../controller/user.js";

const router = express.Router();

router.post("/",loginUser)
router.post("/",postUser);
router.get("/",getUser);
export default router;
