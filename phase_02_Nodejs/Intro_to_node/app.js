// Node Js 
// It is runtime environment to run javascript locally
// Javascript was originally built to make frontend

// In 2009 Node js was introduced because of which backend
// also can be build on node js

// Single threaded language 
// It supports asynchronous programming
// You can install millions of libraries in node
// It uses V8 engine to run javascript // Chrome browser also use it

// console.log("start")
// // setTimeout will execute code only once after given delay
// // setTimeout(()=>{
// //     console.log("Executing After 5 seconds...")
// // },5000)

// // setInterval will repeat code in loop after certain delay
// setInterval(()=>{
//     console.log("Executing this code in loop after 5 seconds")
// },2000)

// console.log("end")


// REPL => Read Evaluate Print Loop

// Global Objects => those objects/functions/methods that you can write without
//                   importing it

// console.log("Chitkara") // console is global object here

// setTimeout() // 
// setInterval() //
// console.log(process.version) // node version
// fetch()


console.log("start")
setTimeout(()=>{
    console.log("late")
},0)
fetch("https://dummyjson.com/products").then((res)=>res.json()).then((r)=>console.log(r))

console.log("end")