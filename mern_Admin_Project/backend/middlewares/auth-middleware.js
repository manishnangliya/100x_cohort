const jwt = require('jsonwebtoken');
const { User } = require('../models/user-model');
const secretKey = process.env.JWT_SECRET_KEY
async function authMiddleWare(req,res,next){
    let token = req.headers.authorization;
    if(!token){
        return res.status(401).json({message:"Unauthorized HTTP, Token Not Provided"})
    }
    token = token.replace("Bearer","").trim();
    try {
        const parsedUser = jwt.verify(token,secretKey);
        // console.log(parsedUser);
        const id = parsedUser.userId;
        // console.log(id);
        const userOutput =await User.findOne({_id:id});
        req.headers["user"] = {
            userId:userOutput._id,
            username:userOutput.username,
            email:userOutput.email,
            phone:userOutput.phone,
            isAdmin:userOutput.isAdmin
        }
        next()
    } catch (error) {
        return res.status(401).json({message:"Unauthorized HTTP, Token Not Provided"})

    }
}
module.exports = authMiddleWare;