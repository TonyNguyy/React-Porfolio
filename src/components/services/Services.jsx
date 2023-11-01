import React from 'react'
import "./services.css"
import { BsCheck } from 'react-icons/bs'

const Services = () => {
  return (
    <section id='service'>
      <h5>Work</h5>
      <h2>Experience</h2>

      <div className="container services__container">

        <article className="service">
          <div className="service__head">
            <h3>Junior Consultant | The Knowledge Academy</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon"/>
              <p>SQL Database Management</p>
            </li>

            <li>
              <BsCheck className="service__list-icon"/>
              <p>Tableau Data Visualization</p>
            </li>

            <li>
              <BsCheck className="service__list-icon"/>
              <p>A/B Testing</p>
            </li>


            <li>
              <BsCheck className="service__list-icon"/>
              <p>Data Analysis</p>
            </li>


            <li>
              <BsCheck className="service__list-icon"/>
              <p>Team Leadership and Collaboration</p>
            </li>

            <li>
              <BsCheck className="service__list-icon"/>
              <p>Adaptability</p>
            </li>
          </ul>
        </article>

      {/* --------END OF UI------ */}

      <article className="service">
          <div className="service__head">
            <h3>Investment Representative | HSBC</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon"/>
              <p>Mircosoft Excel for data entry and management</p>
            </li>

            <li>
              <BsCheck className="service__list-icon"/>
              <p>Client Relationship Building</p>
            </li>

            <li>
              <BsCheck className="service__list-icon"/>
              <p>Mutual Fund and Investment understanding</p>
            </li>


            <li>
              <BsCheck className="service__list-icon"/>
              <p>Conflict Mediation</p>
            </li>


            <li>
              <BsCheck className="service__list-icon"/>
              <p>Effective Communication</p>
            </li>

            <li>
              <BsCheck className="service__list-icon"/>
              <p>Interpersonal Skills</p>
            </li>

           
          </ul>
        </article>

      {/* --------END OF WEB DEVELOPER------ */}

      <article className="service">
          <div className="service__head">
            <h3>Infantry Reservist | Toronto Scottish Regiment</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon"/>
              <p>"Best Candidate" at Basic Military for team work and performance</p>
            </li>

            <li>
              <BsCheck className="service__list-icon"/>
              <p>Mentorship for junior soldiers</p>
            </li>

            <li>
              <BsCheck className="service__list-icon"/>
              <p>Adaptability in high-stress environment</p>
            </li>


            <li>
              <BsCheck className="service__list-icon"/>
              <p>Time Management</p>
            </li>


            <li>
              <BsCheck className="service__list-icon"/>
              <p>Stress Management</p>
            </li>

          </ul>
        </article>

      {/* --------END OF CONTENT------ */}


      </div>
    </section>
  )
}

export default Services