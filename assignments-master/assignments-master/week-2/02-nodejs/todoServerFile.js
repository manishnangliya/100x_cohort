const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
function findIndex(arr,id){
    for(let i=0;i<arr.length;i++){
        if(arr[i].id==id)
            return i;
    }
    return -1;
}
function removeItem(arr,id){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].id!=id)
            newArr.push(arr[i]);
    }
    return newArr;
}
app.get("/todos", function (req, res) {
    fs.readFile("todos.json",'utf-8',function(err,data){
        if(err)
            throw err;
        res.json(JSON.parse(data));
    })
});

app.get("/todos/:id", function (req, res) {
    const id = req.params.id;
    fs.readFile("todos.json",'utf-8',function(err,data){
        if(err)
            throw err;
        const todoList = JSON.parse(data);
        const index = findIndex(todoList,id);
        if(index==-1)
            res.status(404).send();
        else
            res.json(todoList[index]);
    })
});

app.post("/todos", function (req, res) {
    const id = Math.floor(Math.random() * 1000000);
    const title = req.body.title;
    const description = req.body.description;
    const newTodo = {
        id,
        title,
        description,
    };
    fs.readFile("todos.json",'utf-8',function(err,data){
        if(err)
            throw err;
        const todoList = JSON.parse(data);
        todoList.push(newTodo);
        fs.writeFile("todos.json",JSON.stringify(todoList),function(err){
            if(err)
                throw err;
        })
    })
    res.status(201).json({ id });
});

app.put("/todos/:id", function (req, res) {
    const id = parseInt(req.params.id);
    fs.readFile("todos.json",'utf-8',function(err,data){
        if(err)
            throw err;
        const todoList = JSON.parse(data);
        const index = findIndex(todoList,id);
        if (index === -1) {
            res.status(404).send();
        } else {
            const title = req.body.title;
            const description = req.body.description;
            todoList[index].title = title;
            todoList[index].description = description;
            fs.writeFile("todos.json",JSON.stringify(todoList),function(err){
                if(err)
                    throw err;
            })
            res.json(todoList[index]);
        }
    })
});

app.delete("/todos/:id", function (req, res) {
    const id = parseInt(req.params.id);
    fs.readFile("todos.json","utf-8",function(err,data){
        if(err){
            throw err;
        }
        const todoList = JSON.parse(data);
        const newTodo = removeItem(todoList,id);
        if(newTodo.length==todoList.length){
            res.status(404).send();
        }
        else{
            fs.writeFile("todos.json",JSON.stringify(newTodo),function(err){
                if(err)
                    throw err;
            })
            res.status(200).send();
        }
    })
});

app.use(function (req, res, next) {
    res.status(404).send();
});

app.listen(3000);
