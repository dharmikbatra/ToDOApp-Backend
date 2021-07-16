const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost:27017/Todos',{ useFindAndModify: false },(err)=>{
    if(!err){
        console.log("connected database ...");
    }else{
        console.log("error "+ JSON.stringify(err,undefined,2));
    }
});

module.exports = mongoose;