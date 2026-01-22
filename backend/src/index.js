import express from "express";
import calcRouter from "./routers/calculator-router.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import conncectDB from "./config/db.js";
import userRouter from "./routers/user-router.js";
dotenv.config();


const app = express();
const Port = process.env.PORT
conncectDB();
app.use(cookieParser());
app.use(express.json());

app.use("/calculator",calcRouter);
app.use("/user",userRouter);


app.get("/", (req,res)=>{
    res.json({message :"Welcome to the Calucator Backend App Comming Soon "})
});

app.listen ( Port, () => {
    console.log(`Backend is running on http://localhost:2332`);
})


