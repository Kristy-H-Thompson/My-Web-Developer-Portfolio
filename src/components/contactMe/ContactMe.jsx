import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import {Form, Input, TextArea} from 'semantic-ui-react';
import './contactMe.css';
import {Button} from '../../components';
import {send} from '../../assets';






const SERVICE_ID = "service_evjgk9b";
const TEMPLATE_ID = "template_tn3dgeq";
const USER_ID = "ZVZRCj5iJf9IM5Swd";



const ContactMe = () => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
      };

  return (
    <>
      <Form id="email-form" onSubmit={handleOnSubmit}>
     <h3>Contact Me</h3>
     <hr />
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Your Email'
          name='user_email'
          placeholder='Email…'
          type="email"          
          required
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
          type="text"
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
        />
        <Button img={send} alt="Email me" type='submit' >Send Email</Button>
      </Form>
    </>
  );
}

export default ContactMe;