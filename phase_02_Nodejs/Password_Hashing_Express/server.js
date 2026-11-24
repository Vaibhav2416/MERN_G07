const express=require("express")
const app=express()
const bcrypt=require("bcrypt")
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Welcome to homepage")
})
let user={} // temporary database
app.post("/register",async(req,res)=>{
    const {email,password}=req.body
    user={
        useremail:email,
        userpassword:await bcrypt.hash(password,10) //123
    }
    // bcrypt.hash(original_password,salt rounds)
    // salt_rounds => 1 ==>(simple complexity of passowrd)
    //             => 10 ==> (More complex password) 
    res.send(`${JSON.stringify(user)} registered successfully`)
})
app.post("/login",async(req,res)=>{
    const {email,password}=req.body
    if(email!==user.useremail){
        res.send("Email does not exists")
    }
    const check_pw=await bcrypt.compare(password,user.userpassword)
    // bcrypt.compare will return true or false
    if(check_pw){
        res.send("User Logged In successfully")
    }
    else{
        res.send("Password doesn't match")
    }
})
app.listen(8000,()=>{
    console.log("Server is running in http://localhost:8000")
})