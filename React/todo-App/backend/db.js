const mongoose = require("mongoose");
const url = "mongodb+srv://admin:Yc2ZoqILvgAeAqn5@cluster0.uygtgfm.mongodb.net/My-todo-App";
mongoose.connect(url);
const todoSchema = new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}