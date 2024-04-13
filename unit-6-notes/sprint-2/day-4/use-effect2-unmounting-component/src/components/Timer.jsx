import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [timer,setTimer]=useState(10)

    useEffect(()=>{

        const intervalId=setInterval(()=>{
            console.log(`inside timer fun`,Date.now())

            setTimer((prev)=>{
                if(prev<=1){
                    clearInterval(intervalId)
                    return 0;
                }
                return prev-1;
            })
        },1000)
// readme 2 point
        // const cleanup=(()=>{
        //     clearInterval(intervalId);
        // })

        // return cleanup;
        // both are same
        return(()=>{
            clearInterval(intervalId)
        })
    },[])
    console.log(timer)
  return (
    <div>
        <h1>Timer:{timer}</h1>
    </div>
  )
}

export default Timer