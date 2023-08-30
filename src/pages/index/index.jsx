import React from 'react';
import './App.css';
import { About, Contact, Header, Footer, Nav, Projects} from './containers';

function Index() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Projects/>
      <Contact />
      <Footer />
    </>
  );
}

export default Index;
