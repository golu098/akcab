import React from "react";
import "./Card.css";

const Cards = ({ image, title, description, date, link }) => {
  return (
    <div className="post-slide">
      <div className="post-img">
        <img src={image} alt="Post" />
        <a href={link} className="over-layer">
          <i className="fa fa-link"></i>
        </a>
      </div>
      <div className="post-content">
        <h3 className="post-title">
          <a href={link}>{title}</a>
        </h3>
        <p className="post-description">{description}</p>
        <span className="post-date">
          <i className="fa fa-clock-o"></i> {date}
        </span>
        <a href={link} className="read-more">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Cards;
