import React from 'react'

const Card = () => {
    const userData=[
        {
            name:"Anand",
            img:"https://www.arabianbusiness.com/cloud/2021/09/15/FRR8uRBW-lost_valley-10.jpg",
            age:"22"
        },
        {
            name:"pakki",
            img:"https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/16:9/w_1280,c_limit/IMG%20Worlds%20of%20Adventure%20-%201.jpg",
            age:"25"
        }
    ]

    
  return (
    <div>Card
    {
        userData.map((el)=>(
            <div key={el.id}>
                {/*  if we provide key perticular or targeted  element make changes if make any chages*/}
                <h1>{el.name}</h1>
                <img src={el.img} alt="" width={"400px"}/>
                <p>{el.age}</p>
            </div>
        ))
    }
    </div>
  )
}

export default Card