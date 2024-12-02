import React from 'react';
import { Button, Scroll } from '../../components'; // Assuming these components are defined already
import { Link } from 'react-router-dom';
import './project.css';


const Project = ({ project }) => {
  const { name, techStack, description, detailsLink, githubLink, websiteLink, image, altText, github, website } = project;

  return (
    <div className="project">
      <h3>{name}</h3>
      <h4>Built using: {techStack}</h4>
      <hr />
      <p>{description}</p>

      <div className="project-links">
        <Link to={detailsLink} onClick={Scroll}>
          <Button img={github} alt="Project Details" type='button' target="_self">Details</Button>
        </Link>
        <Button img={github} alt="Github" type='button' link={githubLink} target="_blank">Github</Button>
        {websiteLink && (
          <Button img={website} alt="Website" type='button' link={websiteLink} target="_blank">Website</Button>
        )}
      </div>

      <Link to={detailsLink} onClick={Scroll}>
        <img alt={altText} className="projects-img" src={image} />
      </Link>
    </div>
  );
};

export default Project;