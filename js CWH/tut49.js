// Shorthand character classes

console.log("Tutorial 49-Shorthand character classes");

let regex = /\wle/;//one word character- _ or alphabets or numbers
regex = /\w+ed/;// one or more than one word character/s- _ or alphabets or numbers
regex = /\Wed/;// Nonword character- _ or @#!$%^&*()-=+{}[]|\:;'<>,.?/
regex = /\W+ed/;// one or more than one Nonword character/s- _ or alphabets or 

regex = /\dle/;//one digit
regex = /\d+le/;// one or more than one digit
regex = /\Ded/;// Nondigit character
regex = /\D+ed/;// one or more than one Nondigit character

regex = /\s+le/;// one or more than one space
regex = /\sle/;// one space
regex = /\S+ed/;// one or more than one Non-space character
regex = /\Sed/;// one Non-space character
regex = /\gy\b/;// word boundary


//Assertions
regex = /s(?=m)/;// ^ - start of string, $ - end of string

let str="doggy style big booty smashed 9999le";

let result=regex.exec(str);
console.log("result is  ",result);

if(regex.test(str))
{
    console.log("match found");
    console.log(`the string ${str} contains the pattern-- ${regex.source} at index ${result.index}`);
}
else
{
    console.log(`the string ${str} does not contain the pattern ${regex.source}`);
}

