import React from 'react'
import Carousel from './Carousel'
import Cards from './Cards';
import "./Home.css";
import FeaturesGrid from './Features';
import Footer from '../../components/Footer/Footer';

export default function Home() {
  
  // Data for cards
  const cardData = [
    {
      image: "https://www.holidify.com/images/bgImages/SRISAILAM.jpg",
      title: "Srisailam",
      description: "Srisailam, a hill town in Kurnool district of Andhra Pradesh is home to the holy Malikarjuna Jyotirlinga and also as one of the eighteen Shakti Peethas of goddess Parvati. Situated on the banks of river Krishna, Srisailam is identified with a wildlife sanctuary and a dam.",
      date: "Dec 10, 2024",
      BestTime: "October to February",
    },
    {
      image: "https://www.holidify.com/images/bgImages/TIRUPATI.jpg",
      title: "Tirupati",
      description: "Situated in the Chittoor district of Andhra Pradesh, Tirupati is known for Lord Venkateshwara Temple, one of the most visited pilgrimage centers in the world. It is also one of the world's richest temples known by different names - Tirumala Temple, Tirupati Temple, and Tirupati Balaji Temple.",
      date: "Dec 11, 2024",
      BestTime: "September to March",
    },
    {
      image: "https://www.holidify.com/images/bgImages/ARAKU-VALLEY.jpg",
      title: "Araku Valley",
      description: "Araku Valley, located in the picturesque Eastern Ghats, is a hidden gem of Andhra Pradesh. It offers a refreshing retreat from the hustle and bustle of city life, attracting nature lovers, adventure enthusiasts, and those seeking peace in the midst of natural beauty.",
      date: "Dec 12, 2024",
      BestTime: "September to February",
    },
  ];
  return (
    <>
    <Carousel/>
    {/* Section below carousel */}
    <div className="afterCarousel">
        <div className='textBlockAfterCarousel items-center'>
          <h3>Book AK Cab AnyTime</h3>
          <p>
            "Get ready to explore Hyderabad! Enjoy a smooth and reliable cab service 
            that takes you through the city's vibrant streets. Book your ride now 
            for a hassle-free travel experience like never before!"
          </p>
        </div>
        <button className="bookButton">Book Now</button>
      </div>

      {/* Recent Articles Section */}
      <h3 className="headingMiddle text-center md:text-3xl sm:text-2xl text-xl font-bold mb-8">
        Recent Articles About Places
      </h3>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Cards
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            date={card.date}
            link={card.link}
          />
        ))}
      </div>
      <h3 className="headingMiddle text-center md:text-3xl sm:text-2xl text-xl font-bold mb-8">
       Our Features
      </h3>
      <FeaturesGrid/>
      <div style={{ paddingBottom: "40px" }}> {/* Add sufficient padding */}
  {/* Main content */}
</div>
      <Footer/>
    </>
  )
}
