// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";

// const Timer=()=>{
//     const [timer,setTimer]=useState(10);

//     useEffect(()=>{
//         const intervalId=setInterval(()=>{
//             console.log("inside useeffect:",Date.now());
//             // setTimer(timer-1);
//             setTimer((pre)=>{
//             //pre-1);
//                 if(pre<=1){
//                     clearInterval(intervalId);
//                     return 0;
//                 }
//                 return pre-1;
//             });
//         },1000);
//         //cleanup function (cb)
//         //return cf
        
//         //unmounting phase
//         const cleanup=()=>{
//             clearInterval(intervalId);
//         };
//         return cleanup;

//     },[]);
//     console.log(timer);//memory leackage
//     return (
//         <div>
//             <h1>Timer Component</h1>
//             <h2>Timer:{timer}</h2>
            
//         </div>
//     )
// }

// export default Timer;

// //setState a aysnc
// //setState takes a call function

// //toggling the timer
// //unmounting the component