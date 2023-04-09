const mongoose = require("mongoose");
const validator =require("validator");

//schema creation 
const registerSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        minLength:[3, "minimun 3 letters required"],
        maxLength:[20, "more than 20 letters not allowed"],
        lowercase:true,
        trim: true
    },
    lname: {
        type: String,
        required: true,
        minLength:[3, "minimun 3 letters required"],
        maxLength:[20, "more than 20 letters not allowed"],
        lowercase:true,
        trim: true
    },
    email: {
        type:String,
        required:true,
        unique:true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
             throw new Error ("email is invalid")
            }
         },
         lowercase:true
    },
    number: {
        type:Number,
        required:true,
        min:1000000000,
        max:9999999999,
        trim: true
    },
    passward: {
        type:String,
        required:true,
        trim: true
    },
    confirmpassward:{
        type:String,
        required:true,
        trim: true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const Register = new mongoose.model("Register",registerSchema);

module.exports=Register;