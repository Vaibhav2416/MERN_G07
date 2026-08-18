// ES6 Features => Ecmascript 6 => 2015

// let, const , arrow functions, destructuring, spread, rest,
// template literals

// template literals (ES6)
// before template literals if we want to put variable in string then
// we had to use + sign

// let name="aman"
// let age=27

// console.log("My name is "+name+" And My age is"+age)  // before es6
// // too many plus signs here
// console.log(`My name is ${name} and my age is ${age}`)// after es6

// // Destructuring
// // Object Destructuring
// let student={
//     name:"Kartik",
//     age:28
// }
// console.log(student.name) // "Kartik"

// let {name,age}=student
// console.log(age) // 28
// Array Destructuring
// let arr=[20,40,60,70]
// // console.log(arr[0])
// let [a,b,c]=arr
// console.log(a) // 20
// console.log(b) // 40

// Spread Operator (...)
// It is used to copy elements of array or object into another
// array or object

// let arr1=[10,20,30] //101 //[10,20,30,90] // they share same memory reference
// let arr2=arr1       // 101
// arr2.push(90)
// console.log(arr1) // [10,20,30,90]
// console.log(arr2) // [10,20,30,90]

// let arr3=[25,50,75,100]  //101// share different memory reference
// let arr4=[...arr3]       //201
// arr4.push(125)
// console.log(arr3) // [25,50,75,100]
// console.log(arr4) // [25,50,75,100,125]

// Combining Two arrays
// let fruits = ["Apple", "Mango"];
// let vegetables = ["Potato", "Tomato"];
// let food = [...fruits, ...vegetables];
// console.log(food);
// fruits.concat(vegetables)

// sprad with object
// let user = {
//     name: "Aman",
//     age: 25
// };
// let newUser = {
//     ...user
// };
// console.log(newUser) // {name:"Aman",age:25}
// // spread for adding new property in object
// let student={
//     name:"Aman",
//     age:25,
//     mob_no:987654321
// }
// let hostelStudent={
//     ...student,
//     city:"Shimla"
// }
// console.log(hostelStudent)

// let todo={
//     title:"Learn React",
//     status:false
// }
// let newTodo={
//     ...todo,
//     status:true
// }
// console.log(newTodo) // {title:"Learn React",status:true}
// // Order matters in spread 
// let todo={
//     title:"Learn React",
//     status:false
// }
// let newTodo={
//     status:true,
//     ...todo,
// }
// console.log(newTodo) // {title:"Learn React",status:false}


// Rest operator (...) (packing values or elements)

// function calculateSum(a,b,...nums){
//     console.log(a)
//     console.log(b)
//     console.log(nums)
// }
// calculateSum(20,30,40,50,60) 
// 20
// 30
// [40,50,60]
// rest ==> to pack values
// spread ==> to unpack values

// Default Parameter

function nationality(country="India"){
    console.log(`This person belongs to ${country}`)
}
nationality("America") //This person belongs to America
nationality() //This person belongs to India