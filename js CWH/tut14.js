/*
1. single element selector
2. multiple element selector
*/

//single element selector--------------------------------------------

// let element=document.getElementById('child');
// element=element.className;
// element=element.childNodes;
// element=element.parentNode;
// element.style.color='red';
// element.innerText='kalani';
// element.innerHTML='<b>kalani</b>'

// console.log(element);
// console.log(element.innerHTML);// prints the whole inner html '<b>kalani</b>'
// console.log(element.innerText);// prints the whole inner text 'kalani'


// let sel=document.querySelector("#child");
// sel=document.querySelector(".mb-3");
// sel=document.querySelector("div");
// sel.style.color='green';
// console.log(sel);

// multi element selctor-----------------------------------------------------
// as it selects multiple elements therfore to change the color of the element we need loop
let elems=document.getElementsByClassName('head');

// elems=document.getElementsByClassName('container');
// elems=document.getElementsByTagName('div');
// console.log(elems[0].getElementsByClassName('child1'));
// console.log(elems)
Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color='red';   
});

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color='blue';
    element.style.backgroundcolor='blue';
}