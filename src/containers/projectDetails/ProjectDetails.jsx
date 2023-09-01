import React from 'react'

const ProjectDetails = (props) => {
  return (
    <section>
        <h2>Project Details</h2>
        <hr />
        <ul>
            <li><b>Project Client:</b> {props.projectClient}</li>
            <li><b>Project Team:</b> {props.projectTeam}</li>
            <li><b>Project Timeline:</b> {props.projectTimeline}</li>
        </ul>
    </section>
  )
}

export default ProjectDetails