import { Row, Col, Modal, Button, FormControl } from "react-bootstrap";
import {
  modalService,
  textDetailService,
  workFlow,
} from "../constant/dummyData";
import { useNavigate } from "react-router-dom";
import Images from "../constant/images";
import { useState } from "react";
import { CleaningCarousel } from "./CleaningCarousel";
import { FrequentlyCarousel } from "./FrequentlyCarousel";
import { Screens } from "../constant/routes";

function DeepServiceModal(props) {
  const navigate = useNavigate();
  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };
  return (
    <div className="modal-content-main-container">
      <Modal
        className="modal-content-order-service"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="modal-services-body">
            <video style={{ height: 360, width: "100%" }} controls>
              <source
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
                type="video/mp4"
              ></source>
            </video>
            <div className="cart-amount-split-box mb-1">
              <h5 className="choose-us-title-video">
                Deep Clean AC Service
                <br />
                (Split)
              </h5>
              <div className="split-ac-flex-right">
                <h6 className="split-ac-title-small">
                  ₹499.00
                  <span className="font-weight-normal">₹599</span>
                </h6>
              </div>
              <div className="input-group input-group-form-box">
                <div className="input-group-prepend">
                  <Button
                    className="btn btn-outline-primary
                        btn-outline-primary-increment"
                    type="button"
                    onClick={decNum}
                  >
                    -
                  </Button>
                </div>
                <FormControl
                  type="text"
                  className="form-control-content-text text-center"
                  value={num}
                  onChange={handleChange}
                />
                <div className="input-group-prepend">
                  <Button
                    className="btn btn-outline-primary
                        btn-outline-primary-increment"
                    type="button"
                    onClick={incNum}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
            <p className="user-content-card-text mb-3">
              <span className="user-content-star-rate">
                <img src={Images.Star} className="img-fluid" />
              </span>
              4.83 (1.2M reviews) | . 45 mins approx
            </p>
            <p
              className="user-ammount-bottom-succes
            text-capitalize"
            >
              30 Days Warranty
            </p>
            <div
              className="box-cart-content-container
            box-hidden-charges-container"
            >
              <div className="cart-box-left">
                <h6 className="choose-us-title-coupans">
                  Standard Rate Card no hidden chardes
                </h6>
              </div>
              <div className="cart-box-right">
                <img src={Images.ArrowRight} className="img-fluid" />
              </div>
            </div>
            <h5 className="choose-us-title-video mt-4">How it Works?</h5>
            {workFlow.map((item, index) => {
              return (
                <>
                  <div className="cart-amount-split-box mb-1 mt-3 justify-left">
                    <span className="cart-amount-split-label">
                      <img src={item.image} className="img-fluid" />
                    </span>
                    <div className="split-ac-flex-right">
                      <p className="contact-phone-text max-width-90">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
            <div className="service-content-box-modal">
              {textDetailService.map((item, index) => {
                return (
                  <>
                    <h5 className="choose-us-title-video mt-4">{item.title}</h5>
                    <p className="services-modal-description">{item.text}</p>
                  </>
                );
              })}
            </div>
            <div className="mt-5 user-multi-services-slides user-multi-services-cleaning">
              <h4 className="user-heading-title mb-5">
                Frequently Added Together
              </h4>
              <FrequentlyCarousel />
            </div>
            <div className="mt-3 modal-service-footer-box">
              <div className="modal-service-left-footer">
                <div className="cart-amount-split-box mb-1 mt-3 justify-left">
                  <span className="cart-amount-detail-label">
                    <img src={Images.OneLabel} className="img-fluid" />
                  </span>
                  <div className="split-ac-flex-right">
                    <h6 className="split-ac-title-small split-ac-title-small-little">
                      ₹299 <span className="font-weight-normal"> ₹350 </span>
                    </h6>
                    <p className="contact-phone-text split-ac-title-small-little">
                      12 Month Plan
                    </p>
                  </div>
                </div>
              </div>
              <div className="modal-service-right-footer">
                <Button className=" btn-primary-fill-book"
                onClick={()=>navigate(props.screen)}>
                    view cart
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DeepServiceModal;
