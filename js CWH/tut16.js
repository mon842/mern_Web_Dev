console.log('tut 16');
// let element=document.createElement('li');// making the element

// // adding a class name to li element----------------------------------------------------------------

// element.className='childulc';// naming the element
// element.id='childulc';// giving an id to the element
// element.title='Mytitle';// giving a title 
// // element.innerText='text created in javascript';// entering a text to element
// //or as you cant do bold in text
// // element.innerHTML='<b> html created in javascript </b>'// entering a html to element

// let ul=document.querySelector('ul.this');// selecting an element form the html
// ul.appendChild(element);// inserting the element made by you in the selected one above

// console.log(ul);
// console.log(element);


// second method to insert text----------------------------------------------------------------------

let element=document.createElement('li');//creating an element
let text=document.createTextNode('second method to insert text')//entering a text in the element made by u
element.appendChild(text);// inserting the text in the element made by u

// adding a class name to li element

element.className='childulc';//naming the element
element.id='childulc';// naming the id of the element
element.title='Mytitle';//giving a title for element

let ul=document.querySelector('ul.this');// selecting an element for inserting the created element 
ul.appendChild(element);// inserting the created element in the selected one

console.log(ul);
console.log(element);

let elem2=document.createElement('li');// creating another element
elem2.id='elem2';// giving id
elem2.className='elem2';//naming the element
let textnode=document.createTextNode('this is the text of elem2(replaced)');// entering a text in the element to be replaced
elem2.appendChild(textnode);// inserting the text in the second element that to be replaced

element.replaceWith(elem2);// replacing the second element with the first one made by u




//


let myul=document.getElementById('myul');//selecting the element by their ID
myul.replaceChild(element,document.getElementById('lui'));//replacing the new child with the old one
myul.removeChild(document.getElementById('y'));// removing the child
// let pr=elem2.getAttribute('class');// bringing a element using its ('class'), ('id'), etc
let pr=elem2.hasAttribute('class');//checking if the attrbute is present or not using its ('class'), ('id'), etc
elem2.removeAttribute('id');// removing an attribute 
elem2.setAttribute('title','elem2Title');// setting a new attribute
console.log(elem2,pr)



// querySelector() selects class
// getElementById() selects id

