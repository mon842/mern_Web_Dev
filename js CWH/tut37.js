// Callback functions--------------------------------------------------------

//pretend that the array is coming from the server
const students=
[{name:'sayak',subject:'Web Dev'},
{name:'sayak2',subject:'android Dev'}]

function enrollStudent(student,callback) 
{
    setTimeout(function() // settimeOut will do its job in the background after 5000 seconds 
    {
        students.push(student);    
        console.log("student is enrolled");
        callback();
    }, 5000);
}

function getStudent() {
    setTimeout(function() // settimeOut will do its job in the background after 3000 seconds 
    {
        let str="";
        students.forEach(function(student){
            str+=`<li>${student.name}</li>`
        })
        document.getElementById("students").innerHTML=str;   
        console.log("student is inserted in the html");  
    }, 1000);
}

let newStudent={name:"mia",subject:"python"}
enrollStudent(newStudent,getStudent)
// getStudent()

