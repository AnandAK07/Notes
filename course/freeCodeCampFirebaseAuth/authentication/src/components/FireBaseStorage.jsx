import React, { useState } from 'react'
import {app,storage} from '../firebaseConfig';
import {ref,
    uploadBytesResumable, 
    getDownloadURL 
} from "firebase/storage";

export const FireBaseStorage = () => {
    const [data,setData]=useState({})

    console.log(data)
    const handleSubmit=(e)=>{
        e.preventDefault();
        const storageRef = ref(storage, data.name);
        // const storageRef = ref(storage, `images/${data.name}`);
        const uploadTask = uploadBytesResumable(storageRef, data);
        uploadTask.on('state_changed',(snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        },
        (error) => {
            console.log(error.message)
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
            });
          }
        )
    }


  return (
    <div>
        <h1>Fire base Storage</h1>
        <form onSubmit={handleSubmit}>
            <input type='file' onChange={(event)=>setData(event.target.files[0])}/>
            <button type='submit'>Add Data</button>
        </form>
    </div>
  )
}
