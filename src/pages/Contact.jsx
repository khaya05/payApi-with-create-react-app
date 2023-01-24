import React from 'react';
import { FormAndBrands, Heading, Navbar } from '../components';

function Contact() {
  return (
    <main id="contact">
      <Navbar />
      <div className="contact-page">
        <Heading heading="Submit a help request and we’ll get in touch shortly." />
        <FormAndBrands />
      </div>
    </main>
  );
}

export default Contact;
