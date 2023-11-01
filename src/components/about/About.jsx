import React from 'react'
import "./about.css"
import ME from "../../assets/Tony-two.png"
import{FaAward } from "react-icons/fa"
import{BiUser} from "react-icons/bi"
import{VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About-Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
           
            <article className='about-card'> 
            <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>3+ Years of MERN stack</small>
            </article>

            <article className='about-card'> 
            <BiUser className="about__icon"/>
              <h5>Analytics</h5>
              <small>3+ of professional analytic experience</small>
            </article>


            <article className='about-card'> 
            <VscFolderLibrary className="about__icon"/>
              <h5>Honours Bachelor in</h5>
              <small>in Economics and Minor in Computer Science</small>
            </article>

          </div>

          <p>
          I'm a passionate economics and computer science student, always exploring the intriguing blend of data-driven insights and creative coding. Outside of my studies, I've found solace in meditation, helping me stay grounded and focused in our ever-changing world. I thrive on crafting elegant solutions to complex problems through code, relishing the thrill of turning ideas into reality. Whether I'm analyzing economic trends, creating software solutions, or enjoying a well-brewed cup of coffee, I'm on a continuous quest for knowledge, balance, and my next coding challenge.

</p>


          <a href="#contact" className="btn btn-primary"> Let's Talk</a>

        </div>


      </div>
    </section>
  )
}

export default About