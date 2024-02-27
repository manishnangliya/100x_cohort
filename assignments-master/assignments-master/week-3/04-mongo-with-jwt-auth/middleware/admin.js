const  jwt  = require("jsonwebtoken");
const secretKey = 'secret';
// Middleware for handling auth

async function adminMiddleware(req, res, next) {
    try{
        const auth_token = req.headers.auth_token;
        const token = auth_token.split(" ");
        const decode = jwt.verify(token[1],secretKey);
        next();
    }
    catch(err){
        res.status(404).json({
            message:"user not found"
        })
    }
}

module.exports = adminMiddleware;