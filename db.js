const mongoose = require("mongoose");


mongoose.connect('mongodb+srv://batradharmik:dharmik$$BB2308@todos.nr6sp.mongodb.net/todos-api?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
    if(!err){
        console.log("connected database ...");
    }else{
        console.log("error "+ JSON.stringify(err));
    }
});

module.exports = mongoose;