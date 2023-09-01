import React from 'react'
import './projectDetails.css'


const ProjectDetails = (props) => {
  return (
    <section className="projectDetails">

        <div className="details">
        <h2>Project Details</h2>
        <hr />
        <ul>
            <li><b>Project Client:</b> {props.projectClient}</li>
            <li><b>Project Team:</b> {props.projectTeam}</li>
            <li><b>Project Timeline:</b> {props.projectTimeline}</li>
            <br/>
            {props.children}
        </ul>
        </div>

        <div className="details-image">
            <img src={props.projectImage} alt={props.projectName}/>
        </div>
    </section>
  )
}

export default ProjectDetails