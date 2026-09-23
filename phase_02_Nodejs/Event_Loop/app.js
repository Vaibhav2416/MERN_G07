// Event Loop

// Javascript is a single threaded language

// console.log("start")
// function a(){
//     console.log("Executing Function")
// }
// a()
// console.log("End")

// console.log("Start")
// setTimeout(()=>{
//     console.log("Executing after 3 seconds")
// },3000)
// console.log("End")

// Event loop is a mechanism which constantly checks callstack,
// if callstack is empty then it's work is to move all the
// pending callbacks from queue to call stack


// console.log("start")
// btn.addEventListner("click",()=>{
//     console.log("Btn is trigerred")
// })
// console.log("End")

console.log("start")
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data)=>console.log(data));

setTimeout(()=>{
    console.log("Executing after 0 seconds")
},0)
console.log("End")