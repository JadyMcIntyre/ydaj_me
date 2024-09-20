import React from 'react';
import Input from '../components/ui/input-component';

const ContactPage = () => {
  return (
    <form>
      <Input label="Name" type="text" placeholder="Your Name" />
      <Input label="Email" type="email" placeholder="Your Email" />
      <Input label="Message" type="textarea" placeholder="Your Message" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactPage;