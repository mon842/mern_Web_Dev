setTimeout(() => {
    for (let index = 0; index < 5000; index++) {
        const element = index;
        console.log(element);
    }
}, 10000);

console.log("done the work");