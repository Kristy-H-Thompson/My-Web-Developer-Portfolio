import React from 'react'
import {Footer, Projectdetails, Projectoverview, Projectrequirements, Nav} from '../../containers';
import {laptop, strayPaws} from '../../assets'
import './straypaw.css'




const Straypawspage = () => {
  return (
    <>
    <Nav />

    <Projectoverview projectName="Stray Paws" projectType="A website commission from an animal rescue" projectImage={strayPaws} projectGithub="https://github.com/Kristy-H-Thompson/Stray-Paws" projectWebsite="https://www.straypawsrescue.com/"> 
        Stray Paws Rescue is a foster-based rescue located in Missouri. While transitioning their software solution from Rescue Groups to Shelterluv, they recognized a need for additional assistance. My team and I built them a new website that uses a Flask backend to create a flexible modular page design and API calls to load their adoptable animals in real time.
    </Projectoverview>

    <Projectdetails projectClient="Stray Paws Rescue" projectTeam="Myself and Jessica Teichman" projectImage={laptop} projectImageName="laptop" >   
      <p><b>Software & Technology Used:</b> </p>
      <ul className="projectList">
        <li><b>Figma:</b> Used for designing the user interface (UI) for the client, creating wireframes and mockups to visualize the website's layout and user experience</li>
        <li><b>Shelteruv API:</b> Utilized to fetch and display animal information from the shelter's database, providing real-time data for the website.</li>
        <li><b>MYSQL:</b> Used as the database management system to store and manage data for the website, including user information and animal records.</li>
        <li><b>Python Anywhere:</b> The hosting platform for the website, enabling deployment and running of the web application in a cloud environment.</li>
        <li><b>Python:</b> Used for writing the back-end logic, handling server-side functionality, and processing requests between the front-end and database.</li>
        <li><b>Flask: </b>: A lightweight Python web framework used to build flexible and modular page designs, enabling smooth routing and dynamic content rendering.</li>
        <li><b>HTML/CSS:</b>Used to structure and style the web pages, ensuring a responsive and visually appealing front-end design.</li>
      </ul>

      <br/>

    </Projectdetails>

    <Projectrequirements projectImage={laptop} projectImageName="laptop">   
        <p><b>User Story:</b></p>
      <p>As a rescue administrator, I want to migrate our animal adoption data from Rescue Groups to Shelterluv, so that we can manage our animals and adoptions through the Shelterluv platform without losing any important information.</p>
      <p><i>Acceptance Criteria:</i></p>
      <ul className="projectList">
        <li>A full data export from Rescue Groups is obtained, including animals, adoption applications, and donor records.</li>
        <li>The exported data is mapped and formatted for import into Shelterluv (using CSV, XML, or a compatible format). </li> 
        <li>Shelterluv's import tool or API is used to successfully import the data into the Shelterluv system.</li> 
        <li>All animal listings (names, breeds, ages, photos, descriptions, etc.) are correctly transferred to Shelterluv and displayed on the platform.</li>
        <li>The adoption applications, donation records, and volunteer data (if applicable) are successfully transferred to Shelterluv and are accessible by the rescue.</li>
        <li>The data transfer process is tested, and any discrepancies or issues are identified and resolved.</li>
      </ul>

      <p><b>User Story:</b></p>
      <p>As a rescue website user, I want a visually appealing and user-friendly website that reflects our mission, makes it easy to view adoptable animals, donate, and get involved, based on the agreed Figma design, so that our visitors can easily engage with the rescue.</p>
      <p><i>Acceptance Criteria:</i></p>
      <ul className="projectList">
        <li>The website UI is built based on the final approved Figma design, ensuring that all layout elements, colors, typography, and branding are accurately reflected.</li>
        <li>The website includes key features such as a homepage, animal listings, donation page, volunteer opportunities, and contact information.</li> 
        <li>Key calls to action (adopt, donate, volunteer) are prominently displayed and easy to navigate.</li> 
        <li>The website UI is tested for usability, ensuring users can easily find and interact with adoptable animals and other important content.</li>
      </ul>
    </Projectrequirements>

    <Footer />
    </>
  )
}

export default Straypawspage
