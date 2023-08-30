import {ContactMe} from '../../components';
import React from 'react'
import {contactImg} from '../../assets'
import './contact.css';




const Contact = () => {
return(
    <div className="contactGrid">
          <img alt="contact me" className="contact-img" src={contactImg} />
        <div>
        <ContactMe/>
        </div>
    </div>
  );
}

export default Contact;