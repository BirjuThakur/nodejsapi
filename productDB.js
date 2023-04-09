const connectDB = require("./db/connection");
const products = require("./modals/products");
const items = require("./apis/hoteldata.json");

const start =async()=>{
    try {
        await connectDB;
        await products.create(items);
        console.log(items)
    } catch (error) {
        console.log(error)
    }
}

start();