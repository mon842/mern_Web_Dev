console.log("push pop");
var a = [0];

var i = 1;

function ad() {
    if (i % 3 == 0 && i % 5 == 0)
        a.push("fizzbuzz");
    else if (i % 5 == 0)
        a.push("buzz");
    else if (i % 3 == 0)
        a.push("fizz");
    else
        a.push(i);

    ++i;
    console.log(a);
}