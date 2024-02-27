const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());


app.get("/todos",async function(req,res){
    const allTodo = await todo.find();
    res.json({
        allTodo
    })
})
app.post("/todos",async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"Invalid Todo details"
        })
        return
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"Todo Created"
    })
})

app.put("/completed",async function(req,res){
    const createPayload = req.body;
    const parsedPayload = updateTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"Invalid Todo details"
        })
        return
    }
    const output = await todo.updateOne({
        _id:createPayload.id
    },{
        completed :true
    })
    res.json({
        msg:"task completed"
    })
})

app.use(function(err,req,res,next){
    res.json({
        error:err.message
    })
})
app.listen(3000);