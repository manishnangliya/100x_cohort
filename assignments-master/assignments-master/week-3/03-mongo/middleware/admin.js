const { Admin } = require("../db");

// Middleware for handling auth

async function adminMiddleware(req, res, next) {
    username = req.headers.username;
    password = req.headers.password;
    const userNameExist = await Admin.findOne({username:username,password:password});
    if(userNameExist){
        next();
        
    }
    else{
        res.status(404).send("User Not authenticated");
    }
}

module.exports = adminMiddleware;