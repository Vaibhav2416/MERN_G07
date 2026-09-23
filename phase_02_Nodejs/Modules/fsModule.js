// fs is inbuilt module which will allow you to work on
// any file and perform actions like read, write, append and delete

const fs=require("fs")

// // Read File Synchronously
// console.log("Start")
// const data=fs.readFileSync("./students.txt","utf-8")
// // console.log(data)
// console.log(data.toString()) // if you skip utf-8
// console.log("end")

// // Read File Asynchronously
// console.log("start")
// fs.readFile("./students.txt","utf-8",(err,data)=>{
//     if(err){
//         return console.log(err)
//     }
//     console.log(data)
// })
// console.log("end")


// Write operation
// let text="Welcome to Aristotal Hostel"
// fs.writeFile("hostel.txt",text,(error)=>{
//     if(error){
//         return console.log(error)
//     }
//     console.log("Data Saved Successfully")
// })

fs.unlink("hostel.txt",(e)=>{
    if(e){
        console.log(e)
    }
    console.log("File Deleted")
})