/**
 * 
 * 
 */

// let div1=document.createElement("div")
// div1.innerText="<i style='color:red;'>Javascript</i>";
// console.log(div1)

// let div2=document.createElement("div");
// div2.innerHTML="<i style='color:red;'>javascript</i>";
// console.log(div2)
// document.body.append(div1, div2);

// let div=document.createElement("div")
// div.id="main";
// div.className="container";
// div.setAttribute("name","value");
// console.log(div)

// let arr = ["raju", "ranveer", "swathi", "gopi", "thanmay", "yamuna"];

// let container = document.createElement("div")
// arr.forEach(ele => {
//     let p = document.createElement("p")
//     p.innerHTML = ele
//     container.append(p)

// })

// for(i=0;i<arr.length;i++){
//     let p=document.createElement("p")
//     p.innerHTML=arr[i]
//     container.append(p)
// }

// for(let data of arr){
//     let p=document.createElement("p")
//     p.innerHTML=data;
//     container.append(p)
// }

// for(let data in arr){
//     let p=document.createElement("p")
//   p.innerHTML=arr[data];
//   container.append(p)

// }



// document.body.appendChild(container)
// console.log(container)


const students = [
  {
    id: 1,
    name: "Rahul",
    age: 21,
    course: "Full Stack",
    marks: 85
  },
  {
    id: 2,
    name: "Priya",
    age: 22,
    course: "Java",
    marks: 78
  },
  {
    id: 3,
    name: "Arjun",
    age: 20,
    course: "Python",
    marks: 92
  },
  {
    id: 4,
    name: "Sneha",
    age: 23,
    course: "React",
    marks: 88
  },
  {
    id: 5,
    name: "Kiran",
    age: 21,
    course: "NodeJS",
    marks: 75
  },
  {
    id: 6,
    name: "Anjali",
    age: 22,
    course: "Angular",
    marks: 81
  },
  {
    id: 7,
    name: "Ravi",
    age: 24,
    course: "Java",
    marks: 69
  },
  {
    id: 8,
    name: "Divya",
    age: 20,
    course: "Python",
    marks: 90
  },
  {
    id: 9,
    name: "Vikram",
    age: 23,
    course: "React",
    marks: 73
  },
  {
    id: 10,
    name: "Meena",
    age: 21,
    course: "Full Stack",
    marks: 87
  }
];

//o/p:-name:Name id: ids  course: course;




// let container=document.createElement("div")
// container.id="main"
// students.forEach(obj=>{
//     let p=document.createElement("p")
//     p.innerHTML=`
//     <h3>ID : ${obj.id}</h3>
//     <h4>Name :${obj.name}</h4>
//     <p>Course:${obj.course}</p>
//     `
//     container.append(p)
// })
// document.body.append(container)


let arr=["home","about","c.no","project"]
let table=document.createElement("table")
let tr=document.createElement("tr")
table.style.border="1px solid" 
table.cellpadding="5"
table.appendChild(tr)
for(let ar of arr){
    let td=document.createElement("td")
    td.innerText=ar;
    tr.appendChild(td)
}
document.body.appendChild(table)
