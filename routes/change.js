const express = require("express");
var router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId; //validation of id that is passed
var {User} = require("../models/users");
const bcrypt = require("bcrypt-nodejs");

router.delete("/delete",(req,res)=>{
    id = req.body.id;
    index = req.body.index;
    todoscopy=[];
    User.findOne({id:this.id},(err,docs)=>{
        todoscopy = docs.todos;
    });
    todoscopy.splice(index, 1);
    User.updateOne({'id':this.id},
   {$set:{'todos':todoscopy}});
   res.send("done");
})

router.post("/edit",(req,res)=>{
    id = ObjectId(req.body.id);
    index = req.body.index;
    todo=req.body.todo;
    todoscopy=[];
    // User.findOne({id:this.id},(err,docs)=>{
    //     todoscopy = docs.todos;
    //     console.log(docs);
    // });
    // console.log(todoscopy);
    todoscopy[index]=todo;
    User.updateOne({'id':this.id},
   {update:{todos: todo}});
   res.send("done");
});

router.post("/add",(req,res)=>{
    id = req.body.id;
    todo=req.body.todo;
    todoscopy=[];
    
    User.findOne({id:this.id},(err,docs)=>{
        if(err){res.send("err");}
        todoscopy = docs.todos;
    });
    todoscopy.push(todo);
    User.findOneAndUpdate(
        {id:id},
        { $set: { todos: todoscopy}},(err,docs)=>{
            if(err){res.send(err);}
            else {res.send(docs);}
        });
    res.send("done");
//     User.updateOne({'id':this.id},
//    {$set:{'todos':todoscopy}},(err,res)=>{
//        if(err){res.send("err");}
//        res.send("success");
//    });
})
module.exports = router;