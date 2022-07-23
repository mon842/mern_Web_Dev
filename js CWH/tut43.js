// Async/Await function

console.log("Tutorial 43 this is async/await function");

// async function Sayak() {
//     console.log("Sayak is a good  fucker inside function");
//     return "Sayak is return     ";
// }

// console.log("before function call");
// let result = Sayak();
// console.log("after function call");
// console.log(result);
// console.log("last line of function ");


async function Sayak() {
    console.log("inside function");//2
    const response = await fetch("https://api.github.com/users");
    console.log("after fetch or response function");//6
    const users = await response.json();
    console.log("after json function");//7
    return users;
}
//pending 4
console.log("before function call");//1
let result = Sayak();
console.log("after function call");//3
console.log(result);
result.then(data => console.log(data));//8
console.log("last line of function ");//5

// function sa(){
//     console.log("done");
//     return "done3";
// }
// let a=sa();
// console.log(a+" done2");