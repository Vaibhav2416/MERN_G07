const express=require("express")
const app=express()
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const SECRET_KEY="my_code_is51"
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
    if(!check_pw){
        res.send("Invalid Password Credentials")
    }
    const token=jwt.sign({"email":user.useremail},SECRET_KEY,{"expiresIn":"1hr"})
    // jwt.sign("Payload",Secret Key,expiry_time)
    // payload ==> user_id, user_email, registered_at
    // Secret_Key ==> Secret key put stamps on token which ensure that token is 
    //                coming from trusted client
    // expiry time => "1hr","7d"
    res.send({
        "message":"User logged In Successfully",
        "token":token
    })
})

const authMiddleware=(req,res,next)=>{
    // req ==> body, parameters, headers
    // headers ==> information like token, data type
    const headers=req.headers.authorization
    //Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hbWFuQGdtYWlsLmNvbSIsImlhdCI6MTc5MTkwNDI2MiwiZXhwIjoxNzkxOTA3ODYyfQ.8HVptBqFBqTvkTYpJ95iM9sPDB9oDTGEaFf6Eh6sPFY
    const token=headers.split(" ")[1]
    // [Bearer, token] // token consist of user email 
    const decode=jwt.verify(token,SECRET_KEY) // payload,issued_at,expiry_time
    if(decode){
        next()
    }
    else{
       return res.send("Invalid token")
    }
}

app.get("/profile",authMiddleware,(req,res)=>{
    res.send("Welcome to my profile")
})
// account route
app.get("/account",(req,res)=>{
    res.send("Welcome to my account page")
})

app.listen(8000,()=>{
    console.log("Server is running in http://localhost:8000")
})