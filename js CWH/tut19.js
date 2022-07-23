// listing of all the links present in the dom---------------------------------------------------------------- 

// let l=document.links;
// console.log(l);
// let href;
// Array.from(l).forEach(function(element){
//     href=element.href;
//     console.log(href);
// })

// searching for a specified link in the dom----------------------------------------------------------------

let l = document.links;// list of links in the dom----------------------------------------------------------------
searched = "facebook";//to be searched for a specified link in the dom----------------------------------------------------------------searched 
console.log(l);
let href;
Array.from(l).forEach(function (element) {
  href = element.href;// changing the element of the list to href----------------------------------------------------------------
  if (href.includes(searched)) {
    console.log(href);
  }
});
