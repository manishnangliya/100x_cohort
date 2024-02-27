const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    try {
        username = req.body.username;
        password = req.body.password;
        const isExist = await User.findOne({ username: username });
        if (!isExist) {
            const newUser = new User({ username, password });
            await newUser.save()
            res.status(201).json({
                message: "User created successfully"
            })
        }
        else {
            res.status(409).json({
                message: "User already present try to  login or create from different username"
            })
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find();
    res.status(201).json({
        courses: allCourses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    username = req.headers.username;
    password = req.headers.password;
    try {
        const courseExist = await Course.findOne({ _id: courseId });
        // console.log(courseExist);
        if (courseExist ) {
            const user = req.headers.user;
            const alreadPurchased = user.purchasedCourses.some(course=>course._id==courseId);
            if(alreadPurchased){
                res.json({
                    message:"User have already purchased this course"
                })
                return;
            }

            await User.updateOne({ 
                username: username, password: password 
            },{ 
                $push: {
                     purchasedCourses: { _id: courseId } 
                    } 
                } // updating operation
            )

            res.json({
                message: "Course Purchased successfully"
            })
        }
        else
            res.status(404).send("Course Not Found");
    }
    catch (err) {
        res.status(404).send(err.message);
    }
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    username = req.headers.username;
    password = req.headers.password;

    // method1
    // const user =await User.findOne({username:username,password:password});
    // const coursePromises = user.purchasedCourses.map(courseId=>{
    //     return Course.findOne({_id:courseId});
    // })
    // Promise.all(coursePromises).then(courses=>{
    //     const courseArray = courses.filter(course=>course!=null);
    //     res.json({
    //         purchasedCourses:courseArray
    //     })
    // })

    // method2
    const user = await User.findOne({username:username});
    const courseArray = await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    });
    res.json({
        courses:courseArray
    })

});

module.exports = router