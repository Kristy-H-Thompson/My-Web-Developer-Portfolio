import React from 'react'
import {Footer, Projectoverview, Nav} from '../../containers';
import {strayPaws} from '../../assets'



const Straypawspage = () => {
  return (
    <>
    <Nav />
    <Projectoverview projectName="Stray Paws" projectType="A website commission from an animal recue" projectImage={strayPaws} projectGithub="" projectWebsite=""> 
    Stray Paws Rescue is a foster-based rescue located in Missouri. While transitioning their software solution from Rescue Groups to Shelterluv, they recognized a need for additional assistance. My team and I built them a new website that uses a Flask backend to create a flexible modular page design and API calls to load their adoptable animals in real time.
    </Projectoverview>

    <Footer />
    </>
  )
}

export default Straypawspage