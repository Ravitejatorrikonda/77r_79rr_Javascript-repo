/**
 * 
 * 
 * 
 * 
 * 
 */

// function sum(val, callback) {
//     setTimeout(() => {
//         callback(val+10)
//     }, 3000);
// }
// function sub(val, callback) {
//    setTimeout(() => {
//     callback(val-5)
//    }, 1000);
// }
// function mul(val, callback) {
//     callback(val * 2)
// }
// function div(val, callback) {
//     callback(val / 2)
// }






// sum(10, (sumres) => {
//     console.log(sumres);
//     sub(sumres, (subres) => {
//         console.log(subres)
//         mul(subres, (mulres) => {
//             console.log(mulres);
//             div(mulres, (divres) => {
//                 console.log(divres);

//             })

//         })
//     })
// })





// console.log("start");
// setTimeout(() => {
//     console.log("first call");

// }, 5000);
// for(i=0;i<=50000;i++){
//     console.log("i");

// }
// setTimeout(() => {
//     console.log("second call");

// }, 3000);

// function sum(val,callback){
//     setTimeout(() => {
//         callback(val+10)
//     }, 4000);
// }
// sum(10,(sumres)=>{
//     console.log(sumres)
// })


function orderplaced(callback) {
    callback("Order placed")
}
function dispatch(callback) {
    callback("dispatch success")
}
function shipping(callback) {
    callback("shipping success")
}
function deliver(callback) {
    callback("delever success")
}
orderplaced((res1) => {
    console.log(res1);
    dispatch(res2 => {
        console.log(res2)
        shipping(res3 => {
            console.log(res3)
            deliver(res4 => console.log(res4))
        })
    })
})



