const express = require("express");
var router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId; //validation of id that is passed
var {User} = require("../models/users");
const bcrypt = require("bcrypt-nodejs");


router.post("/signup",(req,res)=>{
    var new_user = new User({
        name:req.body.name,
        todos:[],
        email:req.body.email
    });
    new_user.password = new_user.generateHash(req.body.password);
    new_user.save();

    res.send(new_user.name);
});

router.post("/signin",(req,res)=>{
    User.findOne({email:req.body.email},(err,docs)=>{
        if(err){ console.log(err); }
        else{
            if (!docs.validPassword(req.body.password)) {
                res.send("Password don't match")
              } else {
                res.send(docs);
              }
        }
    })
})

module.exports = router;