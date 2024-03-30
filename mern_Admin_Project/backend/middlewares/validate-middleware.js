

const validate = (schema)=> async (req,res,next)=>{
    try {
        const parsedBody =await schema.parseAsync(req.body);
        req.body = parsedBody;
        next();
    } catch (error) {
        const status = 400;
        const message = error.errors.map(err=>err.message);
        next({status,message});
    }
}

module.exports = validate;