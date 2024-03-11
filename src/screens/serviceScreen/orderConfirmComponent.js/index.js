import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Accordion,
} from "react-bootstrap";
import Images from "../../../constant/images";
import {
  amountSummary,
} from "../../../constant/dummyData";
import { CleaningCarousel } from "../../../commonComponents/CleaningCarousel";
import { useNavigate } from "react-router-dom";

function OrderConfirmComponent() {
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
    <>
      <section className="home-banner-section">
        <Container>
          <Row>
            <Col lg={{ span: 7 }}>
              <div className="home-banner-left-content">
                <h5 className="choose-us-title-video">
                  Thanks for giving us opportunity to serve you better
                </h5>
                <h6 className="choose-banner-paragraph-order mt-3">
                  Service Delivery by Fri, 26-jan-2024
                </h6>
                <h6
                  className="choose-banner-paragraph-order mt-3
                choose-banner-paragraph-blue"
                >
                  Track & Manage Order
                </h6>
                <div className="mt-4 order-confirm-detail-success">
                  <span className="img-label-order">
                    <img src={Images.IconTick} className="img-fluid" />
                  </span>
                  <div className="confirm-detail-success-right">
                    <h5
                      className="confirm-order-alert-title
                        text-capitalize"
                    >
                      Order Confirmed
                    </h5>
                    <p className="confirm-order-alert-description mt-3">
                      Your Request has been sensed successfully. You will
                      receive a notification for update
                    </p>
                  </div>
                </div>

                <div className="mt-5 box-cart-container position-relative">
                  <h5 className="user-provider-dummy mb-4">Customer Details</h5>
                  <div
                    className="d-flex justify-between
                  box-cart-container-view"
                  >
                    <div className="">
                      <h6
                        className="user-provider-name
                      user-provider-name-confirm"
                      >
                        <span className="mr-3">
                          <img
                            src={Images.LocationBlue}
                            className="img-fluid"
                          />
                        </span>
                        Mr Tikesh Dewangan
                        <span className="user-provider-label-home">home</span>
                      </h6>
                      <p className="user-provider-label-description mt-4">
                        Office No 201, atlantis Corporate Park, Ring Road
                        No.1,Telibandha, Raipur 492001+91 7247799900
                        <span className=" mx-3">
                          <img src={Images.Cart1} alt="" />
                        </span>
                      </p>
                      <h6
                        className="choose-banner-paragraph-order mt-3
                choose-banner-paragraph-blue"
                      >
                        Track & Manage Order
                      </h6>
                    </div>

                    <Button
                      className=" btn-primary-fill-book-border"
                      onClick={() => navigate("")}
                    >
                      change address
                    </Button>
                  </div>
                </div>
                <div className="mt-5 box-cart-container position-relative">
                  <div
                    className="d-flex justify-between
                  box-cart-container-view"
                  >
                    <span className="mr-3">
                      <img src={Images.SimCard} className="img-fluid" />
                    </span>
                    <div className="view-flex-title">
                      <h6
                        className="user-provider-name
                      user-provider-name-confirm"
                      >
                        Service providers require OTPs for avail Service
                      </h6>
                      <p className="user-provider-label-description mt-3">
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit, sed qu
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={{ span: 5 }}>
              <div
                className="
                company-detail-content-alert
                company-detail-content-dropdown mt-5"
              >
                <Accordion defaultActiveKey="0">
                  <Accordion.Item className="mb-4">
                    <Accordion.Header>
                      <div className="company-user-training-sub">
                        <span className="company-user-listing-label">
                          <img src={Images.Coupans} className="img-fluid" />
                        </span>
                        <div className="company-user-listing-right">
                          <h6 className="choose-us-title-username">
                            Hey! you have a new coupons
                          </h6>
                          <p className="choose-us-description mb-0">
                            Tap to see what you have won
                          </p>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>cfwfcwefcwe</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="mt-5 box-cart-container position-relative">
                <h5 className="user-provider-dummy">amount summary</h5>
                {amountSummary.map((item, index) => {
                  return (
                    <>
                      <div className="display-view-web-cart mt-3">
                        <p className={item.class}>{item.title}</p>
                        <h6 className={item.class2}>{item.value}</h6>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="mt-4  text-center">
                <div className="box-cart-success-amount">
                  <div className="text-center mt-3">
                    <Button
                      className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded"
                    >
                      back to home
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="service-home-section">
        <Container>
          <div className="mt-5 user-multi-services-slides">
            <Row>
              <Col lg={{ span: 12 }}>
                <div className="mt-5 user-multi-services-slides user-multi-services-cleaning">
                  <h4 className="user-heading-title mb-5">
                    You might be also interested in
                  </h4>
                  <CleaningCarousel />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default OrderConfirmComponent;
