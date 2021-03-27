//write a program to print the current date
date= new Date();

day= date.getDate();
month= date.getMonth() +1;
year= date.getFullYear();

op=day+"-"+month+"-"+year;
console.log(op);
