import React from 'react';
import "./Destination.css";
// import Footer from './Footer'; // Make sure to adjust the import according to your folder structure
import DestinationCards from './DestinationCards';

export default function Destination() {
  return (
    <>
      <div className="center-content">
        <h3 className="text-center md:text-3xl sm:text-2xl text-xl font-bold mb-8">
          Destination to Inspire Adventure
        </h3>
        <p>
          "Discover breathtaking locations around the world and plan your perfect getaway 
          with ease. Unleash your inner explorer as you uncover hidden gems, iconic landmarks, 
          and vibrant cultures."
        </p>
      </div>
      <DestinationCards/>
      <div style={{ paddingBottom: "60px" }}/>
      {/* <Footer/> */}
    </>
  );
}