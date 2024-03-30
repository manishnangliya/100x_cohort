const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

const userSchema = mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
})
userSchema.methods.comparePassword =async function(password){
    return bcrypt.compare(password, this.password);
}

// define the model or the collection name
const User = mongoose.model("Users",userSchema);

module.exports = {User};