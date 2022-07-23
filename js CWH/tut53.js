console.log("tutorial 53-----   Generator-----------");
//--------------------generator----------------------
function* generator() {
    i = 0;
    // yield 1;
    // yield 2;
    // yield 3;
    while (true) {
        yield i++;
    }
}

const gen = generator(); // "Generator { }"

console.log(gen.next()); // 1
console.log(gen.next()); // 2
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())