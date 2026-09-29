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
    const data_with_users_key=JSON.parse(data)
    // first we need to read data from file and then push 
    // new data coming from client or frontend
    const users_array=data_with_users_key.users
    const newUser={...req.body,id:users_array.length+1}  // {id:1,"name":"aman","email":"aman@email.com"}
    // we will check newUser.email == existing email then we will send response
    // user already exists
    const check_user=users_array.some((el)=>el.email==newUser.email)
    if(check_user){
        res.send("User Already Exists")
    }
    else{
        users_array.push(newUser)
        data_with_users_key.users=users_array
        fs.writeFileSync("db.json",JSON.stringify(data_with_users_key))
        res.send("User Saved Successfully, please check db.json")
    }
})

// Getting single user
app.get("/users/:id",(req,res)=>{
    const userId=+req.params.id // + will convert string into number
    const data=fs.readFileSync("db.json","utf-8") // this will proceed first
    const data_with_users_key=JSON.parse(data)
    const users_array=data_with_users_key.users
    const find_user=users_array.find((el)=>el.id==userId)
    if(find_user){
         res.send(find_user)
    }
    else{
        res.send("User does not exists")
    }  
})

app.delete("/users/:id",(req,res)=>{
    const userId=+req.params.id // + will convert string into number
    const data=fs.readFileSync("db.json","utf-8") // this will proceed first
    const data_with_users_key=JSON.parse(data)
    const users_array=data_with_users_key.users

    const find_user=users_array.find((el)=>el.id==userId)
    if(find_user){
        const deleted_data=users_array.filter((el)=>el.id!=userId)
        data_with_users_key.users=deleted_data
        fs.writeFileSync("db.json",JSON.stringify(data_with_users_key))
        res.send("User Deleted Successfully")
    }
    else{
        res.send("User does not exists")
    } 
})
app.put("/users/:id",(req,res)=>{
    const userId=+req.params.id // + will convert string into number
    const data=fs.readFileSync("db.json","utf-8") // this will proceed first
    const data_with_users_key=JSON.parse(data)
    const users_array=data_with_users_key.users

    const find_user=users_array.find((el)=>el.id==userId)
    // {"id":1,"name":"aman","email":"aman@gmail.com"}
    if(find_user){
      find_user.name=req.body.name 
      find_user.email=req.body.email
      fs.writeFileSync("db.json",JSON.stringify(data_with_users_key))
      res.send("User Updated Successfully")
    }
    else{
        res.send("User does not exists")
    } 
})
app.listen(8080,()=>{
    console.log("Server started in http://localhost:8080")
})


