import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";

configDotenv();
const authMiddleware = (req,res,next) => {
const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

if (!token) {
    return res.json({message : "You are not Authorized"});
}
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error){
        res.json({message : "Invalid token"})
    }
}

export default authMiddleware;