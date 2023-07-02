import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Form = () => {
  const form=useRef()

  const [notification, setNotification] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ly4n5rc', 'template_bjwcokn', form.current, 'F1Jzrgq6nIX5L8e6Y')
      .then((result) => {
          console.log(result.text);
          setNotification('Email sent !!');
      }, (error) => {
          console.log(error.text);
          setNotification('Failed to send email. Please try again later.');
      });

      e.target.reset();

    };

    const [inView] = useInView({
      threshold: 0,
      triggerOnce: true,
    });


  return (
    <motion.form
     
    className="contactInfo"
    ref={form}
    initial={{ x: "-10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
      onSubmit={sendEmail}
    >
      <h4 className="contentTitle">Message Me</h4>
      <div className="col-12 col-md-6 formGroup" style={{ display: "inline-block" }}>
        <input
          type="text"
          className="formControl"
          id="contactName"
          name="name"
          placeholder="Name"
          required
        />
      </div>
      <div className="col-12 col-md-6 formGroup" style={{ display: "inline-block" }}>
        <input
          type="email"
          className="formControl"
          id="contactEmail"
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="col-12 formGroup">
        <input
          type="text"
          className="formControl"
          id="contactSubject"
          name="subject"
          placeholder="Subject"
          required
        />
      </div>
      <div className="col-12 formGroup">
        <textarea
          className="formControl"
          name="message"
          id="contactMessage"
          rows="5"
          placeholder="Message"
          required
        ></textarea>

      {notification && <div
        style={{
          marginTop: '10px',
          color: '#fff',
          backgroundColor: '#63b9ff',
          padding: '10px',
          borderRadius: '4px',
        }}
      >{notification}</div>}
      </div>
      <div className="col-12 formGroup formSubmit">
        <button type="submit" className="btn">Send Message</button>
      </div>
    </motion.form>
  );
};

export default Form;
