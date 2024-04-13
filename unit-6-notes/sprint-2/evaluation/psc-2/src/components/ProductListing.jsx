import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { getData } from '../api/api';

const getUrl = (apiUrl, search, filtering, sortingOrder) => {
    if (search) {
        apiUrl = apiUrl + `?q=${search}`
    }
    if (filtering) {
        apiUrl = apiUrl + `?category=${filtering}`
    }
    if (sortingOrder) {
        apiUrl = apiUrl + `?_sort=price&_order=${sortingOrder}`
    }
    return apiUrl;
}

const ProductListing = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 4;
    const [search, setSearch] = useState("");
    const [filtering, setFiltering] = useState("");
    const [sortingOrder, setSortingOrder] = useState("");

    // console.log(search);
    console.log(filtering)

    const getData = async (currentPage, search, filtering) => {
        try {
            setLoading(true);
            let apiUrl = `http://localhost:8080/products`;
            apiUrl = getUrl(apiUrl, search, filtering, sortingOrder);

            const res = await fetch(apiUrl);
            const jsonData = await res.json();
            console.log(jsonData);
            setData(jsonData);
            setLoading(false);
        } catch (error) {
            console.log(error);
            // setLoading(false);
            setError(true)
        }
    }

    // console.log(data.length)
    // o/p 20
    useEffect(() => {
        getData(currentPage, search, filtering, sortingOrder);
        // getData(data,setData,loading,setLoading,error,setError);
    }, [currentPage, search, filtering, sortingOrder]);

    // if(loading){
    //     return <h1>Loading... Please wait</h1>
    // we are maintaining two JSX
    // }
    return (
        <div>
            <h1>ProductListing</h1>
            {loading && <h1>Loading ...Please wait</h1>}
            {/* one JSX only */}
            <div>
                <button onClick={() => setCurrentPage(currentPage - 1)}>prev</button>
                <button>{currentPage}</button>
                <button onClick={() => setCurrentPage(currentPage + 1)}>next</button>
            </div>
            <div>
                <h1>Filter By Category</h1>
                <button onClick={() => setFiltering('clothing')}>Clotings</button>
                <button onClick={() => setFiltering('electronics')}>electronics</button>
                <button onClick={() => setFiltering('jewelery')}>jewelery</button>
            </div>
            <label htmlFor="">
                Asc
                <input type="radio" name="" id="" checked={sortingOrder === 'asc'} onChange={() => setSortingOrder('asc')} />
            </label>
            <label htmlFor="">
                Desc
                <input type="radio" name="" id="" checked={sortingOrder === 'desc'} onChange={() => setSortingOrder('desc')} />
            </label>
            <br />
            <label htmlFor="">
                <input type="text" placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
            </label>
            <br />
            <br />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)' }}>
                {data?.map((item, id) => {
                    return <ProductCard key={id} {...item} />
                })}
            </div>
        </div>
    )
}

export default ProductListing

// pagination
// total data
// data.length()
// 20

// 2/page-->data.length/2=10 pages