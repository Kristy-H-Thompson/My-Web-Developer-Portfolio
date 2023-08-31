import {ContactMe} from '../../components';
import React from 'react'
import {contactImg} from '../../assets'
import './contact.css';




const Contact = () => {
return(
    <section id="contact" className="contactGrid">
          <img alt="contact me" className="contact-img" src={contactImg} />
        
      <div>
        <ContactMe/>
      </div>
    </section>
  );
}

export default Contact;