const mongoose = require("mongoose");

const productschema = new mongoose.Schema({
    city:{
        type:String,
    },
    state:{
        type:String
    },
    country:{
        type:String
    }
})

const products = new mongoose.model("products",productschema);

module.exports =products;