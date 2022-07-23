// a takes all the links from the current tab or page and b is the perticular link to be searched  
var a=document.links;
var b="//facebook.com";
Array.from(a).forEach(function(element){
    if (element.href.includes(b)) {
        console.log(element.href)
    }
})