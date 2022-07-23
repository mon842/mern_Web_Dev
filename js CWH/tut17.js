console.log('elements');

// adding event listner to make the thing function 

document.getElementById('heading').addEventListener('click',function(e){    // when the heading tag is clicked then it functions 
    console.log('u have clicked');
    // v=e.target;// by clicking the heading tag it gives the html code 
    // v=e.target.className;// by clicking the heading tag it gives the class name
    // v=e.target.classList;//by clicking the heading tag it gives the class list(list of all the classes)
    // v=e.target.id;by clicking the heading tag it gives id of the heading
    // v=Array.from(e.target.classList);// just makes an array the class list(list of all the classes)
    v4=e.offsetX;// by clicking the heading tag it gives the horizontal position(of only the element without the space fromthe edge) where u  clicked 
    // v=e.offsetY;//by clicking the heading tag it gives the vertical position where u  clicked 
    v1=e.clientX;// by clicking the heading tag it gives the horizontal position(of  the tab not outside of the window,it differs if you scroll the window) where u  clicked 
    v2=e.pageX;// by clicking the heading tag it gives the horizontal position(of the tab not outside of the window,it remains the same when scrolled horizontally) where u  clicked 
    v3=e.screenX;// by clicking the heading tag it gives the horizontal position(of the screen outside the tab it counts) where u  clicked 
    // v=e.clientY;
    console.log("clint",v1);
    console.log("page",v2);
    console.log("screen",v3);
    console.log("offset",v4);
    // location.href='//facebook.com'

});


// document.getElementById('heading').addEventListener('mouseover',function(e){
//     console.log('u have clicked')// just by hovering
//     v=e.target;
//     v=e.target.className; 
//     v=e.target.classList;
//     v=e.target.id;
//     v=Array.from(e.target.classList);// just makes an array
//     v=e.offsetX;
//     v=e.offsetY;
//     v=e.clientX;
//     v=e.clientY;
//     console.log(v);
    // location.href='//facebook.com'

// });
