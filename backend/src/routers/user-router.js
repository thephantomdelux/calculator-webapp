import express from "express";
import { getProfile, logout, signin, signup } from "../controllers/user-controller.js";
import authMiddleware from "../middleware/auth-middleware.js";
const userRouter = express.Router();

userRouter.post("/signup",signup);
userRouter.post("/signin",signin);
userRouter.post("/logout", logout);
userRouter.get("/profile", authMiddleware,getProfile);

export default userRouter;