const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost:27017/Todos',{ useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
    if(!err){
        console.log("connected database ...");
    }else{
        console.log("error "+ JSON.stringify(err));
    }
});

module.exports = mongoose;