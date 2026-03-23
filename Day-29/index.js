// /**
//  * 
//  * 
//  * 
//  * 
//  */

// async function getData() {
//     let res = await fetch("https://fakestoreapi.com/products")
//     let data = await res.json();
//     // console.log(data)
//     showdata(data)
// }

// function showdata(data){
//     let container=document.getElementById("container")
//     data.forEach(obj => {
//       let p=document.createElement("p");
//       p.innerHTML=`
//       <p>ID : ${obj.id}</p>
//       <p>Title : ${obj.title}</p>
//       <img src='${obj.image}'>
//       `
//       container.append(p)
//     });
// }
// getData()


function showWeather(){
    let input=document.getElementById("input")
    // console.log(input.value);
    getWeather(input.value)
    
}
async function getWeather(city){
    const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f2a9ec4dd7mshb2ceeb0706a4475p1eb426jsnb14d36b9faee',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	// console.log(result.main.temp);
    show(result.main.temp)
} catch (error) {
	console.error(error);
}

}
function show(data){
    let container=document.getElementById("container")
    container.innerHTML=`
    <h3>Current Weather : ${data}</h3>
    `
    
}


