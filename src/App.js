import React from 'react';
import './App.css';
import { About, Contact, Header, Footer, Nav, Projects} from './containers';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Header />
      <About />
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;
