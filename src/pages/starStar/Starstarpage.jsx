import React from 'react'
import {Footer, Projectdetails, Projectoverview, Projectrequirements, Nav} from '../../containers';
import {laptop, starstar} from '../../assets'


const Starstarpage = () => {
  return (
    <>
    <>
    <Nav />

    <Projectoverview projectName="Starstar" projectType="A custom discord bot commission" projectImage={starstar} projectGithub="https://github.com/Kristy-H-Thompson/Starstar-Website" projectWebsite="https://starstarbot.netlify.app/"> 
      As a custom discord bot commission from a roleplaying website, Starstar represents the site's mascot. She helps with server entertainment — games and sarcastic remarks — as well as utility functions: tracking points in the shop; adding and managing character information; creating topics and tracking posts. In  addition to the bot itself, Starstar also has her own website for people to get information about the discord bot and invite her to their server. The website was created using React.js. 
    </Projectoverview>

    <Projectdetails projectClient="Sinister Haven" projectTeam="Myself and Jessica Teichman" projectTimeline="ongoing" projectImage={laptop} projectImageName="laptop" >   
      <p><b>Software & Technology Used:</b> </p>
      <ul className="projectList">
        <li><b>Python:</b> logic for the discord bot</li>
        <li><b>MySQL: </b> used to store data for the discord bot</li>
        <li><b>Discord: </b>where the bot is inteded to be used</li>
        <li><b>Disnake: </b>a python api used in several Starstar commands</li>
        <li><b>React: </b>used to create the Starstar website</li>
        <li><b>HTML/CSS: </b>used to create the pages for the Starstar website</li>
        <li><b>Python Anywhere: </b>used to host the code and database for the website</li>
        <li><b>Github: </b>repository for the Starstar website</li>
        <li><b>Netlify: </b>used to deploy the Starstar website</li>



      </ul>

      <br/>
      <p><b>Main Project Goals:</b></p>
      <ul className="projectList">
        <li>Create a discord bot for fans of the <i>Warriors</i> series that can be downloaded into any server</li>
        <li>Engage community members with <i>Warriors</i> theamed games</li>
        <li>Allow server members to earn and spend 'stars' (a virtual currency) for character items, clan upgrades, and server perks</li>
        <li>Make information about the Warriors series more accessible</li>
      </ul>
    </Projectdetails>

    <Projectrequirements projectImage={laptop} projectImageName="laptop">   
  
      <ul className="projectList">
        <li>Playable warriors themed discord games</li>
        <li>Virtual store to spend accrued stars in</li>
        <li>Server 'clan' for community members</li>
        <li>Access to series information</li>
        <li>Build a functional website for Starstar</li>
      </ul>
    </Projectrequirements>

    <Footer />
    </>
    </>
  )
}

export default Starstarpage