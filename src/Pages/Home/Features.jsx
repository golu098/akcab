import React from 'react';
import "./FeaturesGrid.css";

const features = [
  {
    imgSrc: 'https://quickride.in/images/lower-fare.png',
    title: 'Lower Fares',
    text: 'Travel at 5-10% Lower Fares than other outstation cabs.',
    subText: 'Cheapest Outstation Taxi in Bangalore you can find.',
  },
  {
    imgSrc: 'https://quickride.in/images/schedule.png',
    title: 'Book Taxi in Advance',
    text: 'Schedule in Advance. Get on-time pick up.',
    subText: 'Pre-book Outstation Cabs in advance and get on-time pick up at your doorstep from anywhere in the city.',
  },
  {
    imgSrc: 'https://quickride.in/images/transparent-price.png',
    title: 'Transparent Pricing',
    text: 'Transparent Pricing all inclusive of fares like toll, parking.',
    subText: '',
  },
  {
    imgSrc: 'https://quickride.in/images/experienced-drivers.png',
    title: 'Professional & Quality Drivers',
    text: 'Well-behaved, professional and friendly drivers.',
    subText: '',
  },
  {
    imgSrc: 'https://quickride.in/images/clean-cars.png',
    title: 'Well-maintained Cars',
    text: 'Cleaner and recent cars for a pleasant travel experience.',
    subText: '',
  },
  {
    imgSrc: 'https://quickride.in/images/customer-support.png',
    title: '24x7 Customer Support',
    text: 'Best in class customer support at your services for a seamless outstation travel experience.',
    subText: '',
  },
];

const FeaturesGrid = () => {
  return (
    <div className="features-grid">
      {features.map((feature, index) => (
        <div className="feature-card" key={index}>
          <img src={feature.imgSrc} alt={feature.title} className="feature-image" />
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-text">{feature.text}</p>
          {feature.subText && <p className="feature-subtext">{feature.subText}</p>}
        </div>
      ))}
    </div>
  );
};

export default FeaturesGrid;
