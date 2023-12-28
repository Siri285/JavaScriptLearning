alert('Hello World!');
alert("hello");
let myVar = "world";
console.log(typeof myVar);
myVar = 9;
console.log(typeof myVar);
myVar = true;
console.log(typeof myVar);
myVar = String(myVar);
console.log(typeof myVar);
myVar = "9";
console.log(typeof myVar);
myVar = Number(myVar);
console.log(typeof myVar);
let a = 5;
let b = 10;
let c = a > b;
let d = "10";
console.log(b !== d);
console.log(b != d);
console.log(b === d);
console.log(b == d);
console.log(a > b);
console.log(a < b);

if(b === d){
    console.log("equal :) TRUE");
    alert("oh yes");
}else if( b == d){
    console.log("equal but the type os different");
    alert("oh no");
}else{
    console.log("answer FALSE");
    alert("oh no");
}

//ternary

let e = (b === d) ? "TRUE Value": "FALSE Value";
let f = (b ==  d) ? "TRUE Value": "FALSE Value";

let firstName = prompt("What is your first name?");
let g = (firstName != "") ? alert("Welcome " + firstName):alert("It was balnk");
let x = 0;
while( x < 10){
    console.log('currently x is = ' + x);
     x++;
}

