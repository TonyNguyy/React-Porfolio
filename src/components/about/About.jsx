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
              <small>3+ Years Working</small>
            </article>

            <article className='about-card'> 
            <BiUser className="about__icon"/>
              <h5>Clients</h5>
              <small>3+ Years Working</small>
            </article>


            <article className='about-card'> 
            <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>

          </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis hic, velit nam illum dolorem cupiditate tempora nostrum enim sequi sit? Vero ullam obcaecati rerum 
            quo praesentium provident labore numquam hic?</p>


          <a href="#contact" className="btn btn-primary"> Let's Talk</a>

        </div>


      </div>
    </section>
  )
}

export default About