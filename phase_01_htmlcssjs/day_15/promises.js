// Synchronous Javascript
// Javascipt is a single threaded language

// Asynchronous Javascript

console.log("start")

// for code which takes time we put them in
// async function due to which further code
// will be not kept on hold
// let fetchData=async()=>{
//     try {
//         let resp=await fetch("https://dummyjson.com/products")
//         let json_products=await resp.json()
//         console.log(json_products)
//     } catch (error) {
//         console.log("Error from catch",error)
//     }
// }
// fetchData()
// ES6 => 2015
//Async Await
// 2018

//.then
// promise chaining
let resp=fetch("https://dummyjson.com/products")
            .then((apiresponse)=>{
                return apiresponse.json()
            }).then((json_products)=>{
                console.log(json_products)
               return fetch("https://dummyjson.com/recipes")
            }).then((response)=>{
                return response.json()
            }).then((json_recipes)=>{
                console.log(json_recipes)
            }).catch((error)=>{
                console.log(error)
            })
// Promise Chaining => It is process of handling multiple apis with multiple .then
                    // statements

// Single web page
// user url => user/{id} ==> userdetails from this api
// order url => order/{userId} => orderdetails from this api

// Promise
// It is javascript object which gives representation
// of completion or rejection of any operation
// Three states response
// 1. Pending => fetching data will take some time
// 2. Success => data will be fetched
// 3. Failure => data will get loss

let ownPromise=new Promise((resolve,reject)=>{
    let status=false
    if(status){
        resolve("Promise is resolved")
    }else{
        reject("Promise is rejected")
    }
})
ownPromise.then((res)=>console.log(res)).catch((er)=>console.log(er))
console.log("end")