/**
 * 
 * 
 * 
 */


// function print(a, b) {
//     try {
//         throw new Error("something went wrong")
//         console.log("fun stoped")
//     } catch (err) {
//         console.error(err.message)
//     }


// }
// print(10, 0);

/**
 * Async and await:-
 * -------------------
 * to overcome the promises in js and it is performed asynchronous operations
 * 
 * 
 * 
 */


// function print(){
//     return new Promise((resolve,reject)=>{
//         resolve("success")
//     })
// }
// // console.log(print())
// // print().then(res=>console.log(res))

//  async function display(){
//     return "Hello There"
// }
// console.log(display());
// display().then(res=>console.log(res))

// async function print() {
//    let res= await "hello there"
//    console.log(res)
// }
// console.log(print())



async function print() {
    let res = await fetch("http://localhost:5000/data")
    try {
        if(!res.ok){
            throw new Error("Something went wrong");
            
        }
        let data=await res.json();
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}
print();

/**
 * 
 * 
 * DOM:-
 * document object model
 * 
 * 
 * 
 */

/**
 * 
 * functions
 * scopes
 * callbackhell
 * synchronus asyn
 * callstack
 * promises
 * json
 * fetch
 * get post put patch Delete
 * array methods
 * array itrative methods
 * exception async and await
 * 
 * Dom->evenets clousers BOM
 * 
 * 
 * 
 * 
 * 
 */