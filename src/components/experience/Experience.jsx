import React from 'react'
import "./experience.css"
import { BsPatchCheckFill } from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3 id='frontend_h3'>Frontend Development</h3>
          <div className="experience__content">

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
             <div>
             <h4>HTML</h4>
              <small className="text-light">Experienced</small>
             </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>


            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>BootStrap</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>


            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>Tailwind</h4>
              <small className="text-light">Experienced</small>
            </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>TypeScript</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
             <div>
              <h4>React</h4>
              <small className="text-light">Experienced</small>
             </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>NextJS</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>API</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

        

          </div>
        </div>

{/* ------------- BACKEND------------- */}
        <div className="experience__backend">

        <h3 id='backend_h3'>Backend Development</h3>
          <div className="experience__content">

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>NodeJs</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>MongoDB</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>


            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
             <div>
             <h4>Express</h4>
              <small className="text-light">Experienced</small>
             </div>
            </article>


            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>MySQL</h4>
              <small className="text-light">Experienced</small>
            </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
             <div>
             <h4>Python</h4>
              <small className="text-light">Experienced</small>
             </div>
            </article>


            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
             <div>
             <h4>Django</h4>
              <small className="text-light">Intermediate</small>
             </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Firebase</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Google Cloud</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Flask</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Heroku</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience