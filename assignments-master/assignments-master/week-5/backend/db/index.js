const mongoose = require("mongoose");

const url = "mongodb+srv://admin:Yc2ZoqILvgAeAqn5@cluster0.uygtgfm.mongodb.net/Cards";
mongoose.connect(url);

//Define schema
const CardSchema = new mongoose.Schema({
    fullName:String,
    place:String,
    description:String,
    interests:[String],
    socialMedia:[{
        name:String,
        link:String
        
    }],
    isAdmin:Boolean
})
const Cards = mongoose.model('Cards',CardSchema);
module.exports ={
    Cards
}