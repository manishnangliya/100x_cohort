const e = require("express");
const express = require("express")
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const URL = "mongodb+srv://admin:Yc2ZoqILvgAeAqn5@cluster0.uygtgfm.mongodb.net/SignInUsers"
mongoose.connect(URL);
const jwtPass = "SECRET_PASSWORD"
const user = mongoose.model("Users",{name:String, email:String,password:String});

const app = express();
app.use(express.json());
//takes the full name ,email,password and store in database
app.post("/signUp", async function(req,res){

    fullName = req.body.fullName;
    email = req.body.email;
    password = req.body.password;
    const isExist = await user.findOne({email:email});
    if(isExist){
        res.status(400).send("User already Exist");
        return;
    }
    const newUser = new user({fullName:fullName,email:email,password:password});
    newUser.save().then(function(){
        res.json({
            msg :"User created",
        })
    })
})


//signin takes email and password if they are correct then return a token
app.post('/signin',async function(req,res){
    email = req.body.email;
    password = req.body.password;
    const isExist = await user.findOne({email:email});
    if(isExist){
        if(password==isExist.password){
            const token = jwt.sign({email:email},jwtPass);
            res.json({
                msg:"user Logged in successfully",
                token:token
            })
        }
        else
            res.status(411).send("Wrong credentials")
    }
    else
        res.status(411).send("Wrong credentials")
})

//getAlluser if it have token then return the all the present users in database
app.get('/getAlluser',async function(req,res){
    try{
        const token = req.headers.token;
        const decode = jwt.verify(token,jwtPass);
        const data = await user.find();
        res.json({
            data
        })
    }
    catch(err){
        res.status(404).json({
            msg:"wrong token"
        })
    }

})
app.listen(3000);


