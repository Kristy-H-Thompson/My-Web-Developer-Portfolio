import React from 'react'
import './about.css';
import {about, css, html, figma, figmatwo, javascript, react, mysql, sass, python} from '../../assets'

const About = () => {
  return (
    <section className="about" id="about">
        <div className="introduction">
        <h2>Who am I?</h2>
        <hr />
        <p>If you made it this far into my portfolio, you are probably curious about the person behind all of this code. I'm Kristy Thompson, a former teacher turned web developer. My journey into the world of coding started as a creative endeavor with a group of close online friends. We would devise an idea for a project(such as Starstar), research how to make it happen, tackle coding challenges as a team, and joyously share the projects we created with others. This collaborative spirit remains one of my favorite aspects of coding even to this day. I believe an individual's skills in coding are important, but working collaboratively with your team is just as essential to the success of a project. What began as a hobby has resulted in a genuine passion for writing code.</p>
        <p>Outside of coding, I also enjoy spending time with my three rescue dogs, reading every book I can get my hands on, and traveling.</p>
        </div>
        <img className="laptop" alt="laptop and books" src ={about}/>

        <div>
          <h2>What do I do?</h2>
          <hr />
          <p>Little paragraph coming soon</p>

          <div className="tech-grid">
              <img alt={html} src="" />
              <img alt={css} src="" /> 
              <img alt={javascript} src="" />
              <img alt={react} src="" />
              <img alt={python} src="" />
              <img alt={mysql} src="" /> 
              <img alt={sass} src="" />
              <img alt={figma} src="" />
          </div>
        </div>
    </section>
  )
}

export default About