import React from 'react'
import {Footer, Projectdetails, Projectoverview, Nav} from '../../containers';
import {laptop, strayPaws} from '../../assets'
import './straypaw.css'




const Straypawspage = () => {
  return (
    <>
    <Nav />

    <Projectoverview projectName="Stray Paws" projectType="A website commission from an animal rescue" projectImage={strayPaws} projectGithub="" projectWebsite=""> 
        Stray Paws Rescue is a foster-based rescue located in Missouri. While transitioning their software solution from Rescue Groups to Shelterluv, they recognized a need for additional assistance. My team and I built them a new website that uses a Flask backend to create a flexible modular page design and API calls to load their adoptable animals in real time.
    </Projectoverview>

    <Projectdetails projectName="Stray Paws" projectClient="Stray Paws Rescue" projectTeam="Myself and Jessica Teichman" projectTimeline="One month" projectImage={laptop}>   
      <li><b>Software & Technology Used:</b> 
      <ul className="projectList">
        <li><b>Figma:</b> used to create UI design with client</li>
        <li><b>Shelteruv API:</b> shelter's api for animal information</li>
        <li><b>MYSQL:</b> used to store data for the website</li>
        <li><b>Python Anywhere:</b> used to host the website</li>
        <li><b>Python:</b> back-end logic</li>
        <li><b>Flask: </b>used to create a flexible modular page designs</li>
        <li><b>HTML/CSS:</b> used to build and style pages</li>
      </ul></li>

      <br/>
      <li><b>Main Project Goals:</b> 
      <ul className="projectList">
        <li>assist the rescue in transitioning their data from Rescue Groups to Shelterluv</li>
        <li>build an updated website UI based on an agreed upon figma design</li>
        <li>find a cost effective platform to host the rescue's new website</li>
        <li>use Shelterluv's api to display their adoptable animals in real time</li>
        <li>transition the rescues domain name over to new website</li>
        <li>complete new website before Rescue Groups ended their agreement</li>
      </ul></li>
    </Projectdetails>


    <Footer />
    </>
  )
}

export default Straypawspage
