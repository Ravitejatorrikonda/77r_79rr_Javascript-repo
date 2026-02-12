/**
 * 
 * 
 * 
 * 
 */
// var a;
// function sum(){
//     var a=10;
//     console.log(x);
//     return "hello there"
//     var x=10;

// }
// sum();
// console.log(a);


// function one(a, b){
//     two(a,b)
//     return a+b
// }
// function two(a,b){
// return a+b
// }
// console.log(one(12,14)+two(14,12));//52

/**
 * 
 * Callback function in js:-
 * ---------------------------
 * a function which is passing argument to the another function defination
 * a function defination which passed as a argument to the another function is known as callback function
 * 
 * mainly it is used as a to perform a asynchronous operation
 * 
 * 
 * function one(){
 * //statements
 * }
 * function two(){
 * //statements
 * }
 * 
 * one(two)->callback
 * 
 * 
 * 
 */




// function print1(callback) {
//     console.log("Hello");
//     callback();

// }


// print1(
//     function print2() {
//     console.log("Hi");
// }
// );


function x(callback1,callback2){
    console.log("x function");
    console.log(callback1(10,20));
    
    callback2();
    
}
function y(a,b){
    console.log("Y function");
    return a+b
    
    
}
function z(){
    console.log("Z function");
    
}

x(y,z);


