import React, { useEffect, useState } from 'react'
import {app,database} from '../firebaseConfig';
import {collection,addDoc,
getDocs,
doc,
updateDoc,
deleteDoc,
onSnapshot
} from 'firebase/firestore';

export const FireStore = () => {
    const collectionRef=collection(database,'users');

    const [details,setDetails]=useState({
        email:'',
        password:''
    })

    const handleChange=(e)=>{
        e.preventDefault();
        const {name,value}=e.target;
        console.log('signUp',name,value)  
        setDetails({...details,[name]:value});     
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('first');

        // firebase ADD data
        addDoc(collectionRef,{
            email:details.email,
            password:details.password
        }).then(()=>{
            alert('Data added')
        }).catch(()=>{
            alert('Data not added')
        })
    }

    const getData=()=>{
        // getDocs(collectionRef)
        // .then((res)=>{
        //     console.log(
        //         res.docs.map((item)=>{
        //             return item.data();
        //             // return {...item.data(),id:item.id};
        //     }))
        // })
        // .catch(()=>{
        //     alert('Cannot get Data')
        // })
        onSnapshot(collectionRef,(data)=>{
            console.log(
                        data.docs.map((item)=>{
                            return item.data();
                 // return {...item.data(),id:item.id};
            }))
        })
    }

    const updateData=()=>{
        const docToUpdate=doc(database,'users','VOu9CSxijae73iATP9h1')
        updateDoc(docToUpdate,{
            email:'ABD360',
            // password:'007360',
            password:'007360'
        }).then(()=>{
            alert('Data Updated')
        }).catch(()=>{
            alert('Not Updated')
        })
    }

    const deleteData=()=>{
        
        const docToDelete=doc(database,'users','VOu9CSxijae73iATP9h1')
        deleteDoc(docToDelete).then(()=>{
            alert('Data Deleted')
        }).catch(()=>{
            alert('Not Deleted')
        })
    }

    useEffect(()=>{
        getData();
    },[])
  return (
    <div>
        <h1>Email & Password</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" name='email' value={details.email} onChange={handleChange}/>
            <input type="password" name='password' value={details.password} onChange={handleChange}/>
            {/* <input type="submit" /> */}
            <button type='submit'>Add Data</button>
        </form>
        <button onClick={getData}>Get Data</button>
        <button onClick={updateData}>Update Data</button>
        <button onClick={deleteData}>Delete</button>

    </div>
  )
}
