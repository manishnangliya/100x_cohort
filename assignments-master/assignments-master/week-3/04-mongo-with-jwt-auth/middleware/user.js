const  jwt  = require("jsonwebtoken");
const { User } = require("../db");
const secretKey = 'secret';

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try{
        const auth_token = req.headers.auth_token;
        const token = auth_token.split(" ");
        const decode = jwt.verify(token[1],secretKey);
        req.headers['user'] = await User.findOne({username:decode.username});
        next();
    }
    catch(err){
        res.status(404).json({
            message:"user not found"
        })
    }
}

module.exports = userMiddleware;