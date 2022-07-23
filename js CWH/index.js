// //the intro to print in the console  

// console.log('hello mf');
// console.time('hello mf2');
// // console.log([2,2,3,4,4]);
// // console.log({cock:"pussy",dick:"vigina"});
// console.table({cock:"pussy",dick:"vigina"});// prints a table in the console
// console.warn("fuck off");// warning in the console 
// console.error("hi");// error msg in the console
let age = 102;
console.assert(age>100,"age>100 not possible");
// console.timeEnd("end");

// console.time("answer time");// starts the timer
// alert("Click to continue");// gives a popup with a "Click to continue"
// console.timeLog("answer time");// just prints the time which started with console.time
// alert("Do a bunch of other stuff...");
// console.timeEnd("answer time"); // ends the timer that started with console.time

const errorMsg = 'the # is not even';
for (let number = 2; number <= 5; number += 1) {
    console.log('the # is ' + number);
    console.assert(number % 2 === 0, {number: number, errorMsg: errorMsg});
    // or, using ES2015 object property shorthand:
    // console.assert(number % 2 === 0, {number, errorMsg});
}