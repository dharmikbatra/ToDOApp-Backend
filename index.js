const express = require("express"); 
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
var cors = require('cors');
const port = process.env.PORT||3000;
const {mongoose} = require("./db.js"); // used destructuring, "mongoose" is exported from db.js
var auth = require("./routes/auth");
var changes = require("./routes/change");
// const Employee = require("./models/employee.js");
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true,
  }));
app.use(bodyParser.json());

app.use("/",auth);
app.use("/edit",changes);

app.listen(port,()=>{
    console.log(`hello connected ${port}`);
});

