// fetch("http://localhost:3000/data/2",{"method":"DELETE"}).then(res=>{
//     if(res.ok){
//         console.log(res.status,res.statusText)
//     }
//     else{
//         console.log("wrong")
//     }
// })
// const URL="http://localhost:3000/data/"
// let option={
//     "method":"GET"
// }
// fetch(URL,option)
// .then(res=>res.json())
// .then(data=>{
//     for(i=0;i<data.length;i++){
      
//         fetch(`http://localhost:3000/data/${data[i].id}`,{"method":"DELETE"})
//         .then(res=>{
//             if(res.ok){
//                 console.log("Deleted",res.status,res.statusText);
                
//             }else{
//                 console.log("Not Deleted");
                
//             }
//         }).catch(res=>console.log(res))
        
//     }
// })


// let data=[
//     {
//         "id":"1",
//         "name":"Rajesh"
//     },
//     {
//         "id":"2",
//         "name":"anvesh"
//     },
//     {
//         "id":"3",
//         "name":"avesh"
//     },
// ]

// let options={
//     "method":"POST",
//     "headers":{
//         "Content-type":"application/json"
//     }
// }
// for(i=0;i<data.length;i++){
//     // console.log(data[i]);
//     let obj=data[i];
//     options.body=JSON.stringify(obj)
//     fetch("http://localhost:3000/data/",options)
//     .then(res=>{
//         if(res.ok){
//             console.log("Posted",res.status,res.statusText)
//         }else{
//             console.log("Data not posted");
            
//         }
//     })
    
// }
