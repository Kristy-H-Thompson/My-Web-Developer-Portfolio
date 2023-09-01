import React from 'react'
import {Footer, Projectdetails, Projectoverview, Nav} from '../../containers';
import {strayPaws} from '../../assets'



const Straypawspage = () => {
  return (
    <>
    <Nav />

    <Projectoverview projectName="Stray Paws" projectType="A website commission from an animal rescue" projectImage={strayPaws} projectGithub="" projectWebsite=""> 
    Stray Paws Rescue is a foster-based rescue located in Missouri. While transitioning their software solution from Rescue Groups to Shelterluv, they recognized a need for additional assistance. My team and I built them a new website that uses a Flask backend to create a flexible modular page design and API calls to load their adoptable animals in real time.
    </Projectoverview>

    <Projectdetails projectClient="Stray Paws Rescue" projectTeam="Myself and Jessica Teichman" projectTimeline="One month">
      <ul className="projectGoals">
        <li>assist the rescue in transitioning their data from Rescue Groups to Shelterluv</li>
        <li>build an updated website UI based on an agreed upon figma design</li>
        <li>find a cost effective platform to host the rescue's new website</li>
        <li>use Shelterluv's api to display their adoptable animals in real time</li>
        <li>transition the rescues domain name over to new website</li>
        <li>complete new website before Rescue Groups ended their agreement</li>
      </ul>
    </Projectdetails>


    <Footer />
    </>
  )
}

export default Straypawspage
