// Arrow function

// function name(nam) {
//     this.name = nam;
//     console.log("Hello, my name is " + this.name);
// }


// let name=function(nam) {
//     this.name = nam;
//     console.log("Hello, my name is " + this.name);
// }

// const name = (nam) => {
//     this.name = nam;
//     console.log("Hello, my name is Mr " + this.name);
// }
// name("John");

const greate=()=>"Hello, my name is Mr John";
console.log(greate());

const obj=()=>({name:"John"});
console.log(obj());

const obj2=(name,age)=>"Hello, my name is Mr "+name+" and I am "+age+" years old";
console.log(obj2("John",25));