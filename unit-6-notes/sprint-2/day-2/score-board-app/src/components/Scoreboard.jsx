import React, { useState } from 'react'
import Balls from './Balls';
import Runs from './Runs';

const Scoreboard = () => {
    const [score,setScore]=useState(0);
    const [balls,setBalls]=useState(0)
    // ScoreBoard component -origin

    // function hello(){
    //     console.log("hello")
    // }
    // hello();

    const handleRun=(val)=>{
      setScore(score+val)
    }
    
  return (
    <div>
        <h1>Score Board App</h1>
        <h1>Score: {score}</h1>
        {/* <ShowScore score={score}/>//parent to child */}
        <Balls balls={balls}/>
        <h1>Overs:{Math.floor(balls/6)}.{balls%6}</h1>
        <Runs handleRun={handleRun} setBalls={setBalls} balls={balls}/>
        <button>Reset Score Board</button>
    </div>
  )
}

export default Scoreboard