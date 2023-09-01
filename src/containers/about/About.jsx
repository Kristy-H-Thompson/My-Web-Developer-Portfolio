import React from 'react'
import './about.css';
import {about} from '../../assets'
import {Techgrid} from '../../components'

const About = () => {
  return (
    <section className="about" id="about">
        <div className="introduction">
        <h2>Who am I?</h2>
        <hr />
        <p>If you made it this far into my portfolio, you are probably curious about the person behind all of this code. <b>I am Kristy Thompson, a former teacher turned web developer.</b> My journey into the world of coding started as a creative endeavor with a group of close online friends. We would devise an idea for a project(such as Starstar), research how to make it happen, tackle coding challenges as a team, and joyously share the projects we created with others. This collaborative spirit remains one of my favorite aspects of coding even to this day. I believe an individual's skills in coding are important, but working collaboratively with your team is just as essential to the success of a project. What began as a hobby has resulted in a genuine passion for learning new technologies, writing code, and building projects.</p>
        <p>Outside of coding I also enjoy: </p>
        <ul>
          <li>hiking with my three rescue dogs</li>
          <li>reading every and any book I can get my hands on</li>
          <li>traveling to new places with friends</li>
          <li>and photographing my adventures</li>
        </ul>
        </div>

        <div>
        <img className="laptop" alt="laptop and books" src ={about}/>
        </div>


        <div className="tech"> 
          <h2>What do I do?</h2>
          <hr />
          <p>As a front-end software engineer, I am passionate about creating immersive websites and apps that flawlessly blend form with function. My ever growing coding toolkit currently consists of HTML, CSS, JavaScript, React, Python, MySQL, Sass, and Figma. My passion for creating creative and exciting projects, drives me to continually explore new technologies and best practices for web development. </p>
          <Techgrid />
        </div>
    </section>
  )
}

export default About