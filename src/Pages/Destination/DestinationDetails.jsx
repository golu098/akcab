import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './DestinationDetails.css';
import {
  FaCalendar,
  FaCar,
  FaMapMarkedAlt,
  FaThumbsUp,
  FaMoneyBillWaveAlt,
} from 'react-icons/fa';

const DestinationDetails = () => {
  const { destinationName } = useParams();
  const [showMap, setShowMap] = useState(false);

  const destinationData = {
    Kolar: {
      description: 'Known for its Kolaramma Temple and ancient gold mines...',
      itineraries: [
        'Visit Kolaramma Temple',
        'Explore gold mines',
        'Enjoy local cuisine',
      ],
      bestTime: 'October to February',
      bestMonths: ['October', 'November', 'December', 'January', 'February'],
      travelMeans: ['Road', 'Train'],
      cabPrice: '$50',
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/2/20/View_from_the_rear_of_Someshwara_temple_at_Kolar.jpg',
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/df/2a/c1/lrm-export-20160902-230306.jpg?w=500&h=-1&s=1',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGuaC6Pup5Fykss1RpoPEOPedN6SJcixDutxxEbIgdTUvMqyTFWh-E1cw7F3DTkZekw8A&usqp=CAU',
        'https://thehindustangazette.com/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-08-at-17.09.35.jpeg',
        'https://hblimg.mmtcdn.com/content/hubble/img/ttd_images/mmt/activities/t_ufs/m_Kolar_Koti_lingeshwara_temple_1_l_480_640.jpg',
      ],
      feedback: [
        {
          name: 'Alice',
          comment: 'Amazing place with historical significance!',
          image: 'https://randomuser.me/api/portraits/women/44.jpg',
          rating: 5,
        },
        {
          name: 'Bob',
          comment: 'Loved the peaceful ambiance and the temple.',
          image: 'https://randomuser.me/api/portraits/men/32.jpg',
          rating: 4,
        },
      ],
      mapLocation:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497244.07885142893!2d77.88328330541438!3d13.180086075698032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badeae91c4f0bb3%3A0xc70f84f1e54a3562!2sKolar%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1734850174616!5m2!1sen!2sin',
    },
    NandiHills: {
      description: 'Known for its Kolaramma Temple and ancient gold mines...',
      itineraries: [
        'Visit Kolaramma Temple',
        'Explore gold mines',
        'Enjoy local cuisine',
      ],
      bestTime: 'October to February',
      bestMonths: ['October', 'November', 'December', 'January', 'February'],
      travelMeans: ['Road', 'Train'],
      cabPrice: '$50',
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/2/20/View_from_the_rear_of_Someshwara_temple_at_Kolar.jpg',
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/df/2a/c1/lrm-export-20160902-230306.jpg?w=500&h=-1&s=1',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGuaC6Pup5Fykss1RpoPEOPedN6SJcixDutxxEbIgdTUvMqyTFWh-E1cw7F3DTkZekw8A&usqp=CAU',
        'https://thehindustangazette.com/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-08-at-17.09.35.jpeg',
        'https://hblimg.mmtcdn.com/content/hubble/img/ttd_images/mmt/activities/t_ufs/m_Kolar_Koti_lingeshwara_temple_1_l_480_640.jpg',
      ],
      feedback: [
        {
          name: 'Alice',
          comment: 'Amazing place with historical significance!',
          image: 'https://randomuser.me/api/portraits/women/44.jpg',
          rating: 5,
        },
        {
          name: 'Bob',
          comment: 'Loved the peaceful ambiance and the temple.',
          image: 'https://randomuser.me/api/portraits/men/32.jpg',
          rating: 4,
        },
      ],
      mapLocation:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497244.07885142893!2d77.88328330541438!3d13.180086075698032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badeae91c4f0bb3%3A0xc70f84f1e54a3562!2sKolar%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1734850174616!5m2!1sen!2sin',
    }
  };

  const renderFeedback = () => {
    if (!details.feedback || details.feedback.length === 0) {
      return <p>No feedback available for this destination.</p>;
    }
    return (
      <div className="feedback-section">
        {details.feedback.map((review, index) => (
          <div key={index} className="feedback-card">
            <div className="feedback-header">
              <img
                src={review.image || 'https://via.placeholder.com/50'}
                alt={review.name}
                className="feedback-image"
              />
              <div>
                <h4 className="feedback-name">{review.name}</h4>
                <p className="feedback-rating">
                  {Array(review.rating)
                    .fill()
                    .map((_, i) => (
                      <span key={i} className="star">
                        ★
                      </span>
                    ))}
                </p>
              </div>
            </div>
            <p className="feedback-comment">{review.comment}</p>
          </div>
        ))}
      </div>
    );
  };

  const details = destinationData[destinationName] || {};

  return (
    <div className="details-container pt-10">
      <h1 className="details-title">{destinationName}</h1>
      <p className="details-description">{details.description}</p>

      <h2>Gallery</h2>
      <ul className="results align-middle pl-10">
        {details.images?.map((src, index) => (
          <li className="result" key={index}>
            <a href={src} target="_blank" rel="noopener noreferrer">
              <img src={src} alt={`${destinationName} ${index + 1}`} />
            </a>
          </li>
        ))}
      </ul>

      <div className="cards-container">
        <div className="card">
          <center>
            <FaCalendar size={30} style={{ color: 'green' }} />
          </center>
          <h3>Itineraries</h3>
          <ul>
            {details.itineraries?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="card">
          <center>
            <FaMapMarkedAlt size={30} style={{ color: 'green' }} />
          </center>
          <h3>Best Time to Visit</h3>
          <p>{details.bestTime}</p>
        </div>

        <div className="card">
          <center>
            <FaCalendar size={30} style={{ color: 'green' }} />
          </center>
          <h3>Best Months</h3>
          <p>{details.bestMonths?.join(', ')}</p>
        </div>

        <div className="card">
          <center>
            <FaCar size={30} style={{ color: 'green' }} />
          </center>
          <h3>Travel Means</h3>
          <p>{details.travelMeans?.join(', ')}</p>
        </div>

        <div className="card">
          <center>
            <FaMoneyBillWaveAlt size={30} style={{ color: 'green' }} />
          </center>
          <h3>Cab Price</h3>
          <p>{details.cabPrice}</p>
        </div>
      </div>

      <h2>Feedback</h2>
      {renderFeedback()}

      <h2>Location</h2>
      {details.mapLocation && (
        <iframe
          src={details.mapLocation}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title={`${destinationName} map`}
        ></iframe>
      )}
    </div>
  );
};

export default DestinationDetails;
