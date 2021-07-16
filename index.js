const express = require("express"); 
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");

const {mongoose} = require("./db.js"); // used destructuring, "mongoose" is exported from db.js
var auth = require("./routes/auth");
var changes = require("./routes/change");
// const Employee = require("./models/employee.js");
const app = express();

app.use(bodyParser.urlencoded({
    extended: true,
  }));
app.use(bodyParser.json());

app.use("/",auth);
app.use("/edit",changes);

app.listen("3000",()=>{
    console.log("hello connected");
});


