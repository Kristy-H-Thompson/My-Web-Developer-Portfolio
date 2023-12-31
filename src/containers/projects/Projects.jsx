import React from 'react'
import './projects.css'
import {Button, DividerTop, DividerBottom, Scroll} from '../../components';
import {github, projects, strayPaws, starstar, website} from '../../assets'
import { Outlet, Link } from "react-router-dom";




const Projects = () => {
  return (
    <>
    <DividerTop />
    <main className="projects" id="projects">
        <h2>Coding Projects</h2>
        <hr/>    
        <div className="projects-grid">



        <div className="project">
            <h3>Stray Paws</h3>
            <h4>Built using: HTML, CSS, Python, MYSQL, Flask, and Shelterluv API</h4>
            <hr/>
            <p>Stray Paws Rescue is a foster-based rescue located in Missouri. While transitioning their software solution from Rescue Groups to Shelterluv, they recognized a need for additional assistance. My team and I built them a new website that uses a Flask backend to create a flexible modular page design and API calls to load their adoptable animals in real time.</p>
            
            <div className="project-links">
            <Link to="/straypaws" onClick={Scroll}><Button img={projects} alt="Project Details" type='button' target="_self">Details</Button></Link>            
            <Button img={github} alt="Github" type='button'  link="https://github.com/Kristy-H-Thompson/Stray-Paws" target="_blank">Github</Button>
            <Button img={website} alt="Website" type='button'  link="https://www.straypawsrescue.com/" target="_blank">Website</Button>
            </div>

            <Link to="/straypaws" onClick={Scroll}><img alt="StrayPaws" className="mobile--project-img" src={strayPaws} /></Link>
        </div>
        <div className="projects-img--container"> 
            <Link to="/straypaws" onClick={Scroll}><img className="projects-img" alt="project 1 -- Straypaws" src={strayPaws} /></Link>
        </div>


        <div className="project">
            <h3>Starstar</h3>
            <h4>Built using: Python, MySQL, Discord, Disnake</h4>
            <hr/>
            <p>As a custom discord bot commission from a roleplaying website, Starstar represents the site’s mascot. She helps with server entertainment — games and sarcastic remarks — as well as utility functions: tracking points in the shop; adding and managing character information; creating topics and tracking posts.</p>

            <div className="project-links">
            <Link to="/starstar" onClick={Scroll}><Button img={projects} alt="Project Details" type='button' target="_self">Details</Button></Link>            
            <Button img={github} alt="Github" type='button'  link="https://github.com/Kristy-H-Thompson/Starstar-Website" target="_blank">Github</Button>
            <Button img={website} alt="Website" type='button'  link="https://starstarbot.netlify.app/" target="_blank">Website</Button>
            </div>

            <Link to="/starstar" onClick={Scroll}><img alt="Starstar" className="mobile--project-img" src={starstar} /></Link>
        </div>

        <div className="projects-img--container">
            <Link to="/starstar" onClick={Scroll}><img className="projects-img" alt="project 2 -- Starstar" src={starstar} /></Link>
        </div>


        </div>
    </main>  
    <DividerBottom />
    <Outlet />
    </>
  )
}

export default Projects     