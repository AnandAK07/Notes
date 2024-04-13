import React from 'react'
import './Projects.css'
import {portfolio} from '../../data'
import { ProjectItem } from '../../Components/ProjectItem'
import '../../App.css'
import '../../index.css'
import './Projects.css'

export const Projects = () => {
  return (
    <section className="portfolio section">
      <h2 className="section__title">My <span>Projects</span></h2>
      <div className="portfolio__container container grid">
        {portfolio.map((item)=>{
          return(<ProjectItem key={item.id} {...item}/>)
        })}
      </div>
    </section>
  )
}
