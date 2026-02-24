/**
 * 
 * promises in js:-
 * ------------------
 * 
 * new Promise(Callback)
 * 
 * 
 */

// let print=new Promise((resolve,reject)=>{
//     resolve("Success")
//     // reject("failure")
// })
// print.then




// fetch("https://fakestoreapi.com/products")
// console.log(fetch())

// const URL="https://fakestoreapi.com/products"

// const URLS="https://fakestoreapi.com/products"

// fetch(URLS).then((res)=>{
//  return res.json();
// }).then(data=>console.log(data))



// const URL="https://fakestoreapi.com/products"
// fetch(URL).then(res=>res.json())
// .then(res1=>{
//     for(i=0;i<res1.length;i++){
//         console.log(res1[i].rating)
//     }
// })


const URL="https://dummyjson.com/quotes";

fetch(URL).then(res=>res.json())
.then(data=>{
    for(i=0;i<data.quotes.length;i++){
        console.log(data.quotes[i].id)
    }
})