// let name="aman"
// let age=28
// let address="Shimla"

let person={
    name:"Aman",  // properties
    age:28,
    address:"Shimla"
}
console.log(person)
console.log(person.address)// accessing values of properties by dot method
console.log(person['age']) // accessing values by square brackets method

// By using Object Constructor

// let subject=new Object() // {}
// subject.sub_name="BED"  // Adding properties
// subject.credits=4
// subject.credits=5  // updating properties
// subject.duration="6 Months"
// console.log(subject)

// delete subject['duration'] // deleting properties

// console.log(subject)

// checking existing properties
// let obj = { model: "Tesla" };
// console.log("color" in obj);   // false
// console.log(obj.hasOwnProperty("model")); // true

// Iterating through object

// let obj = { name: "Sourav", age: 23 };
// for (let key in obj) {
//     console.log(key + ": " + obj[key]);
// }

// console.log(Object.keys(obj)) // ['name','age'] return array of keys
// console.log(Object.values(obj)) // ['Sourav',23] array of values 
// console.log(Object.keys(obj).length) // ['name','age'].length =>2


// let student = {
//     name: "Rahul",
//     age: 21,
//     address: {
//         city: "Delhi",
//         state: "Delhi",
//         pincode: 110001
//     }
// };
// console.log(student.address.pincode) // 110001

let student = {
    name: "Rahul",
    age: 21,
    city: "Delhi",
    id:{
        adhar:"5230 xxxx xxxx xxx5",
        pan:"JPLxxxxP"
    }
};
// console.log(student.name);
// console.log(student.age);
// console.log(student.city);
let {name:Username,age,city,id:{adhar,pan}} =student
console.log(name) // Rahul  // this will give error now
console.log(age)// 21
console.log(Username) //Rahul
console.log(pan)