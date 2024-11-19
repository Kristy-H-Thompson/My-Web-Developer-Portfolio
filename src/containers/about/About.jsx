import React from 'react'
import './about.css';
import {about} from '../../assets'
import {Intro} from '../../components'

const About = () => {
  return (
    <section className="about" id="about">
        
        <Intro />

        <div>
        <img className="laptop" alt="laptop and books" src ={about}/>
        </div>


        <div className="tech"> 
          <h2>What do I do?</h2>
          <hr />
          <p>
          As a full stack software engineer, I am passionate about creating immersive websites and apps that seamlessly blend form with function. My ever-growing toolkit now includes a variety of technologies, such as HTML, CSS, JavaScript, React, Node.js, TypeScript, Python, MySQL, Sass, Figma, Tailwind CSS, and PHP. I am driven by a love for building innovative and impactful projects, constantly exploring new technologies, tools, and best practices to deliver high-quality, scalable solutions in web development.
          </p>          
        </div>
    </section>
  )
}

export default About
