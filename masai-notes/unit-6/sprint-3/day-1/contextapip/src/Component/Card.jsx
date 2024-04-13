import React from "react";

const Card=(props)=>{
    console.log(props)
    return <div>
        <h1>Card</h1>
        <h1>{props.name}</h1>
    </div>;
}

export default Card;