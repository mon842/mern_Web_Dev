
// proto={
//     name:function(Newname) {
//         this.name1 =Newname;
//     },
//     slogan:function(){
//         return 'this is a fucking place';
//     }
// }

// const proto1=Object.create(proto);
// proto1.name1="gandu goela";
// proto1.title="ghosh";

// const proto2=Object.create(proto,{
//     name1:{value:"gandu goela",writable:true},
//     title:{value:"ghosh"}
// });
// proto2.name('gg')
// console.log(proto1)
// console.log(proto2)

// proto={// cheating an object
//     slogan:function(){
//         return 'this is a fucking place';
//     },

//     changeName:function(newName) {// change name funtion 
//         this.name=newName;
        
//     }
// }
// const proto1=Object.create(proto);
// proto1.name="Sayak";
// proto1.title="WD";
// proto1.changeName("Sayak1");
// console.log(proto1);

// const proto2=Object.create(proto,{                   // creating a prototype
//     name:{value:"gandu goela",writable:true},// writable: true makes the prototype writable otherwise it won't change the value from gandu goela to saya2
//     title:{value:"ghosh"}
// });
// proto2.changeName("Sayak2");
// console.log(proto2)


//employ constructor
function employee(newName,Age,experience)
{
    this.name=newName;
    this.Age=Age;
    this.employ=experience;
}
employee.prototype.slogan=function(){
    return `fuck ${this.name}`
}

let sayakObj=new employee('Sayak',23,"12 years");
console.log(sayakObj.slogan())

// //programer
function programmer(name,salary,experience,Language) {
    employee.call(this,name,salary,experience,Language)
    this.Language=Language
}

// inherite the prototype
programmer.prototype=Object.create(employee.prototype);

// manually the constructor
programmer.prototype.constructor=programmer;
let sayak3=new programmer("sayak3",3,4,"ben");
console.log(sayak3); 
