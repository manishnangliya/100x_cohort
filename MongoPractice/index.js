const mongoose = require('mongoose');
const express = require('express');
const url = "mongodb+srv://admin:Yc2ZoqILvgAeAqn5@cluster0.uygtgfm.mongodb.net/PracticeDB";
mongoose.connect(url);
const app = express();
const userSchema = {
    username: String,
    password: String,
}
const User = mongoose.model('User', userSchema);
app.use(express.json());

app.post("/signUp", async function (req, res) {
    username = req.body.username;
    password = req.body.password;
    const user = new User({
        username:username,
        password:password
    })
    // const isExist = await user.findOne({username:username});
    const isExist = await User.findOne({username:username});
    if(isExist){
        res.send("user already exist");
        return;
    }
    user.save().then(function (err) {
        res.json({
            msg: "User created",
        })
    })
})
app.use(function(err,req,res,next){
    console.log("some err");
})
app.listen(3000);