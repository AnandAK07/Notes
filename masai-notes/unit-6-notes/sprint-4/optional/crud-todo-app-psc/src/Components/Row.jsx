import React from 'react'

const Row = ({id,title,status}) => {
  return (
    <div key={id} style={{display:'flex',justifyContent:"space-around",alignItems:'center'}}>
      <h6>id</h6>
    </div>
  )
}

export default Row