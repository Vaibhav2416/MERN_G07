
// Functions
// Block of code which need to be repeated multiple times
// can be wrapped in one method that will be called as function

// greet() // hoisting --> 

// function greet(){  // function declaration
//     console.log("Good Morning")
// }

// greet() // function calling

// function calculateProd(a,b){  // function parameters
//     // console.log(a*b)
//     return a*b
// }
// function calculateSub(a,b){
//     // console.log(a-b)
//     return a-b
// }
// // fetchApi function ---> return data
// let res=calculateProd(7,8)+calculateSub(4,1)  // function arguments
//             // 56 + 3 --> 59
// console.log(res)

// Function Expressions
//x(5)  //  TDZ ---> You cannot access it before initialisation

// let x=function(a){
//     return a**2
// }

// console.log(x(4))


// Default Parameter
// let nationality=function(country="Indian"){
//     return `This person has ${country} nationality`
// }
// let res=nationality("American")
// console.log(res)

// Arrow Functions

let cubeFn=(b)=>b**3; // no need of writing return here
console.log(cubeFn(5))

// multiline function

let multiLine=(a,b)=>{
    let c=90
    let res=(a+b)-90
    return res
}
console.log(multiLine(50,80))

