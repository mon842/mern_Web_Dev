// Regular Expressions - Character sets
console.log("\nTutorial 48 Regular Expressions - Character sets");


// character sets/
let regex = /st[a-z]le/;// can be any character in the set a to z
regex= /st[^ayc]le/;// can't be a,y,c
regex= /st[ayc]le/;// can be a,y,c
regex= /st[a-zA-Z]le/;// can be any character in the set a to z and A to Z
regex= /st[a-zA-Z]le[a-z0-9][0-9]/;// can be any character in the set a to z and A to Z AND any number 0 to 9
regex= /st[a-zA-Z]le[a-z0-9]/;// can be any character in the set a to z and A to Z AND any number 0 to 9


// Quantifiers
regex= /dog{2}y/;// g can occur only 2 times
regex= /dog{0,2}y/;// g can occur for 0 to 2 times


// Grouping
regex= /(dog){2}y/;// dog can occur only 2 times
const str = "dogdogy stYle69";

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

