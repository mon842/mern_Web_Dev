console.log('18');

let b=document.getElementById('btn');
// b.addEventListener('click',func1);// if you click on the button(btn) once then func1 will be called 
// b.addEventListener('dblclick',func2);// if you click on the button(btn) once then func1 will be called 
// b.addEventListener('mousedown',func3);
// b.addEventListener('mouseup',func4);
b.addEventListener('mouseenter',func5);
// b.addEventListener('mouseleave',func6);


function func1(e) {
    // console.log('thanks',e);
    e.preventDefault();
}

function func2(e) {
    console.log('thanks for double clicking',e)
}

// function func3(e) {
//     console.log('thanks for mousedown',e);

// }

// function func4(e) {
//     console.log('thanks for mouseup',e);

// }

function func5(e) {
    console.log('thanks for mouse enter',e)
}

// function func6(e) {
    // console.log('thanks for mouse leave',e)
// }
// 2nd method----------------------------------------------------------------------------------------       


// let b=document.getElementById('btn');
// b.addEventListener('click',function fun1(e){
//     console.log('thanks',e)
//     e.preventDefault();
// });

// b.addEventListener('dblclick',function fun2(e){
//     console.log('thanks  for double clicking',e)
    
// });


// document.querySelector('.child40').addEventListener('mouseenter',function fun1(e) {
    // console.log('u entered whore',e)
// });
// document.querySelector('.child40').addEventListener('mouseleave',function fun2(e) {
//     console.log('u left whore',e)
// });

// hovering ------------------------------------------------------------------------------------------------

// document.querySelector('.container').addEventListener('mousemove',function fun2(e) {
//     console.log('u triggered mouse',e)
// });


// changing colour while hovering------------------------------------------------------------------------------------------------

//  document.querySelector('.head').addEventListener('mousemove',function fun2(e) {
//     console.log(e.offsetX,e.offsetY);
//     document.body.style.color=`rgb(${e.offsetX},${e.offsetX},${e.offsetY + e.offsetY})`
//     console.log('u triggered mouse',e)
// });

// changing color of the heading while hovering------------------------------------------------------------------------------------------------

// document.querySelector(".head").addEventListener("mousemove",function h(e) {
//     let h=document.getElementById("heading");
//     // console.log(h);
//     h.style.color=`rgb(${e.offsetY},${e.offsetX},${e.offsetX + e.offsetX})`
// });