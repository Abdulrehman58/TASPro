import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Images from "../constant/images";
import { Button } from "react-bootstrap";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div className="position-relative">
    <img src={Images.Plan1} onDragStart={handleDragStart} role="presentation" />
    <span className="user-multi-services-content">
      <h5 className="user-content-title-card mb-3">Looking for Fridge Repair?</h5>
      <p className="user-content-card-text mb-3">
        AC Service repair at your doorstep
      </p>
      <Button className="btn-primary-detail-book">
        book now
        <span className="user-sharp-arrow">
          <img src={Images.ArrowTheme} className="img-fluid" alt="Arrow" />
        </span>
      </Button>
    </span>
  </div>,
  <img src={Images.Plan2} onDragStart={handleDragStart} role="presentation" />,
  <img src={Images.Plan3} onDragStart={handleDragStart} role="presentation" />,
  <img src={Images.Plan1} onDragStart={handleDragStart} role="presentation" />,
  <img src={Images.Plan2} onDragStart={handleDragStart} role="presentation" />,
  <img src={Images.Plan3} onDragStart={handleDragStart} role="presentation" />,
];

export const Gallery = () => {
  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <>
      <AliceCarousel mouseTracking items={items} responsive={responsive} />
    </>
  );
};
