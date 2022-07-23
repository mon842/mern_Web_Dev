// for loop

// for (let i = 0; i < 10; i++)
// {
//     console.log(i);
    
// }

// let i=0
// while loop
// while (i<11) {
//     console.log(i);
//     i++;
// }


// do while loop
// do {
//     console.log(i);
    
//     if(i===5)
//     {
//         continue
//     }
//     i++;
// } while (i<11);

// a=[1,2,3,5,6,7,4];
// // a.forEach(element => {
// //     console.log(element)
// // });
// a.forEach(function(element) {
//     console.log(element)
// });

let obj={
    name:"ryzen 5 5500u",
    company:"AMD",
    cores:6,
    platform:'laptop'
}

for(let key in obj)
{
    console.log(`${key} = ${obj[key]}`);
}