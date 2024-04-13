import React from 'react'
import '../../App.css'
import './Contact.css'
import '../../index.css'
import {FaEnvelopeOpen,FaPhoneSquareAlt,
FaFacebookF,FaTwitter,FaYoutube,FaDribbble,FaLinkedin,FaGithub} from 'react-icons/fa'

import {FiSend} from 'react-icons/fi'

export const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">Get In <span>Touch</span></h2>
      
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>
          <p className="contact__description">
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon'/>
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">anandkumark055@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon'/>
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+91 8123483698</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://github.com/AnandAK07" className="contact__social-link">
            <FaGithub/>
            </a>

            <a href="https://www.linkedin.com/in/anandak07/" className="contact__social-link">
            <FaLinkedin/>
            </a>

            <a href="" className="contact__social-link">
            <FaTwitter/>
            </a>

            <a href="" className="contact__social-link">
              <FaDribbble/>
            </a>
          </div>
        </div>


        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text" placeholder='Your Name' className="form__control" required/>
            </div>

            <div className="form__input-div">
              <input type="email" placeholder='Your Email' className="form__control" required/>
            </div>

            <div className="form__input-div">
              <input type="text" placeholder='Your Subject' className="form__control" required/>
            </div>
          </div>

          <div className="form__input-div">
              <textarea placeholder='Your Message' className="form__control textarea" required></textarea>
          </div>

          <button className="button">
            Send Message 
            <span className="button__icon contact__button-icon">
              <FiSend/>
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}
