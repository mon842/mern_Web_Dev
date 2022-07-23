// console.log("tut 42----fetching api data");
// fetching api data

//getting element with id mybtn
let mybtn=document.getElementById("mybtn");

//getting element with id content
let content=document.getElementById("content");


// function getdata() {

//     console.log("started getting api data 1");
//     //fetching data from api
//     url="rendi.txt";
//     fetch(url).then(response=>{
//         console.log("inside first then 3");
//         return response.text();
//     }).then(data=>{
//         console.log("inside second then 4 ");
//         console.log(data);
//         //getting data from api and displaying it in content
//     });
// }

// function getdata() {
// console.log("started getting api data 1");
// //fetching data from api
// url="https://api.github.com/users";
// fetch(url).then(response=>{
//     console.log("inside first then 3");
//     // return response.text();
//     return response.json();
// }).then(data=>{
//     console.log("inside second then 4 ");
//     console.log(data);
//     //getting data from api and displaying it in content
// });
// }
// console.log("before running getdata 5");
// getdata();
// console.log("after running getdata 6");


function postdata() {
    url="http://dummy.restapiexample.com/api/v1/create";
    data='{"name":"uvfvftestmf6516","salary":"123","age":"23"}';
    params={
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: data
    }
    fetch(url,params).then(response=>{
        // console.log("inside first then 3");
        // return response.text();
        return response.json();
    }).then(data=>{
        // console.log("inside second then 4 ");
        console.log(data);
        //getting data from api and displaying it in content
    });
}
// console.log("before running getdata 5");
postdata();