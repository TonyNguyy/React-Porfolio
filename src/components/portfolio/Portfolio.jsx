import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/moon.jpg"
import realtor from "../../assets/RealtorPicture.png"
import PriceHunter from "../../assets/PriceHunter.png"
import RenderAI from "../../assets/RenderAI.png"
import InfluenceHub from "../../assets/InfluenceHub.png"
import ReadyWeather from "../../assets/ReadyWeather.png"
import VirtualLibrary from "../../assets/VirtualLibrary.png"

const Portfolio = () => {
  return (
   <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={realtor} alt="Realtor-Website" />
        </div>
        <h3>Realtor Ecommerce Platform</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/TonyNguyy/React-Realtor" className="btn" target='_blank'>Github</a>
        <a href="https://tony-realtor.vercel.app/" className="btn btn-primary" target='_blank'>Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={PriceHunter} alt="Portfolio-image" />
        </div>
        <h3>PriceHunter</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/TonyNguyy/PriceHunter" className="btn" target='_blank'>Github</a>
        <a href="https://pricehunter.vercel.app/" className="btn btn-primary" target='_blank'>Live Demo</a>
        </div>
      </article>


      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={RenderAI} alt="Portfolio-image" />
        </div>
        <h3>RenderAI</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/TonyNguyy/RenderAI" className="btn" target='_blank'>Github</a>
        <a href="https://render-ai-image.vercel.app/" className="btn btn-primary" target='_blank'>Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={ReadyWeather} alt="Portfolio-image" />
        </div>
        <h3>Ready-Weather</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/TonyNguyy/Ready-Weather" className="btn" target='_blank'>Github</a>
        <a href="https://readyweather.vercel.app/" className="btn btn-primary" target='_blank'>Live Demo</a>
        </div>
      </article>


      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={InfluenceHub} alt="Portfolio-image" />
        </div>
        <h3>InfluenceHub</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/TonyNguyy/React-Media-Agency" className="btn" target='_blank'>Github</a>
        <a href="https://tony-agency.vercel.app/" className="btn btn-primary" target='_blank'>Live Demo</a>
        </div>
      </article>


      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={VirtualLibrary} alt="Portfolio-image" />
        </div>
        <h3>Virtual Library Database (SQL)
        </h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/TonyNguyy/Flask-Virtual-Library-Database" className="btn" target='_blank'>Github</a>
        </div>
      </article>

    </div>
   </section>
  )
}

export default Portfolio