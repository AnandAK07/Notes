import React from 'react'

const ConditionalRendering = () => {
  //conditionalRendering
  // true or false
  // if else = conditionalRendering
  let userStatus=true;
  let isAuth;
  if(userStatus){
    isAuth=<h1>Authenticated</h1>
  }else{
    isAuth=<h1>Not Authenticated</h1>
  }

  const arr=[1,2,3,4,]
  // for loop
  // high order function
  // map function -->return new array
  const output2=arr.map((el)=>(
    el*2
  ))
  console.log("mutated array:",output2)
  console.log(arr)
  // forEach function -->does not return any value-->it will change origin array
  const output1=arr.forEach((el)=>el*2);
  // console.log(output1);
  console.log(arr)
  //  const reeact=React.createElement("h1",{},"heandig from js")
    // JSX
    const heading=<h1>Heading from Js</h1>
    return (
    <div>
    <h1>ConditionalRendering</h1>
    {isAuth}
    {userStatus?<h1>"User is Autenticated"</h1>:"Not Autenticated"}
    {arr.map((el)=>(
      <div><h1 key={el.id}>{el}</h1></div>  
    ))}
    {output2}
    
    {heading}
    {/* {reeact} */}
    </div>
    
  )
}

export default ConditionalRendering