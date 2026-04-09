/**
 * 
 * foreach, map, filter, splice
 * 
 * 
 */

async function fetchData() {
    let res = await fetch("http://localhost:3000/products")
    try {
        if (!res.ok) {
            throw new Error("Something wentr wrong");

        }
        let data = await res.json();
        // console.log(data)

        localStorage.setItem("Products", JSON.stringify(data))//local storeage
        displayData(data)
    } catch (Error) {
        console.log("DATA Mismatch")
    }

}

// Filtering Data


function filteringData() {
    let products = JSON.parse(localStorage.getItem("Products"))

    let datas = products.map(product => product.category)
    //    console.log(datas);
    let set = new Set(datas)
    // console.log(set)
    let filterDatas = Array.from(set)
    // console.log(filterData)
    let btncontainer = document.getElementById("btn-Container")
    filterDatas.forEach(obj => {

        let btn = document.createElement("button")
        btn.textContent = obj
        // console.log(obj)
        btn.onclick = () => {
            filterData(obj)
        }
        btncontainer.appendChild(btn)

    })

}


//Filter data

function filterData(category) {
    // let cat = window.prompt();
    let products = JSON.parse(localStorage.getItem("Products"))
    let filteredData = products.filter(product => product.category == category)
    //  console.log(filteredData)
    displayData(filteredData)
}



function displayData(products) {
    let container = document.getElementById("container")
    container.innerHTML = ""
    // let products = JSON.parse(localStorage.getItem("Products")) || []
    if (products.length == 0) {
        fetchData();
    } else {
        products.forEach((obj, index) => {
            let item = document.createElement("div")
            item.innerHTML = `
                <h3>ID : ${obj.id}</h3>
                <p>Name : ${obj.name}</p>
                <img src=${obj.img}>
                <button onclick="deleteData(${index})">Delete</button>
                `
            container.appendChild(item)
        });
    }

}

//Delete Data
function deleteData(index) {
    // console.log(index)


    let products = JSON.parse(localStorage.getItem("Products")) || []
    products.splice(index, 1)
    localStorage.setItem("Products", JSON.stringify(products))
    displayData(products);
}









// fetchData();
window.onload = () => {
    let products = JSON.parse(localStorage.getItem("Products")) || []
    if (products.length == 0) {
        fetchData()
    } else {
        displayData(products)
        filteringData()
    }
}
