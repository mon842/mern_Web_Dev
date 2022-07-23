// console.log('hw')

// let element=document.createElement('h1');//creating an element

// element.className='hw';
// element.id='hw';
// element.setAttribute('title','myHw');
// element.innerText='millionare after 5 years';

// let u=document.querySelector('ul.this');
// u.appendChild(element);
// let myul=document.getElementById('myul');
// // myul.replaceChild(element,document.getElementById('i'));//replacing the new child with the old one

// let element2=document.createElement('a');//creating an element
// element2.className='link';
// element2.id='link';
// element2.setAttribute('title','myLink');
// element2.innerHTML='https://www.pornhub.com';
// console.log(element2)
// u.appendChild(element2)


//trying

console.log('hw')

let element=document.createElement('a');//creating an element

element.className='hw';
element.id='hw';
element.setAttribute('href','https://www.facebook.com');
element.innerHTML='<b>millionare after 5 years</b>';
let u=document.querySelector('ul.this');
u.appendChild(element);
let pr=element.getAttribute('href');
console.log(pr)