import React, { useState } from 'react'

const initialState={
    name:"",
    city:"",
    age:"",
    isMarried:"No"
}
const FormComponent = () => {

 const [formState,setFormState]=useState(initialState);
//  console.log(formState)
  const handleChange=(e)=>{
    //   console.log(e);
      const {name,value}=e.target;
      setFormState({...formState,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formState)
    // post api
    
    fetch(`http://localhost:8080/userData`, {
              method: "POST", // POST
              headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(formState), // body data type must match "Content-Type" header
        }).then((res)=>{
            console.log(`data is posted`)
        }).catch((error)=>{
            console.log("someting went wrong")
        })
        setFormState(initialState)
    }
    return (
    <div>
        <h1>Form Components</h1>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Name: </label>
            <input type="text" name='name' placeholder='Enter Name' value={formState.name} onChange={handleChange}/>
            <br />
            <br />
            <label htmlFor="">Age: </label>
            <input type="age" name='age' placeholder='Enter Name' value={formState.age} onChange={handleChange}/>
            <br />
            <br />
            <label htmlFor="">City: 
                <select name="city" value={formState.city} onChange={handleChange}>
                    <option value="">Select City</option>
                    <option value="bangalore">bangalore</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pure">Pure</option>
                    <option value="Kalkatta">Kalkatta</option>
                </select>
            <br />
            <br />
            <label htmlFor=""> 
            <input type="radio" name='isMarried' value={"Yes"} checked={formState.isMarried==="Yes"} onChange={handleChange}/>
            Yes
            </label>
            <label htmlFor="">
                <input type="radio" name='isMarried' value={"No"} checked={formState.isMarried==="No"} onChange={handleChange}/>
                No
            </label>
            
            </label>
            <br />
            <br />
            <input type="submit" name='' id=''/>
            
        </form>
    </div>
  )
}

export default FormComponent

/*
 * name:input tage
 * city:select tag
 * married:radio
 * age:input
 * 
 */