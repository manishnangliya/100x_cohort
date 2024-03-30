const { User } = require("../../models/user-model");
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY


const home = async (req, res) => {
    try {
        res.send("inside router");
    } catch (error) {
        console.log(error)
    }
}

async function register(req, res) {
    try {
        const { username, email, password, phone } = req.body;
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(400).json({
                msg: "user already exists"
            })
        }
        const saltRound = await bcrypt.genSalt(10);
        const hashed_password = await bcrypt.hash(password, saltRound);
        const user = await User.create({
            username,
            email,
            phone,
            password: hashed_password
        })
        let token = "";
        try {
            token = jwt.sign(
                {
                    userId: user._id.toString(),
                    email: user.email,
                    isAdmin: user.isAdmin
                },
                secretKey,
                {
                    expiresIn: "30d"
                });

        } catch (error) {
            console.error(error);
        }

        res.status(201).json({
            message: "user created successfully",
            token: token,
            userId: user._id.toString()
        })
    } catch (error) {
        res.status(404).send(error.message)
    }
}

//user login lo
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let userExist = await User.findOne({ email: email });
        if (!userExist) {
            return res.status(400).json({
                message: "email not exist"
            })
        }
        // const user = await bcrypt.compare(password, userExist.password);
        //defined in user-model.js
        const user =await userExist.comparePassword(password);
        if(!user){
            return res.status(401).json({
                message: "password not exist"
            })
        }
        let token = "";
        try {
            token = jwt.sign(
                {
                    userId: userExist._id,
                    email: userExist.email,
                    isAdmin: userExist.isAdmin
                },
                secretKey,
                {
                    expiresIn: "30d"
                });

        } catch (error) {
            console.error(error);
        }

        res.status(201).json({
            message: "user Logged in successfully",
            token: token,
            userId: userExist._id
        })

    } catch (error) {
        res.status(500).json("internal server error")
        console.error(error);
    }
}
const user = (req,res) => {
    try {
        console.log(req.headers.user);
        res.status(202).json({
            user:req.headers.user
        })
    } catch (error) {
        console.log(error.message);
        res.status(401).json({
            msg:"error in user route in backend"
        })
    }
}

module.exports = { home, register, login,user }