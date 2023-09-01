import React from 'react'
import {Footer, ProjectOverviewNav} from '../../containers';


const Straypawspage = () => {
  return (
    <>
    <Nav />
    <ProjectOverview projectName="Stray Paws" projectType="website commission from an animal recue" projectGithub="" projectWebsite=""> 
    Stray Paws Rescue is a foster-based rescue located in Missouri. While transitioning their software solution from Rescue Groups to Shelterluv, they recognized a need for additional assistance. My team and I built them a new website that uses a Flask backend to create a flexible modular page design and API calls to load their adoptable animals in real time.
    </ProjectOverview>

    <Footer />
    </>
  )
}

export default Straypawspage