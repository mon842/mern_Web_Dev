// console.log('ajax');

// let fetchbtn =document.getElementById('fetchbtn');// grabbing the fetchbtn element
// fetchbtn.addEventListener('click', buttonClickHandler);

// function buttonClickHandler() {
//     //instantiate an xhr object
//     const xhr = new XMLHttpRequest();//simply creating a xhr object

//     // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);// opening ('GET' means giving a url and fetching the object ,,,,'POST' means sending the url,data to the server and then fetching the object)|| true means asynchronus(nonblocking) false means synchronous(blocking)
//     xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);// opening ('GET' means giving a url and fetching the object ,,,,'POST' means sending the url,data to the server and then fetching the object)|| true means asynchronus(nonblocking) false means synchronous(blocking)
//     xhr.getResponseHeader('Content-type', 'application/json');//as post method needs data with url to function therefore it gives a json string


//     xhr.onprogress=function(){
//         console.log('it is in progress');// when the request is progressing
//     }
//     xhr.onreadystatechange= function(){
//         console.log("ready state is",xhr.readyState);
//     }

//     xhr.onload=function(){
//         if(this.status===200)// "this.status " is http code to check the status or condition of the response 
//         {
//             console.log(this.responseText);// when the request is finished
//         }
//         else{
//             console.error('error');// when the request is failed
//         }
//     }

//     params=`{"name":"test34sad545","salary":"123","age":"23"}`;
//     xhr.send(params);// when the request is sent
//     console.log("finished")// it show finished data first as it is asynchronus (our requesting object is called when the server is ready but other this that are already there not reloding ,,, it is not blocking the path of other functions)
// }


// let popbtn =document.getElementById('popbtn');// grabbing the fetchbtn element
// popbtn.addEventListener('click', popHandler);

// function popHandler(){
//     //instantiate an xhr object
//     const xhr = new XMLHttpRequest();//simply creating a xhr object

//     xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);// opening ('GET' means giving a url and fetching the object ,,,,'POST' means sending the url,data to the server and then fetching the object)|| true means asynchronus(nonblocking) false means synchronous(blocking)
    
//     xhr.onload=function(){
//         if(this.status===200)// "this.status " is http code to check the status or condition of the response 
//         {
//             let obj = JSON.parse(this.responseText);
//             console.log(obj);// when the request is finished
//             let list= document.getElementById('list');// grabbing the list element
//             str="";
//             for (key in obj) {
//                 // str+=key+":"+obj[key];
//                 str=`<li>${obj[key].employee_name}</li>`;                
//             }
//             list.innerHTML=str;
//         }
//         else{
//             console.error('error');// when the request is failed
//         }
//     }


//     xhr.send();// when the request is sent
//     console.log("finished")// it show finished data first as it is asynchronus (our requesting object is called when the server is ready but other this that are already there not reloding ,,, it is not blocking the path of other functions)

// }


let popBtn = document.getElementById('popbtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key]} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}
// Value	State	                Description
// 0	    UNSENT	                Client has been created. open() not called yet.
// 1	    OPENED	                open() has been called.
// 2	    HEADERS_RECEIVED	    send() has been called, and headers and status are available.
// 3	    LOADING	                Downloading; responseText holds partial data.
// 4	    DONE	                The operation is complete.