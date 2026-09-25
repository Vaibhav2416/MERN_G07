const express=require("express") // importing express
const app=express()  // connecting express with our application
const fs=require("fs")
app.use(express.json()) 
// when req.body comes from client , express
// can't identitify which type of content coming
// from client whether it is file type, text type
// or json type, so we need to mention explicitly
// that req.body is coming as json data

app.get("/",(req,res)=>{
    res.send("Welcome to home page")
})
app.get("/users",(req,res)=>{
    const data=fs.readFileSync("db.json","utf-8") // this will proceed first
    const users=JSON.parse(data)
    res.send(users)
})
// CRUD Application
// We will store users data in db.json file by post request and
// we will read users from db.json file by get request
app.post("/users",(req,res)=>{
    const data=fs.readFileSync("db.json","utf-8") // this will proceed first
    const users=JSON.parse(data)
    // first we need to read data from file and then push 
    // new data coming from client or frontend
    const users_array=users.users
    console.log(users_array)
    const newUser=req.body
    users_array.push(newUser)
    fs.writeFileSync("db.json",JSON.stringify(users_array))
    res.send("User Saved Successfully, please check db.json")
})

app.listen(8080,()=>{
    console.log("Server started in http://localhost:8080")
})


