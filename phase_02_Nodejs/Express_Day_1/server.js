const express=require("express") // importing express
const app=express()  // connecting express with our application
const fs=require("fs")
app.use(express.json())

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
    console.log(req.body)
    res.send("Making Post request")
})

app.listen(8080,()=>{
    console.log("Server started in http://localhost:8080")
})


