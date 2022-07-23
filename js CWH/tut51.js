//iterators

console.log("this is tutorial-41------ITERATOR");

function fruitsIterator(values) {
    let nextindex=0;
    //we will return an object
    return{
        next:function(){
            if (nextindex<values.length) {
                return{
                    value:values[nextindex++],
                    done:false
                }
            }else{
                return{
                    done:true
                }
            }
        }
    }
}

let arr=["apple","grapes","mango-magi","bal"];
const fruits=fruitsIterator(arr);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
// after completing printing of the elements in the array then it returns true..... before that it returned true


