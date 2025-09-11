import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import { ProjectData } from "./ProjectData";

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
      {ProjectData.map((event, index) => (
        <div className='carousel-card'>
            <div className="carose">
                <div className="projects-topbar">
                    <div className="projects-items">
                        <div className="circle red"></div>
                        <div className="circle orange"></div>
                        <div className="circle green"></div>
                        <div className="ProjectName">{event.name}</div>
                    </div>
                </div>
             <div className="ProjectRole"><div className="Role-header">My Role:</div>{event.role}</div>
                <div className="ProjectTools"><div className="Tools-header">Tools:</div>{event.tools}</div>
                <div className="ProjectDescription"><div className="Descript-header">Description:</div>{event.description}</div>
            </div>
            </div>
            ))}
      </Slider>
    </div>
  );
};