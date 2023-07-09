import express from "express";
import { postUser, getUser, loginUser } from "../controller/user.js";

const router = express.Router();

router.post("/register", postUser);
router.post("/login", loginUser);
router.get("/", getUser);

export default router;
