import React, { useState } from "react";


const initialState={
    name:"",
    country:"",
    isMarried:"No",
};

const FormComponent=()=>{
    const [form,setForm]=useState(initialState);
    console.log(initialState);

    const handleFormData=(e)=>{
        console.log(e.target.value);
        setForm({...form,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <h1>Form Component</h1>
            <form action="">
                <label>Name:</label>
                <input type="text" name="name" onChange={handleFormData} value={form.name}/>
            </form>
            <br />
            <label>Contry:</label>
            <select name="county" id="">
                <option value="">Select Country</option>
                <option value="">INDIA</option>
                <option value="">USA</option>
                <option value="">CHINA</option>
                <option value="">UK</option>
            </select>
            <label htmlFor="">Married Status</label>
            <input type="radio" name="isMarried"/>
            <input type="radio" name="isMarried"/>
            <button>Submit</button>
        </div>
    )
}

export default FormComponent;


//input
/*
name-input
address-input
marriage status-radio
employed-checkbox
*/