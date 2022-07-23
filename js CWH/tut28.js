/* prototype
# inheritance- accessing someone's data by someone else 
               working on an enviroment but accessing data from other file/s to work on this enviroment
# whenever we create an object or array or a function it attach objects (eg. length,etc){methods} to those objects or functions or arrays

# Array.__proto__ is a function prototype , Array.__proto__.__proto__ and arrCreated.__proto__.__proto__  is an object prototype,Array.__proto__.__proto__.__proto__ and arrCreated.__proto__.__proto__.__proto__  is null

# Object.__proto__ is an function prototype ,Object.__proto__.__proto__ and objectCreated.__proto__ is an object prototype ,Object.__proto__.__proto__.__proto__  is null
objectCreated.__proto__._proto__ is undefined

# Function.__proto__ and functionCreated.__proto__ is an function prototype ,Function.__proto__.__proto__and functionCreated.__proto__.__proto__ is an object prototype ,Function.__proto__.__proto__.__proto__  is null

it's like a prototype chain

*/

arrCreated=['sayak','the best']
let objectCreated=
{
    name:'sayak',
    hight:'6 feet',
    bio:function(){
        this.name='sayak basak';
        return this.name;
    }
}
function functionCreated(N){
    n=N
}
