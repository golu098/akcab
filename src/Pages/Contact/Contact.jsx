// ContactForm.jsx
import React, { useState } from 'react';
import './Contact.css';
import Footer from '../../components/Footer/Footer';

const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSend = () => {
    setIsSent(true);
  };

  return (

    <>
   
    <div className={`wrapper ${isSent ? 'sent' : ''}`} style={{ marginTop: '5rem' }}>

      <article className="letter"style={{ marginTop: '10rem' }}>
        <div className="side">
          <h1>Contact us</h1>
          <p>
            <textarea placeholder="Your message"></textarea>
          </p>
        </div>
        <div className="side">
          <p>
            <input type="text" placeholder="Your name" />
          </p>
          <p>
            <input type="email" placeholder="Your email" />
          </p>
          <p>
            <button id="sendLetter" onClick={handleSend}>Send</button>
          </p>
        </div>
      </article>
      <div className="envelope front"style={{ marginTop: '5rem' }}></div>
      <div className="envelope back"style={{ marginTop: '7rem' }}></div>
      <p className="result-message centered "style={{ marginTop: '5rem' }}>Thank you for your message</p>
      <small className="centered">Enter message (optional) and click button "Send"</small>
    </div>
    <div style={{ paddingBottom: "600px" }}> {/* Add sufficient padding */}
  {/* Main content */}
</div>
<div> <Footer/></div>
     
    </>
  );
};

export default Contact;