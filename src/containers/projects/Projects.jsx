import React from 'react'
import './projects.css'
import {Button, DividerTop, DividerBottom} from '../../components';
import {figma, github, projects, strayPaws, starstar, website} from '../../assets'



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
            <h4>Built using: HTML, CSS, Javascript, Shelterluv API, Python, and Flask</h4>
            <hr/>
            <p>Stray Paws Rescue is a foster-based rescue located in Missouri. While transitioning their software solution from Rescue Groups to Shelterluv, they recognized a need for additional assistance. My team and I built them a new website that uses a Flask backend to create a flexible modular page design and API calls to load their adoptable animals in real time.</p>
            
            <div className="project-links">
            <Button img={projects} alt="Project Details" type='button' link="https://github.com/Kristy-H-Thompson"> target="_blank"Details</Button>
            <Button img={website} alt="Website" type='button'  link="https://www.straypawsrescue.com/" target="_blank">Website</Button>
            <Button img={figma} alt="Figma" type='button'  link="https://www.figma.com/file/X035LUo2Nby6tfYuStSrUO/Stray-Paws?type=design&node-id=0%3A1&mode=design&t=SKpkQkMv3Qk17JAJ-1" target="_blank">Figma</Button>
            </div>

            <img alt="StrayPaws" className="mobile--project-img" src={strayPaws} />
        </div>
        <div className="projects-img--container"> 
            <img className="projects-img" alt="project 1 -- Straypaws" src={strayPaws} />
        </div>


        <div className="project">
            <h3>Starstar</h3>
            <h4>Built using: Python, MySQL, Discord, Disnake</h4>
            <hr/>
            <p>As a custom discord bot commission from a roleplaying website, Starstar represents the site’s mascot. She helps with server entertainment — games and sarcastic remarks — as well as utility functions: tracking points in the shop; adding and managing character information; creating topics and tracking posts.</p>

            <div className="project-links">
            <Button img={projects} alt="Project Details" type='button'  link="https://github.com/Kristy-H-Thompson" target="_blank">Details</Button>
            <Button img={website} alt="Website" type='button'  link="https://github.com/Kristy-H-Thompson" target="_blank">Website</Button>
            <Button img={github} alt="Github" type='button'  link="https://github.com/Kristy-H-Thompson" target="_blank">Github</Button>
            </div>

            <img alt="Starstar" className="mobile--project-img" src={starstar} />
        </div>

        <div className="projects-img--container">
            <img className="projects-img" alt="project 2 -- Starstar" src={starstar} />
        </div>


        </div>
    </main>  
    <DividerBottom />
    </>
  )
}

export default Projects     