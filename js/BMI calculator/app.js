var a = bmiCalculator(80,1.8);
console.log(a);

function bmiCalculator(weight, height) {
    var b=weight / (height * height);

    if (b<18.5) {
        console.log("underweight");
    }
    else if (b<24.9 && b>18.5) {
        console.log("underweight");
    }
    else if (b<25 && b>29.9) {
        console.log("normal");
    }
    else if (b< 30 && b> 34.9) {
        console.log("obese");
    }
     else {
        console.log("extremely obese");
    }
    return b;
}