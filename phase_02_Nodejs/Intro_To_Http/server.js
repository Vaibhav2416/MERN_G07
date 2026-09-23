
const http=require("http") 

const server=http.createServer((req,res)=>{
    // res.write("Hello Chitkara")
    // res.write("Welcome to G07")
    // res.end("Welcome to First Server Application")
    // res.write("Testing write line after end")
    if(req.url=="/"){
        res.end("Welcome to home page")
    }else if(req.url=="/about"){
        res.end("Welcome to About Page")
    }else if(req.url=="/product"){
        res.end("Welcome to Product Page")
    }else if(req.url=="/cart"){
        res.end("Welcome to Cart Page")
    }
})

server.listen(8080,()=>{
    console.log("Server is started on http://localhost:8080/")
})
// 8000, 8080, 5000, 8001
//http://localhost:8080/

// nodemon => always keep track of server file, whenever 
//           change happens in file it will autmotically reflect 
//           on terminal