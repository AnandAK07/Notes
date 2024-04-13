import React, { useState } from 'react'

const initialScore=0;
const initialBalls=0;
const initialOvers=0;
const ScoreBoard = () => {
    const [scoreBoard,setScoreBoard]=useState(initialScore)
    const [balls,setBalls]=useState(initialBalls);
    const [overs,setOvers]=useState(initialOvers)
    const handleScore=(value)=>{
        console.log("function called",value)
        setScoreBoard(scoreBoard+value);
        setBalls(balls+1);
    }
    const extraRun=(value)=>{
        setScoreBoard(scoreBoard+value)
    }

  return (
    <div>
        <h1>Score Board</h1>
        <h1>Score: {scoreBoard}</h1>
        <h1>Balls:{balls%6}</h1>
        <h1>Overs:{Math.floor(balls/6)}.{balls%6}</h1>
        <button onClick={()=>handleScore(0)}>Dot Ball</button>
        <button onClick={()=>handleScore(1)}>1</button>
        <button onClick={()=>handleScore(2)}>2</button>
        <button onClick={()=>handleScore(3)}>3</button>
        <button onClick={()=>handleScore(4)}>4</button>
        <button onClick={()=>handleScore(5)}>5</button>
        <button onClick={()=>handleScore(6)}>6</button>
        <button onClick={()=>extraRun(1)}>Wide Ball</button>
        <button onClick={()=>extraRun(1)}>No Ball</button>
    </div>
  )
}

export default ScoreBoard