// Regular Expressions - Metacharacters in JavaScript tutorial 47
console.log("Regular Expressions - Metacharacters in JavaScript tutorial 47");

let regex = /[Sa*ak]/;//

// charat Expressions meta characters
regex=/[^Say]/;//
// regex=/[ak$]/;//

let str="Sayak , fuck him!";

let result=regex.exec(str);
console.log("result is  ",result);

if(result)
{
    console.log("match found");
}
else
{
    console.log("match not found");
}
if(regex.test(str))
{
    console.log("match found");
    console.log(`the string ${str} contains the pattern-- ${regex.source} at index ${result.index}`);
}
else
{
    console.log(`the string ${str} does not contain the pattern ${regex.source}`);
}
