import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/moon.jpg"

const Portfolio = () => {
  return (
   <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG1} alt="Portfolio-image" />
        </div>
        <h3>Project Title</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com" className="btn" target='_blank'>Github</a>
        <a href="https://google.ca" className="btn btn-primary" target='_blank'>Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG1} alt="Portfolio-image" />
        </div>
        <h3>Project Title</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com" className="btn" target='_blank'>Github</a>
        <a href="https://google.ca" className="btn btn-primary" target='_blank'>Live Demo</a>
        </div>
      </article>


      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG1} alt="Portfolio-image" />
        </div>
        <h3>Project Title</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com" className="btn" target='_blank'>Github</a>
        <a href="https://google.ca" className="btn btn-primary" target='_blank'>Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG1} alt="Portfolio-image" />
        </div>
        <h3>Project Title</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com" className="btn" target='_blank'>Github</a>
        <a href="https://google.ca" className="btn btn-primary" target='_blank'>Live Demo</a>
        </div>
      </article>


      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG1} alt="Portfolio-image" />
        </div>
        <h3>Project Title</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com" className="btn" target='_blank'>Github</a>
        <a href="https://google.ca" className="btn btn-primary" target='_blank'>Live Demo</a>
        </div>
      </article>


      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG1} alt="Portfolio-image" />
        </div>
        <h3>Project Title</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com" className="btn" target='_blank'>Github</a>
        <a href="https://google.ca" className="btn btn-primary" target='_blank'>Live Demo</a>
        </div>
      </article>

    </div>
   </section>
  )
}

export default Portfolio