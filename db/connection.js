const mongoose = require("mongoose");

//database connection
const connectDB = mongoose.connect("mongodb://localhost:27017/nodepractice").then(()=>{console.log("connection successfully")})
.catch(()=>{console.log("connection dismiss")});

module.exports =connectDB;