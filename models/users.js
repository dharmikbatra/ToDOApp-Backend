const bcrypt = require("bcrypt-nodejs");
const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    todos:{type:[String]},
    password:{type:String}

});
//hash the password
userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
};

//checking the password
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };


var User = mongoose.model('User',userSchema);

module.exports = {User};
//{Employee} is shorthand for{Employee:Employee} as both are same 