import React from 'react';
import { Footer, Projectdetails, Projectoverview, Projectrequirements, Nav } from '../../containers';
import { laptop, wheels } from '../../assets';

const wheelsToWindshield = () => {
  return (
    <>
      <Nav />

      <Projectoverview
        projectName="Wheels To Windshield"
        projectType="A command line application that prompts the user to either create a new vehicle or select an existing vehicle"
        projectImage={wheels}
        projectGithub="https://github.com/Kristy-H-Thompson/wheelsToWindshield"
        projectWebsite="https://drive.google.com/file/d/1t2L3VrBXGz5nxgKhuuznc4mOqo3v8aFH/view?usp=sharing"
      >
        This application prompts the user to either create a new vehicle or select an existing vehicle. After going through the creation or selection process, the user is able to perform certain actions with the selected vehicle (such as starting the car, speeding up, slowing down, etc.). The user is returned to the actions menu after each action until they decide to exit the application.
      </Projectoverview>

      <Projectdetails
        projectClient="N/A"
        projectTeam="Kristy Thompson"
        projectTimeline="N/A"
        projectImage={laptop}
        projectImageName="laptop"
      >
        <p>
          <b>Software & Technology Used:</b>
        </p>
        <ul className="projectList">
          <li><b>Node.js:</b> Node.js was used to create the command-line application, enabling the backend functionality to run in a terminal. It allows the user to interact with the app through command prompts and process inputs like selecting or creating vehicles, as well as executing vehicle-related actions.</li>
          <li><b>TypeScript:</b> TypeScript was utilized to provide static type checking and enhance the development experience. It ensured better code quality and reduced errors by enforcing type definitions and enabling features such as interfaces and type annotations for the application’s data and functions.</li>
          <li><b>Inquirer:</b> Inquirer was used to create the interactive command-line prompts that guide the user through the process of creating or selecting a vehicle. It handles user input, making the experience more intuitive by allowing the user to choose options from a menu, enter vehicle details, and perform actions on the selected vehicle.</li>
        </ul>

        <br />
      </Projectdetails>

      <Projectrequirements projectImage={laptop} projectImageName="laptop">   
        <p><b>User Story:</b></p>
        <p>As a developer, I want to update an existing application to include additional vehicle types so that I can comprehend and work with existing code bases.</p>
        <p><i>Acceptance Criteria:</i></p>
        <ul className="projectList">
          <li>Given a command-line application that accepts user input</li>
          <li>When I am prompted to choose the vehicle type during creation, then I can choose between car, truck, and motorbike</li> 
          <li>When I am prompted for details about the vehicle, then I can enter the vehicle information</li> 
          <li>When I select an existing vehicle, then I can use the selected existing vehicle</li>
          <li>When I have entered all the vehicle information, then I can use the created vehicle</li>
          <li>When I perform an action with a vehicle, then I see the result of the action in the command-line</li>
          <li>When I complete the process of performing an action, then I can perform additional actions until I choose to exit</li>
        </ul>
      </Projectrequirements>

      <Footer />
    </>
  );
};

export default wheelsToWindshield;