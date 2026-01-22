import User from "../models/user-model.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv();
//  SIGN UP FUNCTION
export const signup = async (req,res) => {
    try {
    // getting username and password from user
    const {username, password} = req.body;
    // checking is user exists or not
    const userExists = await User.findOne({username});
    if (userExists){
        return res.json({message : "username already exists"});
    }
    // encrypting password
    const hashedPassword= await bcrypt.hash(password, 10);
    // creating user in database
    const user = await User.create({
        username,
        password : hashedPassword
    })
    res.json({message : "User Created Successfully", 
                id : user._id,
            username : user.username},
       
    );
} catch (error){
    res.json({message : "Sign up error"});
}
};

// SIGN IN FUNCTION
export const signin = async (req,res) => {
    try {
    //  getting username and password from user
    const {username, password} = req.body; 
    // verifying user by username in database
    const user = await User.findOne({username});
    if (!user){
      return  res.json({message : "Invalid Username "});
    }
    // Matching Password
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.json({message : "Password is not correct"});
    }
    // generating token for user
    const token = jwt.sign(
        {userId: user._id},
        process.env.JWT_SECRET,
        {expiresIn : "3d"}
    );

    // setting cookies
    res.cookie("token", token, {
        httpOnly : true,
        secure : false // true in production
    })

    res.json({message : "Login Successfull",
        userId : user._id,
        username : user.username
    })
}catch(error) {
    res.json({message : "Sign In erorr"})
}
};


// PROFILE FUNCTION
export const getProfile = async (req,res) => {
    try {
    const userId = req.user.userId;

    const user = await User.findById(userId).select("-password")
    if (!user){
        return res.json({message :"User Not found"});
    }
    res.json({
        message : `Welcome to Your profile `,
        userId : user._id,
        username : user.username,
        info : "Thanks for choosing our Calculator",
          profileDetails: {
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
            }
    })

    } catch (error) {
        res.status(500).json({"message" : "Eror Fetching Profile"})
    }
}



//  LOGOUT FUNCTION
export const logout = (req,res) => {
    try {
        res.clearCookie("token", "", {
            httpOnly : true,
            expires : new Date (0)
        })
        res.json("Logout Successfully")
    } catch (error) {
        res.json({error: "Logout Failed"})
    }
}
