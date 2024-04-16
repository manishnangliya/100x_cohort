const Service = require("../../models/service-model");

async function getCourse(req,res){
    try {
        const allCourse = await Service.find();
        res.status(200).json({
            course:allCourse
        })
    } catch (error) {
        console.log("get service ",error.message)
        res.status(401).json({
            error:error.message
        })
    }
}

module.exports = getCourse;