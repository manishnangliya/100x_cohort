const express = require("express")
const jwt = require("jsonwebtoken")
const jwtPass = "12345"
const app = express();
app.use(express.json());

const ALL_User = [
    {
        username:"manish@gmail.com",
        password:"123",
        name:"Manish"
    },
    {
        username:"sunil@gmail.com",
        password:"Sunil@123",
        name:"Sunil Nangliya"
    },
    {
        username:"rahul@gmail.com",
        password:"Password123",
        name:"Rahul"
    }
]
function isExist(username,password){
    var isPresent = false;
    for(let i=0;i<ALL_User.length;i++){
        if(ALL_User[i].username===username && ALL_User[i].password ===password){
            isPresent = true;
            break;
        }
    }
    return isPresent;
}
// get the username and password in req body and verify in in memory users that this exists or not
// if exists then return a token
app.post("/signin",function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    if(!isExist(username,password)){
        res.status(400).json({
            msg:"Please give correct username and password"
        })
        return
    }
    const token = jwt.sign({username:username},jwtPass);
    res.json({
        token
    })
})

// get token in req header and verify and gives all other users in memory users
app.get("/getusers",function(req,res){
     try{
        const token = req.headers.auth;
        const decode = jwt.verify(token,jwtPass);
        const username = decode.username;
        res.json({
            users: ALL_User.filter(function(value){
                if(value.username==username)
                    return false;
                else    
                    return true;
            })
        })
    }
    catch(err){
        res.status(404).json({
            msg:"Wrong token"
        })
    }
        // const token = req.headers.auth;
        // // console.log(token);
        // const decode = jwt.verify(token,jwtPass);
        // const username = decode.username;
        // res.json({
        //     ALL_User
        // })
})
app.listen(3000);