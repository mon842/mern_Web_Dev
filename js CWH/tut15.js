
let cont=document.querySelector('.no');
cont=document.querySelector('.container');
console.log(cont.childNodes);// childnodes gives all the elements in the query including comments and text
console.log(cont.children);// children gives all the elements in the query excluding comments and text
let nodeName=cont.childNodes[0].nodeName;// node name of the first element in the query(.container)
// let nodeType=cont.childNodes[1].nodeType;// node type of the 2nd element in the query(.container)
console.log(nodeName);
// console.log(nodeType);
/*
Node Types:-
1 = element
2= Attribute
3=Text Node
8= Comment
9=document
10= docType

*/

let container=document.querySelector('div.container');
// console.log(container)
// console.log(container.children[1].children[1])// printing 2nd child of the 2nd element in the query(div.container)

// console.log(container.firstChild);// printing first child of the first element in the query(div.container)
// console.log(container.firstElementChild);// printing first child of the first element in the query(div.container) excluding text and comment


// console.log(container.lastChild);// printing last child of the first element in the query(div.container)
// console.log(container.lastElementChild);// printing last child of the first element in the query(div.container) excluding text and comment

console.log(container.childElementCount);
// console.log(container.firstElementChild);

// console.log(container.firstElementChild.nextElementSibling.nextElementSibling);// printing sibling child of the first element in the query(div.container)
// console.log(container.firstElementChild.nextElementSibling);
// console.log(container.firstElementChild.parentElement);// printing parent of the first element in the query(div.container) excluding text and comment
// console.log(container.firstElementChild.nextSibling);