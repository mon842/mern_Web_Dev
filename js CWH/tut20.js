console.log('ssss');
let arr=['a','b','c'];

// add a key value inside local storage--------------------------------
localStorage.setItem('Name','Sayak');
localStorage.setItem('College','fakeNIT');
localStorage.setItem('alpha',JSON.stringify(arr)); // JSON.stringify converts string to array


// revoving only one item-------------------
console.log(localStorage.getItem('Name'));
localStorage.removeItem('Name');
// localStorage.clear(); //clears the entire storage
let name1=localStorage.getItem('Name');

name1=JSON.parse(localStorage.getItem('alpha'));// string to array/// calling the item 'alpha' form localstorage 
console.log(name1);


// sessionStorage.setItem('SessionName','Sayak');
// sessionStorage.setItem('SessionCollege','fakeNIT');
// sessionStorage.setItem('alpha',JSON.stringify(arr)); // JSON.stringify converts string to array


//sessionStorage ends after the session ends but the localStorage still exists after the session ends, even after the code is commented out


