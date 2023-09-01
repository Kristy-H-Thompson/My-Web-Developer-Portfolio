import React from 'react'
import './projectDetails.css'


const ProjectDetails = (props) => {
  return (
    <section className="projectDetails">
        <h2>Project Details</h2>
        <hr />
        <ul>
            <li><b>Project Client:</b> {props.projectClient}</li>
            <li><b>Project Team:</b> {props.projectTeam}</li>
            <li><b>Project Timeline:</b> {props.projectTimeline}</li>
            <br/>
            <li><b>Project Goals:</b> {props.children}</li>
        </ul>
    </section>
  )
}

export default ProjectDetails