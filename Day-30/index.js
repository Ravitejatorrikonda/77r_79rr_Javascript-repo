/**
 * 
 * 
 * Events:-
 * -------
 * 
 * 
 * 
 */

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")

// btn1.onclick=()=>{
//     document.body.style.background="red";
//     btn2.remove();
// }


// btn1.addEventListener("click",()=>{
//     console.log("Hello There")
// })

btn1.addEventListener("click", async () => {
    let res = await fetch("https://fakestoreapi.com/products")
    let data = await res.json();
    //  console.log(data)
    showData(data);
})
function showData(data) {
    let container = document.getElementsByClassName("container")[0];
    data.forEach((obj, index) => {
        let p = document.createElement("p");
        p.innerHTML = `
       <h3> ID : ${obj.id}</h3>
       <p>title : ${obj.title}</p>
       <img src='${obj.image}'>
       <button id='delbtn${index}'>Delete</button>
       `
        container.append(p)
        let delbtn1 = document.getElementById(`delbtn${index}`)
        delbtn1.onclick = (index) => {
            console.log(index)
        }
    });

}
