import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard';

export const ProductListing = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
    const [data,setData]=useState([])

    const getData = async () => {
        try {
            setLoading(true);
            const res = await fetch(`http://localhost:8080/products`);
            const jsonData = await res.json();
            console.log(jsonData)
            setData(jsonData)
            setLoading(false)
        } catch (error) {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    // if(loading){
    //     return <h1>Loading... please wait</h1>
    // }
    return (
        <div>
            <h1>ProductListing</h1>
            {loading && <h1>Loading... please wait</h1>}
            {data?.map((item)=>{
                return <ProductCard key={item.id} {...item}/>
            })}
        </div>
    )
}
