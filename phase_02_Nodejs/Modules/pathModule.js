
// const filePath=require("/Program Files/Common Files/System/students.txt")

// When you store this pathModules.js file inside github
// then someone who clone your repo might have some other operating
// systems like macos or windows or linux

// macos =>\Program Files\Common Files\System\students.txt

const path=require("path")
const filePath=path.join("Pragram Files","Common Files","Students.txt")

console.log(filePath) // Pragram Files\Common Files\Students.txt
console.log(path.basename(filePath)) // Students.txt
console.log(path.dirname(filePath)) // Pragram Files\Common Files\