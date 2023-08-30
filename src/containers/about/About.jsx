import React from 'react'
import './about.css';
import Laptop from '../../assets/laptop.png';

const About = () => {
  return (
    <section className="about" id="about">
        <div className="introduction">
        <h2>Who am I?</h2>
        <hr />
        <p>If you made it this far into my portfolio, you are probably curious about the person behind all of this code. I'm Kristy Thompson, a former teacher turned web developer. My journey into the world of coding started as a creative endeavor with a group of close online friends. We would devise an idea for a project(such as Starstar), research how to make it happen, tackle coding challenges as a team, and joyously share the projects we created with others. This collaborative spirit remains one of my favorite aspects of coding even to this day. I believe an individual's skills in coding are important, but working collaboratively with your team is just as essential to the success of a project. What began as a hobby has resulted in a genuine passion for writing code.</p>
        <p>Outside of coding, I also enjoy spending time with my three rescue dogs, reading every book I can get my hands on, and traveling.</p>
        </div>
        <img className="laptop" alt="laptop and books" src ={Laptop}/>
    </section>
  )
}

export default About