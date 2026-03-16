/**
 * 
 * Dom in js:-
 * ------------
 * ->getElementByid->
 * ->getElemenmtsByclassName->
 * ->querry selectore
 * ->Querryselectoreall
 * 
 * 
 * 
 */

// let div=document.getElementById("container")
// console.log(div);


// let div=document.getElementsByClassName("container")[0]
// console.log(div)

// let arr=[{id:"1"},{id:"2"},{id:"3"}]
// let container=document.getElementsByClassName("container")[0]
// arr.forEach(obj=>{
//     let p=document.createElement("p")
//     p.innerHTML=`
//     id: ${obj.id}

//     `
//     container.append(p)
// })

// async function fetchdata() {
//     let res = await fetch("http://localhost:3000/products");
//     let data = await res.json();
//     getdata(data)
// }

// function getdata(data) {
//     let container = document.getElementsByClassName("container")[0];
//     data.forEach(obj => {
//         let p = document.createElement("p")
//         p.innerHTML = `
//       <h3>ID : ${obj.id}</h3>
//       <p>Name : ${obj.name}</p>
      
//       `
//         container.appendChild(p)

//     });

// }




// fetchdata()


async function fetchData() {
    let res=await fetch("https://fakestoreapi.com/products")
    let data=await res.json();
    // console.log(data)
    getdata(data);
    
}


function getdata(data){
let container=document.getElementsByClassName("container")[0]
data.forEach(obj => {
    let p=document.createElement("p")
    p.innerHTML=`
    <h3>Id  : ${obj.id}</h3>
    <p>Price : ${obj.price}</p>
    <p>Description : ${obj.description}</p>
    <img src='${obj.image}'>
    
    `
    container.appendChild(p)
});

}
fetchData();





