// console.log("Name:ajay sir")

// data types in js 
// a.primitive data types 
// String,number,boolean,null,undefined 


// b.non primitive data types 
// objects,arrays,function 

// objects 
let studentData = {
    name: 'ajay shrestha sir',
    address: {
        country: "Nepal",
        city: "Kathmandu"
    },
    roll: 1,
    // faculty:"csit"
}
// console.log(studentData) 

// accessing the specific property from object 

// console.log(studentData.address)  

// updating the properties 
// studentData.name="Dikshya mam!";
// console.log(studentData)

// studentData.address.country="Australia"
// console.log(studentData.address.country)

// // add property in existing object 
// studentData.faculty="csit"
// console.log(studentData)

// // deleting the property from object 
// delete studentData.roll
// console.log(studentData)


// task 
// create 8 product items with item name,desc,price and quantity and display them in console using objects .also add 2 items in existing objects and delete the product price of at least 2 items 



// let datas=[
//     {
//         name:"Ajay shrestha sir !!",
//         address:
//         {
//             country:"nepal",
//             city:"ktm"

//         },
//         age:15
//     },
//      {
//         name:"",
//         age:16
//     },
//      {
//         name:"",
//         age:17
//     },
//      {
//         name:"",
//         age:18
//     },

// ]
// console.log(datas[0].address.city)

// datas[0].address.city="Biratnagar"

// console.log(datas[0].address.city)

// delete datas[0].address.city
// console.log(datas[0].address)


// console.log(datas.length)



// function function-name(){
//     code to be executed 
// }

// a. function without parameter 
// function greet() {
//     console.log("Hello ajay sir")
// }

// greet()

// b.function with parameters 
// function name(params) {
//     code to be executed 

// }

// function greet(name) {
//     console.log("Hello , " + name)

// }
// greet("Ajay sir!!")
// greet("Bishal")
// greet("Dikshya")
// greet("Dipesh")


// c.function with return value 
// display sum using two variables a and b 


// arrow function 
// const square = (number) => {
//     return number * number
// }
// let result = square(5);
// console.log(result)


// default parameter 
// function welcome(name = "Guest") {
//     console.log("Welcome : " + name)
// }
// welcome();
// welcome("Ajay sir !!")

// callback function

// function message(name, callback) {
//     console.log("Hello , " + name);
//     callback();

// }

// function sayBye() {
//     console.log("Nice to meet you !! See you again ...")

// }

// message("Ajay sir !!", sayBye)


// operators in js 

// let a = 10;
// let b = 25;
// let result = a + b;
// console.log(result)

// a.Arithmetical operators 
let a = 10;
let b = 20;
console.log(a + b)   //addition
console.log(a + b)   //addition
console.log(a + b)   //addition
console.log(a + b)   //addition
console.log(a + b)   //addition

// b. Logical operators 
// 0=false
// 1=true

let age = 62;
console.log(age > 18 && age < 60)   //logical AND 
console.log(age > 18 || age < 60)   //logical OR
console.log(!(age > 18))                //logical NOT



