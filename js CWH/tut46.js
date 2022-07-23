// JavaScript Regular Expressions & related functions
console.log("\n*** Tutorial 46 - JavaScript Regular Expressions & related functions ***");
let reg=/fuck u/; // regular expression
console.log(reg.test("fuck u")); // true
console.log(reg.test("fuck you")); // false
console.log(reg); // /fuck u/
console.log(reg.source); // fuck u  (the string that was used to create the regular expression)

let string="fuck u ,U r just a piece of shit , motherfucker and you are not even a human being fuck u";

// exec()is a function which helps to search a word in a sentence and sends null is there is no match
let result=reg.exec(string);
let result2=reg.exec(string);
console.log(result); // [ 'fuck u', index: 0, input: 'U r just a piece of shit , motherfucker and you are not even a human being fuck u' ]
console.log(result2); // [ 'fuck u', index: 0, input: 'U r just a piece of shit , motherfucker and you are not even a human being fuck u' ]

let reg2=/fuck/g; // global regular expression
result=reg2.exec(string);
result2=reg2.exec(string);
console.log(result); // [ 'fuck u', index: 0, input: 'U r just a piece of shit , motherfucker and you are not even a human being fuck u' ]
console.log(result2); // [ 'fuck u', index: 0, input: 'U r just a piece of shit , motherfucker and you are not even a human being fuck u' ]

// g acts as a flag which tells the regular expression engine to search for the pattern globally and doesn't stop at the first match {no repeated answers}

let reg3=/fuCk/i; // case insensitive regular expression
result=reg3.exec(string);
result2=reg3.exec(string);
console.log(result); // [ 'fuck u', index: 0, input: 'U r just a piece of shit , motherfucker and you are not even a human being fuck u' ]
console.log(result2); // [ 'fuck u', index: 0, input: 'U r just a piece of shit , motherfucker and you are not even a human being fuck u' ]
console.log(result2.index); // [ 'fuck u', index: 0, input: 'U r just a piece of shit , motherfucker and you are not even a human being fuck u' ]
console.log(result2.input); // [ 'fuck u', index: 0, input: 'U r just a piece of shit , motherfucker and you are not even a human being fuck u' ]
// i is a case insensitive flag that tells the regular expression engine to ignore the case of the letters



// test() ------>is a fuction which is used to test the regular expression that the perticular string matches or not
let reg4=/fuck/;
console.log(reg4.test(string)); // true


//match() ------>is a function which is used to search a word in a sentence and returns the first match
let reg5=/fuck/;
console.log(string.match(reg5)); // [ 'fuck', index: 0, input: 'U r just a piece of shit , motherfucker and you are not even a human being fuck u' ]    

//search() ------>is a function which is used to search a word in a sentence and returns the index of the first match or -1 if there is no match
let reg6=/fUck/;
console.log(string.search(reg6)); // -1

//replace() ------>is a function which is used to replace a word in a sentence with another word
let reg7=/fuck/g;
console.log(string.replace(reg7,"f**k")); // U r just a piece of shit , motherfucker and you are not even a human being f**k
// g flag will all the matches of the pattern in the string and i will replace irrespective of the case
