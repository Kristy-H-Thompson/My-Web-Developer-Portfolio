import React from 'react'
import './header.css';
import {Button, DividerBottom} from '../../components';
import {profileImg, resume, github, linkedin, projects} from '../../assets'



const Header = () => {
  return (
        <header id="home">
            <div>
            <div className="accent">
                <img className="header-img" alt=" Kristy" src={profileImg} />
            </div>
            <DividerBottom />
            </div>
            <div className="header">
                <h1>Kristy Thompson</h1>
                <div className="title">Software Engineer</div>
                <hr/>
                <p>As a former teacher turned web developer, I bring a unique set of skills and experiences to each of my web development projects. My background in education has taught me the importance of user-centered designs, collaboration with colleagues, clear communication with clients, and intuitive designs. My philosophy is that a well-designed website should not only teach users about a product or company, but spark their curiosity.</p>
                <h4>Check out my: </h4>

                <div className="button-grid">
                <Button img={resume} type='button' alt="resume">Resume</Button>
                <Button img={github} type='button'  alt="github" link="https://github.com/Kristy-H-Thompson">Github</Button>
                <Button img={linkedin} type='button'  alt="linkedin" link="https://www.linkedin.com/in/kristy-thompson-372990243/">Linkedin</Button>
                <Button img={projects} type='button'  alt="projets" link="#projects">Projects</Button>
                </div>
            </div>
        </header>
  )
}

export default Header