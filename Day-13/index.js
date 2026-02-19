/**
 * 
 *
 * Promises in js:-
 * -----------------
 * promises is ntg but state of behaviour to perform success and failure states
 * promises are mainloy used to perform asynchronoyus operations
 * ->to overcome the callback hells
 * 
 * sy:-
 * 
 * 
 * variable identifier=new Promise(callback) 
 * 
 */


// let a=10;
// console.log(a);


// let promise1=new Promise((reject,resolve)=>{
// reject("Failure")
// })

// promise1.then((res)=>{console.log(res)}).catch(res=>console.log(res))

// function x(){
//     return new Promise((resolve,reject)=>{
//               resolve("success")
//     })
// }
// // console.log(x());
// x().then(res=>console.log(res)).catch(res=>console.log(res))

// function A(){console.log("A")}
// setTimeout(() => {
//     console.log("B");

// }, 5000);
// let promise=new Promise(resolve=>{
//     resolve("Promise")
// })
// promise.then(res=>console.log(res))
// A()


// Promise.resolve("success").then(res=>console.log(res))
// Promise.reject("Failure").catch(res=>console.log(res))



// function sum(val) {
//     return new Promise((resolve, reject) => {
//         resolve(val + 10)
//     })
// }
// function sub(val) {
//     return new Promise((resolve, reject) => {
//         resolve(val - 5)
//     })
// }
// function mul(val) {
//     return new Promise((resolve, reject) => {
//         resolve(val * 2)
//     })
// }
// function div(val) {
//     return new Promise((resolve, reject) => {
//         resolve(val / 2)
//     })
// }




// sum(10).then(res=>console.log(res))
// sub(20).then(res=>console.log(res))
// mul(15).then(res=>console.log(res))
// div(30).then(res=>console.log(res))


// sum(10).then(sumres => {
//     console.log(sumres)
//     sub(sumres).then((subres) => {
//         console.log(subres);
//         mul(subres).then(mulres => {
//             console.log(mulres)
//             div(mulres).then(divres => {
//                 console.log(divres)
//             })
//         })
//     })
// })



let promise1 = new Promise((resolve, reject) => {
    console.log("Promise 1");
    setTimeout(() => {
        resolve("success 1")
    }, 3000);

})


let promise2 = new Promise((resolve, reject) => {
    console.log("Promise 2");
    setTimeout(() => {
        resolve("success 2")
    }, 1500);
})
let promise3 = new Promise((resolve, reject) => {
    console.log("Promise 3");
    setTimeout(() => {
        resolve("success 3")
    }, 1000);
})

promise1.then(res => {
    console.log(res)
    promise2.then(res => {
        console.log(res)
        promise3.then(res => {
            console.log(res)
        }
        )
    })
})





