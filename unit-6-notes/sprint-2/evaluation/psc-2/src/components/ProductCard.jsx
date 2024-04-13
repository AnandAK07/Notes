import React from 'react'

const ProductCard = ({id,title,category,description
,price,image,rating}) => {
  return (
    <div style={{border:'1px solid green'}}>
        <img src={image} alt="" width={200} height={200}/>
        <h2>Title:{title}</h2>
        <h3>Price:{price}</h3>
        <h3>Category:{category}</h3>
        <h3>Rating:{rating?.rate}</h3>
    </div>
  )
}

export default ProductCard