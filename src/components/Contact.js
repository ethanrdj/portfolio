import React, { useState } from "react";
import Alert from "./Alert";
import { SocialIcon } from "react-social-icons";
import emailjs from "emailjs-com";

const Contact = () => {
  const [alertMessage, setAlertMessage] = useState("");
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g42a4u8",
        "template_lmlvasz",
        e.target,
        "user_m7kbWXvrOZBv47uJFei5n"
      )
      .then(
        () => {
          setAlertMessage("Thanks, I will get back to you as soon as I can!");
        },
        (error) => {
          setAlertMessage("Something went wrong, please try again later.");
        }
      );
    e.target.reset();
  }
  return (
    <div className="Contact" id="contact">
      <h1 className="main-contact-header">Get in touch!</h1>
      <h2 className="second-contact-header">I'd love to hear from you</h2>
      <form onSubmit={sendEmail} className="contact-form">
        <div className="form-item">
          <input
            className="form-input"
            type="text"
            name="name"
            required
          ></input>
          <label className="form-label">Name</label>
        </div>
        <div className="form-item">
          <input
            className="form-input"
            type="email"
            name="email"
            required
          ></input>
          <label className="form-label">Email</label>
        </div>
        <div className="form-item">
          <input
            className="form-input"
            type="subject"
            name="subject"
            required
          ></input>
          <label className="form-label">Subject</label>
        </div>
        <div className="form-item">
          <textarea className="form-message" name="message" required></textarea>
          <label className="form-label">Message</label>
        </div>
        <div className="btn-alert">
          <button className="form-button" type="submit">
            Send
          </button>
          {alertMessage && <Alert alertMessage={alertMessage} />}
        </div>
      </form>

      <div className="contact-details-list">
        <span className="contact-list-item">
          <SocialIcon
            target="#"
            url="https://github.com/ethanrdj"
            network="github"
            bgColor="#dcdcdc"
            style={{ height: 30, width: 30 }}
          />
          &nbsp;&nbsp;
          <a
            className="contact-social-links"
            href="https://www.github.com/ethanrdj"
            target="#"
          >
            github.com/ethanrdj
          </a>
        </span>
        <span className="contact-list-item">
          <SocialIcon
            url="https://www.linkedin.com/in/ethanrdj/"
            target="#"
            network="linkedin"
            bgColor="#dcdcdc"
            style={{ height: 30, width: 30 }}
          />
          &nbsp;&nbsp;
          <a
            className="contact-social-links"
            href="https://www.linkedin.com/in/ethanrdj/"
            target="#"
          >
            linkedin.com/in/ethanrdj
          </a>
        </span>
        <span className="contact-list-item">
          <SocialIcon
            target="#"
            url="mailto: ethanrdavis96@gmail.com"
            network="mailto"
            bgColor="#dcdcdc"
            style={{ height: 30, width: 30 }}
          />
          &nbsp;&nbsp;
          <a
            className="contact-social-links"
            href="mailto: ethanrdavis96@gmail.com"
            target="#"
          >
            ethanrdavis96@gmail.com
          </a>
        </span>
      </div>
    </div>
  );
};

export default Contact;
