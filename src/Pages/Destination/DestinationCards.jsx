import React from 'react';
import "./DestinationCards.css";
export default function DestinationCards() {
    const destinations = [
        {
          name: "Kolar",
          img: "https://www.stayvista.com/blog/wp-content/uploads/2024/11/image-23.png",
          description: "Known for its Kolaramma Temple and ancient gold mines, Kolar is a serene stopover perfect for history enthusiasts. This town offers a peaceful break on a weekend getaway from Bangalore."
          },
        {
          name: "Nandi Hills",
          img: "https://www.stayvista.com/blog/wp-content/uploads/2024/11/image-24.png",
          description: "Just a short detour, Nandi Hills offers panoramic views and hiking trails, making it one of the top places to visit in Bangalore and a favorite day trip destination."
        },
        {
          name: "Golkonda Fort",
          img: "https://www.stayvista.com/blog/wp-content/uploads/2024/11/image-26-1536x1108.png",
          description: "Known for its grandeur and historical significance, Golkonda Fort showcases Hyderabad’s glorious past, offering breathtaking views of the city from the top.",
        },
        {
          name: "Hussain Sagar Lake",
          img: "https://www.stayvista.com/blog/wp-content/uploads/2024/11/7121201107_4ff3fc5915_c.jpg",
          description: "A serene spot in the heart of Hyderabad, Hussain Sagar Lake is a picturesque setting for boat rides, with the statue of Buddha in its center, making it ideal for a peaceful escape.",
        },
        {
          name: "Ramoji Film City",
          img: "https://media.insider.in/image/upload/c_crop,g_custom/v1729835960/mxzakrjybna5roy2qbom.jpg",
          description: "Perfect for film enthusiasts, Ramoji Film City offers a sprawling complex of movie sets and interactive exhibits, making it one of the best things to do in Bangalore on a trip to Hyderabad.",
        },
        {
          name: "Salar Jung Museum",
          img: "https://www.stayvista.com/blog/wp-content/uploads/2024/11/image-27.png",
          description: "This vast museum houses art, artifacts, and relics from around the world, captivating history buffs and art lovers alike.",
        },
      ];
  return (
    <div className="cards-container">
    {destinations.map((destination, index) => (
      <div className="card" key={index}>
        <div className="card-img">
          <img src={destination.img} alt={destination.name} />
        </div>
        <h3 className="card-title">{destination.name}</h3>
        <p className="card-text">{destination.description}</p>
        <button className="card-button">Explore More</button>
      </div>
    ))}
  </div>
  )
}
