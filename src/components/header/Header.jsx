import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/menlarry.png"
import HeaderSocial from './HeaderSocials'

const Header = () => {

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className='fade-in'>Tony Nguyen</h1>
        <h5 className="typed text-light">Web Developer</h5>
        {<CTA />}
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="me" className='me__img'/>
        </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header