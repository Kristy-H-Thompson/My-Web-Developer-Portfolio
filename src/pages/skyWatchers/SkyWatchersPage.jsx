import React from 'react';
import { Footer, Projectdetails, Projectoverview, Projectrequirements, Nav } from '../../containers';
import { laptop, skyWatchericon } from '../../assets';

const SkyWatchers = () => {
  return (
    <>
      <Nav />

      <Projectoverview
        projectName="Sky Watchers"
        projectType="Sky Watchers is a web application that you can use to view the current weather and five day forecast of any city that you would like to search. "
        projectImage={skyWatchericon}
        projectGithub="https://github.com/Kristy-H-Thompson/skyWatchers"
        projectWebsite="https://skywatchers.onrender.com/"
      >
Sky Watchers is a web application that you can use to view the current weather and five day forecast of any city that you would like to search. For your convenience, Sky Watchers also saves your previous searches on the left hand side of your screen. You can delete these saved searches at any time.

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
          <li><b>HTML:</b>Used to structure the content and layout of the web pages, ensuring the user interface is easy to navigate and interact with.</li>
          <li><b>Node.js: </b>Serves as the back-end server environment for handling requests, interacting with the OpenWeather API, and dynamically serving data to the front-end.</li>
          <li><b>Typescript: </b>Used for building the front-end logic, providing type safety and reducing potential errors by offering a statically typed experience when working with data from the API.</li>
          <li><b>Vite: </b>A build tool used to bundle and optimize the project, providing a fast and efficient development environment for building the Sky Watchers web application.</li>
          <li><b>Open Weather API: </b>Used to fetch real-time weather data, including current conditions and a five-day forecast, for any city searched by the user. The API also allows storing and displaying previous search results.</li>
        </ul>

        <br />
      </Projectdetails>

      <Projectrequirements projectImage={laptop} projectImageName="laptop">   
        <p><b>User Story:</b></p>
      <p>AS A traveler, I WANT to see the weather outlook for multiple cities, SO THAT I can plan a trip accordingly</p>
      <p><i>Acceptance Criteria:</i></p>
      <ul className="projectList">
        <li>WHEN I search for a city</li>
        <li>WHEN I search for a city, THEN I am presented with current and future conditions for that city, and that city is added to the search history</li> 
        <li>WHEN I view current weather conditions for that city, THEN I am presented with the city name, the date, an icon representation of weather conditions, a description of the weather for the icon's alt tag, the temperature, the humidity, and the wind speed</li> 
      </ul>
    </Projectrequirements>
      <Footer />
    </>
  );
};

export default SkyWatchers;