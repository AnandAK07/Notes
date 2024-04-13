import React from 'react'

// function declaration
// const DefaultExport = (props) => {
//     return (
//     <div>
//         function defiction
//     </div>
//   )
// }
const DefaultExport = (props) => {
    //destructuring
    const {name,age}=props;

    return (
    <div>
        <h1>DefaultExport</h1>
        <p>{props.name}</p>
        <p>{props.age}</p>
        <p>{name}</p>
    </div>
  )
}

export default DefaultExport