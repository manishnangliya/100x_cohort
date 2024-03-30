function errorMiddleware(err,req,res,next){
    const status = err.status || 500;
    const message = err.message || "BACK-END Error";
    const extraDetails = err.extraDetails || "Error from backend";
    return res.status(status).json({
        status,
        message,
        extraDetails
    })
}

module.exports = errorMiddleware;