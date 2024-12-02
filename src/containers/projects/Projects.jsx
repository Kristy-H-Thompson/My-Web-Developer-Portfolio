// src/pages/Projects.js
import React from 'react';
import './projects.css';
import { Button, DividerTop, DividerBottom, Project, Scroll } from '../../components';
import { github, website, strayPaws, staffSyncIcon, starstar, skyWatchericon, wheels, travelIcon } from '../../assets';
import { Outlet, Link } from "react-router-dom";

const Projects = () => {
  const projectData = [
    {
      name: 'Stray Paws',
      techStack: 'HTML, CSS, Python, MYSQL, Flask, Shelterluv API',
      description: 'Stray Paws Rescue is a foster-based rescue located in Missouri. My team and I built them a new website using Flask to create a flexible modular page design and API calls.',
      detailsLink: '/straypaws',
      githubLink: 'https://github.com/Kristy-H-Thompson/Stray-Paws',
      websiteLink: 'https://www.straypawsrescue.com/',
      image: strayPaws,
      altText: 'StrayPaws',
      github: github,
      website: website
    },
    {
      name: 'Staff Sync',
      techStack: 'Node.js, Inquirer, PostgreSQL',
      description: 'Staff Sync is a command-line application designed to manage employee data. It uses Node.js, Inquirer, and PostgreSQL for an efficient, interactive way to manage workforce data.',
      detailsLink: '/staffsync',
      githubLink: 'https://github.com/Kristy-H-Thompson/staffSync',
      websiteLink: 'https://drive.google.com/file/d/1P4EtECP367esbrNcRkglSNNc58tUQ7KN/view?usp=sharing',
      image: staffSyncIcon,
      altText: 'StaffSync',
      github: github,
      website: website
    },
    {
      name: 'Starstar',
      techStack: 'Python, MySQL, Discord, Disnake',
      description: 'Starstar is a custom Discord bot that helps with server entertainment and utility functions such as tracking points, adding character info, and creating topics.',
      detailsLink: '/starstar',
      githubLink: 'https://github.com/Kristy-H-Thompson/Starstar-Website',
      websiteLink: 'https://starstarbot.netlify.app/',
      image: starstar,
      altText: 'Starstar',
      github: github,
      website: website
    },
    {
      name: 'Sky Watchers',
      techStack: 'HTML, CSS, Node.js, Type Script, Vite, Open Weather API',
      description: 'Sky Watchers is a web application that lets users view weather and a five-day forecast for any city. It also saves previous searches and allows deletion.',
      detailsLink: '/skywatchers',
      githubLink: 'https://github.com/Kristy-H-Thompson/skyWatchers',
      websiteLink: 'https://skywatchers.onrender.com',
      image: skyWatchericon,
      altText: 'SkyWatchers',
      github: github,
      website: website
    },
    {
      name: 'Wheels To Windsheild',
      techStack: 'Node.js, Typescript',
      description: 'An application that allows users to create a vehicle and perform actions such as starting the car, speeding up, slowing down, etc.',
      detailsLink: '/wheels',
      githubLink: 'https://github.com/Kristy-H-Thompson/wheelsToWindshield',
      websiteLink: 'https://drive.google.com/file/d/1t2L3VrBXGz5nxgKhuuznc4mOqo3v8aFH/view?usp=sharing',
      image: wheels,
      altText: 'WheelsToWindshield',
      github: github,
      website: website
    },
    {
      name: 'Trip Mosaic',
      techStack: 'HTML, Tailwind CSS, Javascript',
      description: 'Trip Mosaic is a collaborative app for planning travel itineraries, allowing users to track activities, budgets, and packing lists.',
      detailsLink: '/tripmoasic',
      githubLink: 'https://github.com/Kristy-H-Thompson/Trip-Mosaic',
      websiteLink: 'https://kristy-h-thompson.github.io/Trip-Mosaic/trip.htmlg',
      image: travelIcon,
      altText: 'TripMosaic',
      github: github,
      website: website
    }
  ];

  return (
    <>
      <DividerTop />
      <main className="projects" id="projects">
        <h2>Coding Projects</h2>
        <hr />
        <div className="projects-grid">
        {projectData.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
      </main>
      <DividerBottom />
      <Outlet />
    </>
  );
};

export default Projects;