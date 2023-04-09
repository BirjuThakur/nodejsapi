const express =require("express");
const router = express.Router();


//databse and schema connection
require("../db/connection");
const Register = require("../modals/register");
const newaApi = require("../apis/newApi.json");

//for storing data in mongodb
router.use(express.json());
router.use(express.urlencoded({extended:false}))

router.get("/",(req,res) =>{
    res.send("hello router")
})
router.get("/newapi",async(req,res)=>{
    try {
        const mydata = await newaApi.find((data) => data.countryCode === 'ET');
        res.status(200).json({ mydata });
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
})


//contact data 
router.get("/contact",(req,res) =>{
    res.send("this is contact page")
})


//registration 
router.get("/register",async(req,res) =>{
    try {
        const regdata = await Register.find();
        res.send(regdata);
    } catch (error) {
        res.send("not getting data");
    }
})

router.post("/register",async(req,res) =>{
    const { fname,lname,email,number,passward, confirmpassward } = req.body;
    try {
        if(!fname || !lname || !email || !number || !passward || !confirmpassward){
                return res.status(400).json({Error:"please fill the data"})
            }
        if(passward===confirmpassward){
            let user = new Register({fname,lname,email,number,passward,confirmpassward})
            const userdata=await user.save()
            console.log(userdata)
            res.status(201).json({message:"user send data successfully"});

        }else{
            res.send("passward not matcing")
        }
    } catch (error) {
        res.status(401).send("user invalid registration")
    }
})

//login 
router.post("/sinin",async(req,res)=>{
         try {
            const {email,passward} =req.body;
            if(!email || !passward){
                return res.status(400).json({Error:"please fill the data"})
            }
            const userlogin = await Register.findOne({email});
            if(passward==userlogin.passward){
                return res.status(201).json({message:"user log in successfully"})
            }else{
                return res.status(400).json({ error: "User not found" })
            }
         } catch (error) {
            console.log("connection dismiss")
         }
})

module.exports=router;