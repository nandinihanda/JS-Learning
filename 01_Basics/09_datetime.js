let mydate=new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);


let date=new Date(2023,0,18)
console.log(date.toDateString());

let date1=new Date(2023,0,18,5,3)
console.log(date1.toLocaleString());

let date2=new Date("2023-01-18")
console.log(date2.toLocaleString());

let date3=new Date("01-18-2023")
console.log(date3.toLocaleString());

let time=Date.now()
console.log(time);
console.log(date3.getTime());
console.log(Math.floor(time/1000));


let newdate=new Date()
console.log(newdate);
console.log(newdate.getMonth());
console.log(newdate.getDay());