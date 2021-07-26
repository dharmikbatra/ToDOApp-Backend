const express = require("express");
var router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId; //validation of id that is passed
var {User} = require("../models/users");
const bcrypt = require("bcrypt-nodejs");

router.post("/delete",(req,res)=>{
    id = ObjectId(req.body.id);
    index = req.body.index;
    todoscopy=[];
    User.findOne({_id:id},(err,docs)=>{
        if(err){res.send("err");}
        todoscopy = docs.todos;
        todoscopy.splice(index, 1);
        User.findOneAndUpdate(
        {_id:id},
        { $set: { todos: todoscopy}},(err,docs)=>{
            if(err){res.send(err);}
            else {res.send("done");}
        });
    });    
})

router.post("/edit",(req,res)=>{
    id = ObjectId(req.body.id);
    index = req.body.index;
    todo=req.body.todo;
    User.findOne({_id:id},(err,docs)=>{
        if(err){res.send("err");}
        todoscopy = docs.todos;
        todoscopy[index]=todo;
        User.findOneAndUpdate(
        {_id:id},
        { $set: { todos: todoscopy}},(err,docs)=>{
            if(err){res.send(err);}
            else {res.send("done");}
        });
    });
});

router.post("/add",(req,res)=>{
    id = ObjectId(req.body.id);
    todo=req.body.todo;
    todoscopy=[];    
    User.findOne({_id:id},(err,docs)=>{
        if(err){res.send("err");}
        todoscopy = docs.todos;
        todoscopy.push(todo);
        User.findOneAndUpdate(
        {_id:id},
        { $set: { todos: todoscopy}},(err,docs)=>{
            if(err){res.send(err);}
            else {res.send("done");}
        });
    });
})
module.exports = router;