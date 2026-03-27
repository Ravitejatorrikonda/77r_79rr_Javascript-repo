async function fetchData() {
    let res = await fetch("http://localhost:3000/students")
    try {
        if (!res.ok) {
            throw new Error("something went wrong")
        }
        let data = await res.json()
        // console.log(data)
        showData(data)
    } catch (error) {
        console.log(error)
    }

}

function showData(data) {
    let container = document.getElementById("container")
    let item = document.createElement("div")
    item.innerHTML = data.map((student) => {
        return ` 
   <p>Id :${student.id}</p>
   <p>Name : ${student.name}</p>
   <button id='delbtn${student.id}'>Delete</button>
   <button id='editbtn${student.id}'>Edit</button>
   `

    }).join("")

    container.appendChild(item)

    data.forEach(student => {
        let delbtn = document.getElementById(`delbtn${student.id}`)
        let editbtn = document.getElementById(`editbtn${student.id}`)
        delbtn.onclick = () => {
            // console.log(student.id)
            deleteData(student.id);
        }
        editbtn.onclick = () => {
            // console.log(student.id)
            editData(student.id);
        }

    });



}

//Delete Data

async function deleteData(id) {
    let res = await fetch(`http://localhost:3000/students/${id}`, { "method": "Delete" })
    if (res.ok) {
        alert("Data Deleted successfully")
    } else {
        console.log("data no Deleted")
    }
}


//Editing the Data

async function editData(id) {
    let studentId = document.getElementById("id")
    let name = document.getElementById("name")
    let image = document.getElementById("image")
    let res = await fetch(`http://localhost:3000/students/${id}`)
    let data = await res.json();

    studentId.value = data.id
    name.value = data.name
    image.value = data.img;

}




//Saving Data

async function saveData() {
    let studentId = document.getElementById("id").value
    let name = document.getElementById("name").value
    let image = document.getElementById("image").value
    let obj = {
        "name": name,
        "img": image
    }
      let stmethod=studentId?"PUT":"POST"
      let URL=studentId?`http://localhost:3000/students/${studentId}`:"http://localhost:3000/students"
    let res = await fetch(URL, {
        "method": stmethod,
        "headers": {
            "content-type": "application/json"
        },
        "body": JSON.stringify(obj)


    })

    if (res.ok) {
        alert("data upadted successfully")
    }

}




document.addEventListener("DOMContentLoaded", fetchData)