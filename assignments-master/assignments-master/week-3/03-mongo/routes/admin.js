const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
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

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    try{
        const newCourseDetails=  req.body;
        const newCourse = new Course(newCourseDetails);
        await newCourse.save();
        res.status(201).json({
            message:"Course created successfully",
            courseId : newCourse
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