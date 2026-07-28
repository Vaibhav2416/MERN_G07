// null, undefined, "" , NaN , 0 , false --> except this six values 
// // all values are truthy

// // let a=-2;

// // console.log(Boolean(a))
// // console.log(true+6) // 7
// // console.log(9-false) // 9

// // Type Conversion

// // Implicit Type Conversion

// // let a="5"+6 //  56 --> type conversion will be done by js
// // console.log(a)
// // console.log(typeof(a))

// // let b=8-"2" // 6
// // console.log(b)

// // let num="5"*null  // 35
// // console.log(num)

// // Explicit Type Conversion

// let str="125ABC"
// console.log(typeof(str)) // string
// let res=Number(str) 
// console.log(res)// Nan --> Number
// console.log(typeof(res)) //Number

// let num=17
// let s=String(num)
// console.log(typeof(s)) // string

// let z="true" // string
// let ans=Boolean(z) 
// console.log(ans) // Boolean


// let number="567" // string
// let r=+(number)
// console.log(typeof(r)) // number 


// Logical Operators

// let a = false;
// let b = 0;
// let c = null;
// let z = a || b || c; // if all values are falsy then || will return
//                     // last falsy value
// console.log(z);

let a = false;
let b = 'Vivek';
let c = 'Rishi';
let z = a || b || c; // this will return first truthy value
console.log(z);

let defaultUser = "Vivek";
let user = "Akash"
console.log(defaultUser || user) // Vivek

let defaultUser = false;
let user = "Akash"
console.log(defaultUser || user) // Akash


let a = 'Prachi';
let b = 'Vivek';
let c = 'Rishi';
let z = a && b && c; // If all values are true then && will return 
                    // last truthy value
console.log(z);
// isAuthenticated && isAdmin && showUI

// let a = 0;
// let b = 'Vivek';
// let c = 'Rishi';

// let z = a && b && c; // 0 --> falsy 
// console.log(z);

// apidata --> undefined, null
// let user=null;
// console.log(user ?? "User is not available"); // Anonymous

// <img src="" alt="no-image found">

// let obj={
//     name:"Aman",
//     age:22,
//     address:"Shimla"
// }

// for(let key in obj){
//     console.log(key) // name, age, address
//     console.log(obj[key]) // Aman, 22, Shimla
// }

// console.log(key) // reference error


const subjects = ['javascript', 'html', 'css'];


for (let subject of subjects) {
  console.log(subject);
}


