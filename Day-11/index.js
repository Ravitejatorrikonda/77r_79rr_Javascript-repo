/**
 * 
 * synchronus and asynchronus
 * --------------------------
 * 
 * 
 * 
 * 
 * 
 * 
 */

// function x() {
//     console.log(1);
//     console.log(2);

//     setTimeout(() => {
//         console.log(3);

//     }, 5000)
//     for (i = 0; i <=1000; i++) {
//         console.log(i);

//     }

//     console.log(4);

// }
// x()

// function print(sum){
// console.log("Deepika");
// console.log("Surekha");
// setTimeout(()=>{
//   return sum+20;
// },3000)
// console.log("bhanu");
// }
// console.log(print(50));




// function print(val, callback){
//     console.log("hi");
    
//     setTimeout(() => {
//         callback(val+10)
//     }, 3000);
//     console.log("there");
    
    
// }
// print(10,(a)=>{console.log(a)})


function sum(val, callback){
    callback(val+10)
    
}
// sum(10,(a)=>console.log(a))







function sub(val, callback){
    callback(val-5)
    
}


sub(20,a=>console.log(a))



function mul(val, callback){
   callback(val*2)
    
}

mul(10,a=>console.log(a))



function div(val, callback){
callback(val/2)

}


div(5,a=>console.log(a))






// sum(10)
// sub(20)
// mul(15)
// div(5);







