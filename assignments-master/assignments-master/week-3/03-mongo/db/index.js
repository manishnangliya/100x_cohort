const mongoose = require('mongoose');

// Connect to MongoDB
const url = "mongodb+srv://admin:Yc2ZoqILvgAeAqn5@cluster0.uygtgfm.mongodb.net/week3_assignment";
mongoose.connect(url);

// Define schemas
const AdminSchema = new mongoose.Schema({
    username:String,
    password:String
});

const CourseSchema = new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    imageLink:String,
    published:Boolean
});

const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    purchasedCourses:[{
        type : mongoose.Schema.Types.ObjectId,
        ref:"Course"
    }]
});
const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);
module.exports = {
    Admin,
    User,
    Course
}