import React from "react";
import { cleaningCard } from "../constant/dummyData";
import { Button } from "react-bootstrap";

function CarouselMap(props) {
  return (
    <>
      <div>
        {cleaningCard.map((item, index) => {
          return (
            <>
              <div className="user-multi-services-content">
                <img
                  src={props.image}
                  className="img-fluid img-fluid-carousel-content"
                />
                <div className="user-multi-services-detail">
                  <h6 className="user-content-title-card mb-3">
                    {props.title}
                  </h6>
                  <p className="user-content-card-text mb-3">
                    <span className="user-content-star-rate">
                      <img src={item.star} className="img-fluid" />
                    </span>
                    {item.rating}
                  </p>
                  <ul className="user-cleaning-container px-0">
                    <li className="user-cleaning-detail">
                      <p className="user-ammount-bottom">
                        <span className="user-theme-black">{props.bold} </span>
                        {props.light}
                      </p>
                    </li>
                    <li className="user-cleaning-detail">
                      <p className="user-ammount-bottom">{props.time} </p>
                    </li>
                    <li className="user-cleaning-detail">
                      <p className="user-ammount-bottom-succes">
                        {props.consult}
                      </p>
                    </li>

                    <li className="user-cleaning-detail">
                      <Button className=" btn-primary-fill-book">
                        {item.book}{" "}
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default CarouselMap;
