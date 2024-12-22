import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './DestinationDetails.css';
import { FaCalendar, FaCar, FaMapMarkedAlt, FaThumbsUp, FaMoneyBillWaveAlt } from 'react-icons/fa';

const DestinationDetails = () => {
  const { destinationName } = useParams();
  const [showMap, setShowMap] = useState(false);

  const destinationData = {
    Kolar: {
      description: "Known for its Kolaramma Temple and ancient gold mines...",
      itineraries: ["Visit Kolaramma Temple", "Explore gold mines", "Enjoy local cuisine"],
      bestTime: "October to February",
      bestMonths: ["October", "November", "December", "January", "February"],
      travelMeans: ["Road", "Train"],
      cabPrice: "$50",
      images: [
        "https://images4.alphacoders.com/678/thumb-1920-678317.jpg",
        "https://images5.alphacoders.com/653/653698.jpg",
        "https://images6.alphacoders.com/803/thumb-1920-803643.png",
        "https://images.alphacoders.com/785/thumb-1920-785833.png",
        "https://images6.alphacoders.com/749/thumb-1920-749966.png",
        "https://images4.alphacoders.com/761/thumb-1920-761076.png",
        "https://images.alphacoders.com/682/thumb-1920-682570.png",
        "https://images4.alphacoders.com/866/thumb-1920-866812.png",
      ],
      feedback: [
        { name: "Alice", comment: "Amazing place with historical significance!" },
        { name: "Bob", comment: "Loved the peaceful ambiance and the temple." },
      ],
      mapLocation:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497244.07885142893!2d77.88328330541438!3d13.180086075698032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badeae91c4f0bb3%3A0xc70f84f1e54a3562!2sKolar%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1734850174616!5m2!1sen!2sin",
    },
    // Add similar details for other destinations
  };

  const details = destinationData[destinationName] || {};

  return (
    <div className="details-container">
      <h1 className="details-title">{destinationName}</h1>
      <p className="details-description">{details.description}</p>

      <h2>Gallery</h2>
      <div className="gallery">
        {details.images?.map((src, index) => (
          <span key={index} style={{ "--i": index + 1 }}>
            <img src={src} alt={`${destinationName} ${index + 1}`} />
          </span>
        ))}
      </div>

      <div className="cards-container">
        <div className="card">
          <FaCalendar size={30} />
          <h3>Itineraries</h3>
          <ul>
            {details.itineraries?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="card">
          <FaMapMarkedAlt size={30} />
          <h3>Best Time to Visit</h3>
          <p>{details.bestTime}</p>
        </div>

        <div className="card">
          <FaCalendar size={30} />
          <h3>Best Months</h3>
          <p>{details.bestMonths?.join(", ")}</p>
        </div>

        <div className="card">
          <FaCar size={30} />
          <h3>Travel Means</h3>
          <p>{details.travelMeans?.join(", ")}</p>
        </div>

        <div className="card">
          <FaMoneyBillWaveAlt size={30} />
          <h3>Cab Price</h3>
          <p>{details.cabPrice}</p>
        </div>
      </div>

      <h2>Customer Feedback</h2>
      <div className="feedback-section">
        {details.feedback?.map((review, index) => (
          <div key={index} className="feedback-card">
            <h4>{review.name}</h4>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>

      <button className="map-toggle-button" onClick={() => setShowMap(!showMap)}>
        {showMap ? "Hide Map" : "View Map"}
      </button>

      {showMap && (
        <div className={`map-container ${showMap ? "map-show" : "map-hide"}`}>
          <iframe
            src={details.mapLocation}
            title={`${destinationName} Map`}
            allowFullScreen=""
            loading="lazy"
            className="map-frame"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default DestinationDetails;
