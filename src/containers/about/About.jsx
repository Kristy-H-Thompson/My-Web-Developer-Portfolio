import React from 'react'
import './about.css';
import {about} from '../../assets'
import {Intro, Techgrid} from '../../components'

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
          <p>As a full stack software engineer, I am passionate about creating immersive websites and apps that flawlessly blend form with function. My ever growing coding toolkit currently consists of HTML, CSS, JavaScript, React, Python, MySQL, Sass, Figma, Tailwind CSS, PhP. My passion for creating creative and exciting projects, drives me to continually explore new technologies and best practices for web development. </p>
          <Techgrid />
        </div>
    </section>
  )
}

export default About
