import React from 'react'
import Profile from '../../Assets/home.jpg'
import {Link} from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import '../../App.css'
import '../../index.css'
import './Home.css'

export const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className='home__img'/>
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Anand Kumar K.</span>Web Designer
          </h1>
          <p className="home__description">
            I'm Karnatak based web designer & front-end developer focused on 
            crafting clean & user-friendly experiences, I am passionate about
            building excellent software that improves the lives of those aroud me.
          </p>
          <Link to='/about' className='button'>
            More About Me{' '} <span className='button__icon'><FaArrowRight/></span>
          </Link>
        </div>
      </div>
      <div className="color__block">
        
      </div>
    </section>
  )
}
