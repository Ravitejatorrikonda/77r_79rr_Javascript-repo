/**
 *  
 * 
 * 
 * 
 */

// fetch("http://localhost:3000/data")
// .then(res => res.json())
// .then(data => console.log(data))

// const URL="http://localhost:3000/data/2"
// let options={"method":"DELETE"}





fetch("http://localhost:3000/data/2",{"method":"DELETE"})
.then(res=>{
    console.log(res.status, res.statusText);
})