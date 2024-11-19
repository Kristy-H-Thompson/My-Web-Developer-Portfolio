import React from 'react'
import './projects.css'
import {Button, DividerTop, DividerBottom, Scroll} from '../../components';
import {github, projects, strayPaws, starstar, website, staffSyncIcon, skyWatchericon, wheels, travelIcon} from '../../assets'
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
            <h3>Staff Sync</h3>
            <h4>Built using: Node.js, Inquirer, and PostgreSQL</h4>
            <hr/>
            <p>A command-line application to manage a company's employee database, using Node.js, Inquirer, and PostgreSQL.</p>
            
            <div className="project-links">
            <Link to="/straypaws" onClick={Scroll}><Button img={projects} alt="Project Details" type='button' target="_self">Details</Button></Link>            
            <Button img={github} alt="Github" type='button'  link="https://github.com/Kristy-H-Thompson/staffSync" target="_blank">Github</Button>
            <Button img={website} alt="Demo" type='button'  link="https://www.straypawsrescue.com/" target="_blank">Demo</Button>
            </div>

            <Link to="/straypaws" onClick={Scroll}><img alt="StrayPaws" className="mobile--project-img" src={staffSyncIcon} /></Link>
        </div>
        <div className="projects-img--container"> 
            <Link to="/straypaws" onClick={Scroll}><img className="projects-img" alt="project 1 -- staffSync" src={staffSyncIcon} /></Link>
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


        <div className="project">
            <h3>Sky Watchers</h3>
            <h4>Built using: HTML, CSS, Node.js, Type Script, Vite, Open Weather API</h4>
            <hr/>
            <p>Sky Watchers is a web application that you can use to view the current weather and five day forecast of any city that you would like to search. For your convenience, Sky Watchers also saves your previous searches on the left hand side of your screen. You can delete these saved searches at any time.</p>
            
            <div className="project-links">
            <Link to="/straypaws" onClick={Scroll}><Button img={projects} alt="Project Details" type='button' target="_self">Details</Button></Link>            
            <Button img={github} alt="Github" type='button'  link="https://github.com/Kristy-H-Thompson/skyWatchers" target="_blank">Github</Button>
            <Button img={website} alt="Website" type='button'  link="https://skywatchers.onrender.com" target="_blank">Website</Button>
            </div>

            <Link to="/straypaws" onClick={Scroll}><img alt="SkyWatchers" className="mobile--project-img" src={skyWatchericon} /></Link>
        </div>
        <div className="projects-img--container"> 
            <Link to="/straypaws" onClick={Scroll}><img className="projects-img" alt="project 1 -- Straypaws" src={skyWatchericon} /></Link>
        </div>



        <div className="project">
            <h3>Wheels To Windsheild</h3>
            <h4>Built using: Node.js, Typescript</h4>
            <hr/>
            <p>This application prompts the user to either create a new vehicle or select an existing vehicle. After going through the creation or selection process, the user is able to perform certain actions with the selected vehicle(Such as start the car, speed up, slow down, ect). The user is returned to the actions menu after each action until they decide to exit the application.</p>
            
            <div className="project-links">
            <Link to="/straypaws" onClick={Scroll}><Button img={projects} alt="Project Details" type='button' target="_self">Details</Button></Link>            
            <Button img={github} alt="Github" type='button'  link="https://github.com/Kristy-H-Thompson/wheelsToWindshield" target="_blank">Github</Button>
            <Button img={website} alt="Demo" type='button'  link="https://drive.google.com/file/d/1t2L3VrBXGz5nxgKhuuznc4mOqo3v8aFH/view?usp=sharing" target="_blank">Demo</Button>
            </div>

            <Link to="/straypaws" onClick={Scroll}><img alt="SkyWatchers" className="mobile--project-img" src={wheels} /></Link>
        </div>
        <div className="projects-img--container"> 
            <Link to="/straypaws" onClick={Scroll}><img className="projects-img" alt="project 1 -- Straypaws" src={wheels} /></Link>
        </div>

        
        <div className="project">
            <h3>Trip Mosaic</h3>
            <h4>Built using: HTML, Tailwind Css, Javascript</h4>
            <hr/>
            <p>Travel Mosaic is a collaborative web application designed to help users plan their travel itineraries for upcoming trips. With features that allow users to add activities, create packing lists, and track budgets, we aim to enhance the travel planning experience for everyone.</p>
            
            <div className="project-links">
            <Link to="/straypaws" onClick={Scroll}><Button img={projects} alt="Project Details" type='button' target="_self">Details</Button></Link>            
            <Button img={github} alt="Github" type='button'  link="https://github.com/Kristy-H-Thompson/Trip-Mosaic" target="_blank">Github</Button>
            <Button img={website} alt="Website" type='button'  link="https://kristy-h-thompson.github.io/Trip-Mosaic/trip.htmlg" target="_blank">Website</Button>
            </div>

            <Link to="/straypaws" onClick={Scroll}><img alt="SkyWatchers" className="mobile--project-img" src={travelIcon} /></Link>
        </div>
        <div className="projects-img--container"> 
            <Link to="/straypaws" onClick={Scroll}><img className="projects-img" alt="project 1 -- Straypaws" src={travelIcon} /></Link>
        </div>






        </div>
    </main>  
    <DividerBottom />
    <Outlet />
    </>
  )
}

export default Projects     