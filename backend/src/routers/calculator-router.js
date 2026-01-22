import express from "express";
import { calculate, getHistory } from "../controllers/calculator-controller.js";
import authMiddleware from "../middleware/auth-middleware.js";

const calcRouter = express.Router();

calcRouter.post("/calculate", authMiddleware,calculate);
calcRouter.get("/history",authMiddleware, getHistory)

export default calcRouter;