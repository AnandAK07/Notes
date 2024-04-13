import React from 'react'

const Posts = ({url,title,id}) => {
  return (
    <div>
        <img src={url} alt="" style={{width:"200px"}}/>
        <h3>{title}</h3>
        <h6>{id}</h6>
    </div>
  )
}

export default Posts