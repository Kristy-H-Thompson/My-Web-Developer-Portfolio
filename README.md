# My Web Developer Portfolio

## Description
My web portfolio, built using React, showcases a clean, modern design with an emphasis on user experience. The interactive elements and dynamic content are powered by React's component-based architecture, which allows for efficient rendering and smooth transitions. The portfolio highlights my skills, and coding projects. 

- What was your motivation?
My motivation for creating this web portfolio stemmed from the desire to have a personalized platform that not only highlights my skills and projects but also demonstrates my proficiency in web development. I wanted to build a space that reflects my passion for web design and development and personality, while also showcasing my ability to create interactive and user-friendly experiences using modern technologies like React. 

## Features
- About Me
- Portfolio
- Resume
- Project portfolio
- Project Pages

## Technologies
- HTML/CSS: HTML was used to structure the layout and content of the portfolio, while CSS provided styling to create a visually appealing, responsive design. Media queries ensured the site adapts seamlessly to various screen sizes and devices.

- React: React was used to build dynamic, reusable components for different sections of the portfolio, improving performance and creating smooth transitions between content. It allowed me to manage the state and handle interactions efficiently without page reloads.

- Email.js: Email.js was integrated to manage form submissions directly to my email, enabling seamless communication through the contact form. It provided a simple, no-backend solution for handling messages from visitors.


## Link to deployed website
[link](https://www.kristy-thompson.com/)

## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [UserStories](#userStories)

# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation
No extra installations are needed to use this web application. Simply access it via your web browser.
If you would like to edit the code, you can fork this repo. You must downloaded all the project dependencies listed in the package.json

## Usage
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


## Credits
### Contributors
- [Kristy Thompson](https://github.com/Kristy-H-Thompson)


### Reasources used
- React Documentaion: [link](https://reactjs.org/)
- Button inspiration: [Link](https://codepen.io/pizza3/pen/qmerBv)
- K Logo, Sky Watcher Logo, Trip Mosaic Logo, Wheels to Windshield Logo, laptop icon, apple icon: [Link](https://www.canva.com/)
- Stray Paws logo: [link](https://www.straypawsrescue.com/)
- CSS waves generator: [link](https://css-generators.com/wavy-shapes/)
- Email.js: [link](https://www.emailjs.com/)
- Reacting to input with state: [link](https://react.dev/learn/reacting-to-input-with-state)

## License
MIT License

## User Stories
- AS AN employer looking for candidates with experience building single-page applications
- I WANT to view a potential employee's deployed React portfolio of work samples
- SO THAT I can assess whether they're a good candidate for an open position

## Acceptance Criteria
- GIVEN a single-page application portfolio for a web developer
- WHEN I load the portfolio
- THEN I am presented with a page containing a header, a section for content, and a footer
- WHEN I view the header
- THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
- WHEN I view the navigation titles
- THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
- WHEN I click on a navigation title
- THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
- WHEN I load the portfolio the first time
- THEN the About Me title and section are selected by default
- WHEN I am presented with the About Me section
- THEN I see a recent photo or avatar of the developer and a short bio about them
- WHEN I am presented with the Portfolio section
- THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
- WHEN I am presented with the Contact section
- THEN I see a contact form with fields for a name, an email address, and a message
- WHEN I move my cursor out of one of the form fields without entering text
- THEN I receive a notification that this field is required
- WHEN I enter text into the email address field
- THEN I receive a notification if I have entered an invalid email address
- WHEN I am presented with the Resume section
- THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
- WHEN I view the footer
- THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 