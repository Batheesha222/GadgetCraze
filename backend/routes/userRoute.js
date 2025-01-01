import express from "express";
import { loginUser,registerUser,adminLoginUser } from "../controller/userController.js";

const userRouter = express.Router();


userRouter.post("/register", registerUser);
userRouter.post("/login",loginUser);
userRouter.post("/admin",adminLoginUser);


export default userRouter;