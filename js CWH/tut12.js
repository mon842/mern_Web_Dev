// documents
let a= document; // the html code
// a= document.forms;
a= document.all;
// a= document.links[0].href; // links in the html code
// a= document.body;
// Array.from(a).forEach(function(element) {
//     console.log(element)
// });
// Array.from(a).forEach(element => {
//     console.log(element)
// });

//hw

a= document.images;// images used in the html code
Array.from(a).forEach(element => {
    console.log(element);
})
// console.log(a)
a= document.scripts;// scripts used in the html code
Array.from(a).forEach(element => {
    console.log(element);
})