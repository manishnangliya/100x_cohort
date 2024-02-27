const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course, User } = require("../db");
const secretKey = 'secret';
const jwt= require('jsonwebtoken');
const router = Router();

// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    try{
        username = req.body.username;
        password = req.body.password;
        const newAdmin = new Admin({username,password});
        await newAdmin.save()
        res.status(201).json({
            message:"Admin created successfully"
        })
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
});
router.post('/signin',async(req,res)=>{
    username = req.body.username;
    password = req.body.password;
    const isExist = await Admin.findOne({username:username,password:password});
    console.log(isExist);
    // console.log(secretKey);
    if(isExist){
        const token = jwt.sign({username:username},secretKey);
        res.json({
            token: token
        })
    }
    else{
        res.status(404).json({
            message:"wrong username and password"
        })
    }
})
router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    try{
        const newCourseDetails=  req.body;
        const newCourse = new Course(newCourseDetails);
        const course = await newCourse.save();
        console.log(course._id);
        res.status(201).json({
            message:"Course created successfully",
            courseId : course._id
        })
        res.send();
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
});

router.get('/courses', adminMiddleware,async (req, res) => {
    const allCourses = await Course.find();
    res.status(201).json({
        courses:allCourses
    })
});

module.exports = router;