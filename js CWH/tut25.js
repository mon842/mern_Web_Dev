//creating a new element --------------------------------------------------------------------------------


let divElem=document.createElement('div');//creating an element 'div' with createElement function
let val=localStorage.getItem('text');
let textElem;
if (val==null) {
    textElem=document.createTextNode('this is created in javascript');// adding text to the created element()
} else {
    textElem=document.createTextNode(val);// adding text to the created element
} 

divElem.appendChild(textElem);
divElem.setAttribute('class','elem');
divElem.setAttribute('id','elem');
divElem.setAttribute('style','border :solid black')


let container=document.querySelector('.container');// selecting the main element with class=container
let head=document.getElementById('heading');// selecting an element with id='heading'


//inserting the element before element with id 'heading'
divElem.appendChild(textElem);

container.insertBefore(divElem,head);


// adding eventlistener to divElem to make it work by clicking
//Notes:1) on clicking the element the function fires
        // 2) elem is the class name of div (that we have created) in it's innerHTML textarea is inserted and the text is shown
// 3) noTextarea stores number of times the textarea has been clicked................................ as soon as it is clicked for the first time the if statement activates and then we are able to edit the text
// if th if statement is not used then the dom will show the whole html and then we cannot edit the text

divElem.addEventListener('click',function(){
    let noTextarea=document.getElementsByClassName('textarea').length;
    console.log(noTextarea);
    if (noTextarea==0){
        let html=elem.innerHTML;
        divElem.innerHTML=`<textarea name="textarea" class="textarea form-control" id="textarea" cols="30" rows="10">${html}</textarea>`
    }
    //listen to the blur event on the textarea
    let textarea=document.getElementById('textarea');
    textarea.addEventListener('blur',function(){
        elem.innerHTML=textarea.value;
        localStorage.setItem('text',elem.innerHTML);
    })
})