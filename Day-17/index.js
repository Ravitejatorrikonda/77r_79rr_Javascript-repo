/**
 * JSON
 * 
 * Methods->GET, DELETE
 * 
 * 
 */

// const URL="http://localhost:3000/data"
// let options={"method":"DELETE"}

// fetch(URL,options).then(res=>console.log(res)).then(data=>console.log(data))

// fetch(URL,options).then(res=>{
//     if(res.ok){
//         console.log(res.status,res.statusText)
//     }else{
//         console.log("something went wrong");
        
//     }
// })

// const URL="http://localhost:3000/data"
// let options={
//     "method":"POST",
//     "headers":{
//         "content-Type":"application/json"
//     },
//     "body":JSON.stringify({
//         "id":"3",
//         "name":"surekha"
//     })
// }
// fetch(URL,options)
// .then(res=>{
//     if(res.ok){
//         console.log(res.status,res.statusText)
//     }else{
//         console.log("something went wrong");
        
//     }
// }).catch(res=>console.log(res))


// fetch("http://localhost:3000/data",{
//     "method":"POST",
//     "headers":{
//         "content-Type":"application/json"
//     },
//     "body":JSON.stringify({
//         "id":"4",
//         "name":"charan"
//     })
// }).then(res=>{
//     if(res.ok){
//         console.log(res.status,res.statusText)
//     }else{
//         console.log("something went wrong");
        
//     }
// })

// const URL="http://localhost:3000/data/4"
// let options={
//         "method":"PATCH",
//         "headers":{
//             "content-Type":"application/json"
//         },
//         "body":JSON.stringify({
            
//             "name":"Donkey"
//         })
// }
// fetch(URL,options).then(res=>{
//     if(res.ok){
//         console.log(res.status,res.statusText)
//     }else{
//         console.log("something went wrong")
//     }
// })

const URL="http://localhost:3000/data/3"
let options={
    "method":"PATCH",
    "headers":{
        "Content-Type":"application/json"
    },
    "body":JSON.stringify({
        "name":"Sandeep"
    })
}
fetch(URL,options).then(res=>{
    if(res.ok){
        console.log(res.status,res.statusText)
    }else{
        console.log("something went wrong");
        
    }
})

