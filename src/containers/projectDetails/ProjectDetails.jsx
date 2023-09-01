import React from 'react'
import './projectDetails.css'


const ProjectDetails = (props) => {
  return (
    <section className="projectDetails">

        <div className="details">
        <h2>Project Details</h2>
        <hr />
        <div>
            <p><b>Project Client:</b> {props.projectClient}</p>
            <p><b>Project Team:</b> {props.projectTeam}</p>
            <p><b>Project Timeline:</b> {props.projectTimeline}</p>
            <br/>
            {props.children}
        </div>

        <div className="details-image">
            <img src={props.projectImage} alt={props.projectImageName}/>
        </div>
    </section>
  )
}

export default ProjectDetails