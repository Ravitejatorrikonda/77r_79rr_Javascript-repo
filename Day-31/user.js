async function fetchdata() {
    let res = await fetch("http://localhost:3000/students")
    try {
        if (!res.ok) {
            throw new Error("Something went wrong");

        }
        let data=await res.json()
        showData(data)
    } catch (error) {
        console.log(error);

    }

}


function showData(data){
    let container=document.getElementById("container")
    data.forEach(ele => {
        let item=document.createElement("div")
        item.innerHTML=`
        <p>Id : ${ele.id}</p>
        <h3>Name : ${ele.name}</h3>
        <img src='${ele.img}'>
        
        `
        container.appendChild(item)
    });
}

document.addEventListener("DOMContentLoaded",fetchdata)