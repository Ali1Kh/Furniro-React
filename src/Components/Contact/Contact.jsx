import React from "react";
import Header from "../Constant/Navbar/Navbar";
import "./contact.css";
import Quality from "../Constant/Quality/Quality";
import Banner from "../Constant/Banner/Banner";
export default function Contact() {
  return (
    <div>
      <Header />
      <Banner title={"Contact"} />
      {/* <!-- Contact Section --> */}
      <section className="contact">
        <div className="section-header">
          <h3>Get In Touch With Us</h3>
          <p>
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="contact-container">
          {/* <!-- Contact Info --> */}
          <div className="contact-info">
            <div className="info-block">
              <span className="icon"></span>
              <div>
                <h4>Address</h4>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div className="info-block">
              <span className="icon"></span>
              <div>
                <h4>Phone</h4>
                <p>
                  Mobile: +(84) 546-6789
                  <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            <div className="info-block">
              <span className="icon"></span>
              <div>
                <h4>Working Time</h4>
                <p>
                  Monday–Friday: 9:00 – 22:00
                  <br />
                  Saturday–Sunday: 9:00 – 21:00
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Contact Form --> */}
          <form className="contact-form">
            <label for="name">Your name</label>
            <input type="text" id="name" placeholder="Name" required />
            <label for="email">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="lorem@example.com"
              required
            />
            <label for="subject">Subject</label>
            <input type="text" id="subject" placeholder="This is an optional" />
            <label for="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Hi! I’d like to ask about"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
      <Quality />
    </div>
  );
}
