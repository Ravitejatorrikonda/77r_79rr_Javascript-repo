/**
 * 
 * Array itrative methods:-
 * ---------------------------
 * foreach
 * map
 * filter
 * find
 * some
 * reduce
 * reduceright
 * 
 * 
 * 
 * 
 */

// let arr=[1,2,3,4,5, undefined, undefined, , ,]
// function print(){
//     console.log("hello")
// }
// arr.forEach(print)
// // for(i=0;i<arr.length;i++){
// //     console.log("hello There")
// // }

// let arr=[1,2,3,4,5,{"name":"ravi"}]
// arr.forEach(ele=>console.log(ele))

// i/p:-let arr=[1,2,3,4,5]
//o/p:-[1,4,9,16,25]

// let arr=[1,2,3,4,5]
// for(i=0;i<arr.length;i++){
    //   newarr.push(arr[i]**2)
    // }
    // console.log(newarr)
    
    // let newarr=[];
    // arr.forEach(ele=>newarr.push(ele **2))
    // console.log(newarr)

    // let arr=[1,2,3,4,5];
    // o/p:[odd,eve,odd,eve,odd]
    //     for(i=0;i<arr.length;i++){
        //         if(arr[i]%2==0){
            //             newarr.push("eve")
            //         }else{
                //             newarr.push("odd")
                //         }
                //     }
                // console.log(newarr);
                
                // let newarr=[];
                // arr.forEach(ele=>newarr.push(ele%2==0?"eve":"odd"))
                // console.log(newarr)

            //       let arr=[1,2,3,4,5];
            //    let newarr=arr.map(ele=>ele%2==0?"eve":"odd")
            //    console.log(newarr)

            // let arr=["html","css","bs","js"]
            // let newarr=arr.map(ele=>ele.toUpperCase())
            // console.log(newarr);

            let arr=[1,2,3,4,5]
            let newarr=arr.filter(ele=>ele%2==0);
            console.log(newarr)
            

