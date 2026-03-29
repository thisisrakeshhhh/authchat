import jwt from "jsonwebtoken";
import User from "../models/user.model.js"

const protectRoute = async(req, res, next) => {
    try{
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({ err: "Unauthorized - No Token Provided"});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({err: "Unauthorized access - Invalid Token"});
        }
        const user = await User.findById(decoded.userId).select("-password");
        req.user = user;

        next();//sendMessage

    }catch(err){
        console.log("Error in protectRoute middleware: ", err.message);
        res.status(500).json({err: "Internal server error"});
    }
}
export default protectRoute;