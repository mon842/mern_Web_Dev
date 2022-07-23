// For.. of Loop vs For.. in Loop
console.log("For.. of Loop vs For.. in Loop");

// sayak=["foodie","khachano","coding","gaming"];



// +++++++++++++++++++++++++FOR IN LOOP+++++++++++++++++++++++++++++++++++++
// traditional form loop
// for (let index = 0; index < sayak.length; index++) {
//     const element = sayak[index];
//     console.log(element);
// }


// let obj={
//     name:"sayak",
//     stream:"cse",
//     skills:"web.dev"
// }
// console.log(obj);

//traditional way for iterating an object 
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
// }

//new way...........................................................
// for (const key in obj) {
//     console.log(obj[key]);
// }

//"for in" loop used for strings
let str="ma k chudi colleger"
// for (const char in str) {
//     console.log(str[char])
// }


//traditional method for iterating a string
// for (let index = 0; index < str.length; index++) {
//     const element = str[index];
//     console.log(element);
// }





// ++++++++++++++++++++++++++FOR OF LOOP+++++++++++++++++++++++++++++++++++++
str=["foodie","khachano","coding","gaming"]
for (const char of str) {
    console.log(char);
}