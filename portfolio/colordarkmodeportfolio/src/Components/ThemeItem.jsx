import React from 'react'
import '../App.css'
import '../index.css'

export const ThemeItem = ({color,img,changeColor}) => {
  return (
    <img src={img} alt="" className="theme__img" onClick={()=>changeColor(color)}/>
  )
}
