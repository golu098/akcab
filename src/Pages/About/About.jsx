import React from "react";
import "./About.css";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>About Premium Car Rentals</h1>
          <p>Delivering exceptional car rental experiences since 1995</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story">
        <h2>Our Story</h2>
        <p>
          Premium Car Rentals began with a simple vision: to provide exceptional
          car rental services that exceed customer expectations. What started
          with just three cars has grown into a fleet of over 500 premium
          vehicles, serving thousands of satisfied customers across the
          country.
        </p>
        <p>
          Our commitment to quality, convenience, and customer satisfaction has
          made us the preferred choice for both business and leisure travelers.
          We take pride in maintaining our vehicles to the highest standards
          and offering transparent, competitive pricing.
        </p>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="values-container">
          <div className="value-card">
            <h3><b>Quality Assurance</b></h3>
            <p>
              Every vehicle in our fleet undergoes rigorous maintenance and
              quality checks to ensure your safety and comfort.
            </p>
          </div>
          <div className="value-card">
            <h3><b>Customer First</b></h3>
            <p>
              We prioritize your needs and preferences, offering personalized
              service and 24/7 support throughout your rental period.
            </p>
          </div>
          <div className="value-card">
            <h3><b>Transparency</b></h3>
            <p>
              No hidden fees or surprises. We believe in clear communication and
              honest pricing for all our services.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <h4>5+</h4>
            <p>Premium Vehicles</p>
          </div>
          <div className="stat-item">
            <h4>20k+</h4>
            <p>Happy Customers</p>
          </div>
          <div className="stat-item">
            <h4>25+</h4>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h4>80+</h4>
            <p>Locations</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Our Leadership Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img
              src="https://i.ibb.co/BGFhNLr/myPic.jpg"
              alt="Team Member"
            />
           <h3>Shiv Kant</h3>
           <p>Manager</p>
          </div>
          <div className="team-member">
            <img
              src="https://i.ibb.co/BGFhNLr/myPic.jpg"
              alt="Team Member"
            />
           <h3>Shiv Kant</h3>
           <p>Manager</p>
          </div>
          <div className="team-member">
            <img
              src="https://i.ibb.co/BGFhNLr/myPic.jpg"
              alt="Team Member"
            />
            <h3>Shiv Kant</h3>
            <p>Manager</p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
    
  );
};

export default About;
