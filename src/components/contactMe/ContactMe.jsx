import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { Form, Input, TextArea } from 'semantic-ui-react';
import './contactMe.css';
import { Button } from '../../components';
import { send } from '../../assets';

// Environment variables for EmailJS service
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

// Log environment variables to ensure they are correctly set
console.log('SERVICE_ID:', SERVICE_ID);
console.log('TEMPLATE_ID:', TEMPLATE_ID);
console.log('USER_ID:', USER_ID);

const ContactMe = () => {
  const [formErrors, setFormErrors] = useState({
    user_email: "",
    user_name: "",
    user_message: "",
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { user_email, user_name, user_message } = e.target;
    const errors = {};

    // Field validation
    if (!user_email.value) {
      errors.user_email = "Email is required";
    } else if (!validateEmail(user_email.value)) {
      errors.user_email = "Please enter a valid email address";
    }

    if (!user_name.value) {
      errors.user_name = "Name is required";
    }

    if (!user_message.value) {
      errors.user_message = "Message is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return; // Prevent form submission if there are errors
    }

    // Send email using EmailJS
    if (SERVICE_ID && TEMPLATE_ID && USER_ID) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully',
          });
          e.target.reset();  // Clear form
          setFormErrors({});  // Clear form errors after successful submission
        }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Oops, something went wrong',
            text: error.text,
          });
        });
    } else {
      console.error("EmailJS credentials are missing!");
      Swal.fire({
        icon: 'error',
        title: 'Configuration Error',
        text: 'EmailJS credentials are missing or incorrect.',
      });
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    // If the field is empty, set an error message
    if (!value) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
      }));
    } else {
      setFormErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name]; // Remove error message when the field is filled
        return newErrors;
      });
    }
  };

  return (
    <>
      <Form id="email-form" onSubmit={handleOnSubmit}>
        <h3>Contact Me</h3>
        <hr />
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Your Email"
          name="user_email"
          placeholder="Email…"
          type="email"
          required
          error={formErrors.user_email ? { content: formErrors.user_email } : null}
          onBlur={handleBlur} // Trigger validation on blur (when field loses focus)
        />
        <Form.Field
          id="form-input-control-name"
          control={Input}
          label="Name"
          name="user_name"
          placeholder="Name…"
          required
          type="text"
          error={formErrors.user_name ? { content: formErrors.user_name } : null}
          onBlur={handleBlur} // Trigger validation on blur
        />
        <Form.Field
          id="form-textarea-control-message"
          control={TextArea}
          label="Message"
          name="user_message"
          placeholder="Message…"
          required
          error={formErrors.user_message ? { content: formErrors.user_message } : null}
          onBlur={handleBlur} // Trigger validation on blur
        />
        <Button img={send} alt="Email me" type="submit">Send Email</Button>
      </Form>
    </>
  );
};

export default ContactMe;