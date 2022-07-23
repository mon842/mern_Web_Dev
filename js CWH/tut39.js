// promise

// Promise: anything
// -resolve
// -reject
// -pending

function func1() {
    return new Promise(function(resolve, reject)// thi func1 will return a promise which will resolve if not then it will reject .
    {
        setTimeout(() => {
            const error = false;
            if(!error){
                console.log('the promise is resolved');
                resolve();
            }
            else{
                console.log('the promise is rejected');
                reject("rejected");
            }
        }, 3000);
    })
}
func1().then(function(){
    console.log("user: thanks for resolving");// if ther is no error then then() function will work and resolve() function will work
}).catch(function(error){
    console.log("user: fuck you!"+error);// if there is error then catch() function will work and reject() function will be called .
})