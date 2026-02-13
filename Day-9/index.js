/**
 * 
 * 
 * 
 * 
 * 
 */

// function x(a){
//     console.log("X function");
//     a();

// }
// function y(){
//     console.log("y function");

// }
// x(y)

/**
 * anonymous functions in js:-
 * ---------------------------
 * a function which is not having a function name is known as a anonymous function
 * 
 * we just pass as a callback or to store in variable
 * sy:-
 * 
 * function([parameters]){
 * //statements
 * [return]
 * }
 * 
 * 
 */

// var sum=function (){
//     console.log("Hello there");

// }
// sum();

// function x(callback){
//     callback();
//     console.log("this is named function");

// }

// x(function (a,b){
//     console.log("this is anonymous function");
//     console.log(a+b);


// })

// function sum(callback1,callback2){
//     console.log("this is named function");
//     return callback1(10,20)+callback2(30,40);

// }
// var result=sum(
// function (a,b){
//     return a+b
// },
// function (a,b){
//     return a+b
// }

// )
// console.log(result);


/**
 * 
 * a function which is not having a function keyword and function name and it is denoted by => is known a arrow functions
 * 
 * it is a short hand property of anonymous function
 * it is used to perform asynchronous operations
 * the advantage of arrow function is implicit return type
 * 
 * 
 * 
 * 
 */

// var x=()=>{
//     console.log("hello there");

// }
// x();

// function print(callback) {
//     callback("hello")
    
// }
// print(a=> a)


/**
 * 
 * Callback in js
 * ---------------
 * a function defination which is passing as a argument to the another function calling is known as a callback
 * 
 * function defination:-
 * ---------------------
 * function fun_name(){
 * //statements
 * }
 * 
 * function_name();->fun calling
 * 
 * 
 */

function print(callback){
    console.log("hello There ");
    callback();
}


print(()=>console.log("Hi there"))





