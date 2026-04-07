/**
 * 
 * BOM(Browser Object Model):-
 * -----------------------------
 * 
 * 
 */
let resultWindow;
function openWindow() {
    resultWindow = window.open("", "", "width=500px, height=500px");
    resultWindow.document.writeln(`
        <!DOCTYPE html>
        <html>
        <head><style>
        h3{
        color:green;
     }
        </style></head>
        <body>
        <h3>hello</h3>
        </body>
        </html>

        
        `)



    // window.setTimeout(() => {
    //     resultWindow.close();
    // }, 5000)

}

// function closeWindow(){
//    let flag= window.confirm("Do you want close ? "+resultWindow)
//    if(flag){
//     resultWindow.close();
//    }else{
//     window.alert("Thank You!")
//    }
// }


// window.setInterval(()=>{
//     window.location.reload();
// },1000)

// let result = null;
// function startData() {
//     let i = 1;
//     result = window.setInterval(() => {
//         let date=new Date();
//         console.log(`HH : ${date.getSeconds()}`)
//     }, 1000)

// }
// function stopData() {
//     window.clearInterval(result)
// }



// localStorage.setItem("name","Sujatha")
// console.log(localStorage.getItem("name"))

function saveData(){
    let input=document.getElementById("input")
    localStorage.setItem("NAME",input.value)
}