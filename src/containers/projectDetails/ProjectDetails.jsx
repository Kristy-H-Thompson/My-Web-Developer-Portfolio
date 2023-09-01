import React from 'react'

const ProjectDetails = (props) => {
  return (
    <section>
        <h2>Project Details</h2>
        <hr />
        <p>Reason for buiding project:{props.projectReason}</p>
        <p></p>
        <p>{props.children}</p>
        <ul>
            <li><b>Project Client:</b> {props.projectClient}</li>
            <li><b>Project Team:</b> {props.projectTeam}</li>
            <li><b>Project Timeline:</b> {props.projectTimeline}</li>
            <li><b>Project Goals:</b> {props.children}</li>
        </ul>
    </section>
  )
}

export default ProjectDetails