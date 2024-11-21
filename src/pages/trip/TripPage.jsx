import React from 'react';
import { Footer, Projectdetails, Projectoverview, Projectrequirements, Nav } from '../../containers';
import { laptop, travelIcon } from '../../assets';

const tripMosaic = () => {
  return (
    <>
      <Nav />

      <Projectoverview
        projectName="Trip Mosaic"
        projectType="Travel Mosaic is a collaborative web application designed to help users plan their travel itineraries for upcoming trips. "
        projectImage={travelIcon}
        projectGithub="https://github.com/Kristy-H-Thompson/Trip-Mosaic"
        projectWebsite="https://kristy-h-thompson.github.io/Trip-Mosaic/trip.html"
      >
        Travel Mosaic is a collaborative web application designed to help users plan their travel itineraries for upcoming trips. With features that allow users to add activities, create packing lists, and track budgets, we aim to enhance the travel planning experience for everyone.
      </Projectoverview>

      <Projectdetails
        projectClient="N/A"
        projectTeam="Drew DeMarois, Jean Robert Gassarasi, Kristy Thompson"
        projectTimeline="N/A"
        projectImage={laptop}
        projectImageName="laptop"
      >
        <p>
          <b>Software & Technology Used:</b>
        </p>
        <ul className="projectList">
          <li><b>HTML:</b> Coming Soon</li>
          <li><b>Tailwind CSS:</b> Coming Soon</li>
          <li><b>Javascript:</b> Coming Soon</li>
          <li><b>Chart.js:</b> Coming Soon</li>
        </ul>

        <br />
      </Projectdetails>

      <Projectrequirements projectImage={laptop} projectImageName="laptop">   
        <p><b>User Story:</b></p>
        <p>As a Traveler</p>
        <p><b>Itinerary Creation</b></p>
        <p>I want to create a new itinerary so that I can plan my upcoming trip in an organized manner.</p>
        <p>I want to view my itinerary in a clear format that lists all activities by start time so that I can manage my schedule effectively.</p>
        <p><b>Activity Logging</b></p>
        <p>I want to add activities to my itinerary, including details like descriptions and timings, so that I can keep track of what I plan to do.</p>
        <p>I want to specify items to pack for each activity so that I don’t forget essential items</p>
        <p><b>Budget Tracking</b></p>
        <p>I want to enter estimated costs for each activity so that I can budget effectively for my trip.</p>
        <p>I want to view a summary of my estimated expenses per person so that I can ensure I stay within my budget.</p>
        <p><b>Packing List</b></p>
        <p>I want to create a packing list tailored to my trip so that I can ensure I have everything I need before I leave.</p>
        <p><i>Acceptance Criteria:</i></p>
        <ul className="projectList">
          <li>I know it is complete when I can fill in the new trip form, with the trip name, start date, and end date, number of attendees, and total budget and be redirected to the add an activity page.</li>
          <li>I know it is complete when the new trip appears in my local storage.</li>
          <li>I know it is complete when I am able to click on each trip using a drop down menu, and I am able to add activities to the specified trip.</li> 
          <li>I know it is complete when I can fill in the new activity form, with the activity name, date, start time, end time, items to pack, cost per person, and activity description.</li> 
          <li>I know it is complete when the new activity appears in my local storage inside of the trip object.</li>
          <li>I know it is complete when you can not add an activity at the same date and time as an existing activity.</li>
          <li>I know it is complete when I can input estimated costs for each activity per person and save them in local storage using the activity form</li>
          <li>I know it is complete when I receive a notification if I attempt to enter a non-numeric value for cost per person or budget.</li>
          <li>I know it is complete when I am able to create and correctly display a pie chart for the trip's budget using chart.js based on category and cost per person.</li>
          <li>I know it is complete when I can add multiple items to pack to each activity</li>
          <li>I know it is complete when packing items are displayed in a clear list format associated with their respective trip on the trip details page.</li>
          <li>I know it is complete when I can open the itinerary and see all activities listed in chronological order by start time and date.</li>

        </ul>
      </Projectrequirements>

      <Footer />
    </>
  );
};

export default tripMosaic;