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
          As a full-stack software engineer, I’m passionate about creating immersive websites and apps that blend form with function seamlessly. My skills span a variety of technologies such as HTML, CSS, JavaScript, React, Node.js, TypeScript, Python, MySQL, Sass, Figma, Tailwind CSS, and PHP. I’m driven by the excitement of building innovative, impactful projects and am constantly exploring new tools and best practices. With each project, I aim to craft seamless, user-friendly experiences, all while expanding my expertise to tackle new challenges and deliver scalable, high-quality solutions.      </p>          
        </div>
    </section>
  )
}

export default About
