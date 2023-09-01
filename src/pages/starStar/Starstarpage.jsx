import React from 'react'
import {Footer, Projectdetails, Projectoverview, Projectrequirements, Nav} from '../../containers';
import {laptop, starstar} from '../../assets'


const Starstarpage = () => {
  return (
    <>
    <>
    <Nav />

    <Projectoverview projectName="Starstar" projectType="A python discord bot" projectImage={starstar} projectGithub="" projectWebsite=""> 
      As a custom discord bot commission from a roleplaying website, Starstar represents the site's mascot. She helps with server entertainment — games and sarcastic remarks — as well as utility functions: tracking points in the shop; adding and managing character information; creating topics and tracking posts.
    </Projectoverview>

    <Projectdetails projectClient="Sinister Haven" projectTeam="Myself and Jessica Teichman" projectTimeline="ongoing" projectImage={laptop} projectImageName="laptop" >   
      <p><b>Software & Technology Used:</b> </p>
      <ul className="projectList">
        <li><b>Python:</b> back-end logic</li>
        <li><b>MySQL: </b>used to create a flexible modular page designs</li>
        <li><b>Discord: </b>where the bot is inteded to be used</li>
        <li><b>Disnake: </b>....</li>
      </ul>

      <br/>
      <p><b>Main Project Goals:</b></p>
      <ul className="projectList">
        <li>Create a discord bot for fans of the <i>Warriors</i> series</li>
        <li>Engage community members with <i>Warriors</i> themed games</li>
        <li>Allow server members to earn and spend 'stars' (a virtual currency)</li>
        <li>Make series information more accessible</li>
      </ul>
    </Projectdetails>

    <Projectrequirements projectImage={laptop} projectImageName="laptop">   
  
      <p><b>Commands:</b></p> 
      <ul className="projectList">
        <li>home </li>
        <li>about us</li>
        <li>contact information</li>
        <li>news and events</li>
        <li>adoption information</li>
        <li>sponsorship information</li>
        <li>donations</li>
        <li>forms</li>
        <li>featured animals</li>
        <li>dogs for adoption</li>
        <li>cats for adoption</li>
        <li>fosters</li>
        <li>photo gallery</li>
      </ul>
    </Projectrequirements>

    <Footer />
    </>
    </>
  )
}

export default Starstarpage