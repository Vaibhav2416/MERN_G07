const express=require("express")
const app=express()
// Middleware => It is a function which runs or act as barrier between request and
//               response
app.use(express.json()) // this is inbuilt middleware 
// express can't decide which kind of data is coming from client, it confuses 
// between json data,file data, or some another data, so we need to explicitly 
// mention that client is sending json data only, so we are useing express.json
// middleware to parse request data
const validation=(req,res,next)=>{
    console.log("validation middleware")
    const {email, password} = req.body // email:aman@gmail.com,password:"123"
    if(!email.includes("@") || !email.endsWith(".com")){
        res.status(400).send("Input email is not valid")
    }
    else{
        next() // this will pass request to next middleware
        // if next middleware is not present then 
        // it will pass to next route
    }
}
const authMiddleware=(req,res,next)=>{
    console.log("Auth middleware is running")
    const {email,password} = req.body
    const useremail="aman@gmail.com"
    const userpassword="1234"
    // check entered email match with db email
    if(email == useremail && password == userpassword){
         next()
    }
    else{
        res.status(400).send("User is not authenticated to see this page")
    }
}
// app.use(authMiddleware)
// app.use(validation) // ==> connecting validation middleware for upcoming routes
// write home route logic
app.get("/",(req,res)=>{
    console.log("Home page route")
    res.send("Welcome to Home Page")
})
app.get("/profile",validation,authMiddleware,(req,res)=>{
    console.log("Profile page route")
    res.send("Welcome to my profile")
})

app.listen(8000,()=>{
    console.log("Server is running in port http://localhost:8000/")
})
// npm run start