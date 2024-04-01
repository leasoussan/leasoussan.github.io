import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xvoewvey");
  if (state.succeeded) {
      return <p>I will get back to you shortly, Thank  You!</p>;
  }
  return (

    <div className="contact_container">
        
    <div className="contact_form_container">
      
      <form onSubmit={handleSubmit} className="form_display">
      <h3>For more information</h3>
      <hr></hr>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        
        <button id='submit_btn' type="submit" disabled={state.submitting}>Submit</button>
      </form>
    </div>
    
    <div className="contact_info">
      <h3>Contact Information</h3>
      <p>Phone: +972-585-711-469</p>
      <p>Email: leasoussan@gmail.com</p>

      <a href='https://github.com/leasoussan'>GitHub</a>
      <a href='https://leasoussan.com'>Artist WebSite</a>
    </div>
  </div>
);
}

export default ContactForm;