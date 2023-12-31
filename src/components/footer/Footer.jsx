import React from 'react'
import "./footer.css"
import {AiFillLinkedin,AiFillTwitterCircle,AiFillGithub} from "react-icons/ai"
import {FaEtsy} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>

      <a href="#" className='footer__logo'>TONY NGUYEN</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/tony-nguyen-6b3577165/"><AiFillLinkedin/></a>
        <a href="https://twitter.com/codingwithtony"><AiFillTwitterCircle/></a>
        <a href="https://github.com/TonyNguyy"><AiFillGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>@Tony's Portfolio. All rights reserved.</small>
      </div>
      
    </footer>
  )
}

export default Footer