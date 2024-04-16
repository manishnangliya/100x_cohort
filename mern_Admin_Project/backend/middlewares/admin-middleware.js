const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY
const adminValidate = (req, res, next) => {

    let token = req.headers.authorization;
    if (!token || token==="null" ) {
        return res.status(401).json({
            message: "Unauthorized HTTP, Token Not Provided"
        })
    }
    token = token.replace("Bearer", "").trim();
    try {
        const parsedUser = jwt.verify(token,secretKey);
        if (parsedUser.isAdmin) {
            next()
        }
        else {
            return res.status(403).json({
                message: "Not an Admin Access"
            })
        }
    } catch (error) {
        console.log("admin middleware error ", error.message);
        next(error)
    }
}
module.exports = adminValidate;