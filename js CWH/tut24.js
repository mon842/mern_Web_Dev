// Date function
let today=new Date();
today=String(today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear()+" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds());
console.log(today);
// let OtherDate=new Date('4-8-2002 12:00');// month-date-year

// OtherDate=new Date('dec 25 2018');

// OtherDate=new Date('12/2/2021 19:23:09:01');//MM/DD/YYYY
// console.log(OtherDate);

// //getting time info from the date object above set by u
// a=OtherDate.getTime();
// a=OtherDate.getFullYear();
// a=OtherDate.getMonth()+1;// month gives one less
// a=OtherDate.getDate();
// a=OtherDate.getHours();
// a=OtherDate.getMinutes();
// a=OtherDate.getSeconds();
// a=OtherDate.getMilliseconds();
// a=OtherDate.getDay();
// console.log(a); //

// //setting time info from the date
// a=OtherDate.setTime(1);
// a=OtherDate.setFullYear(2022);
// a=OtherDate.setMonth(3);// month should be set one less 
// a=OtherDate.setDate(12);
// a=OtherDate.setHours(12);
// a=OtherDate.setMinutes(11);
// a=OtherDate.setSeconds(23);
// a=OtherDate.getMilliseconds(22);
// a=OtherDate.getDay(2);
// console.log(a); //
// console.log(OtherDate);
