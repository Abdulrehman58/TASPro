import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  FormControl,
  Accordion,
} from "react-bootstrap";
import Images from "../../../constant/images";
import {
  acRepairArea,
  cartWarranty,
  comapnyTraining,
  countCartBox,
  couponsContent,
  servicesTexts,
  servicesTextsTwo,
  splitAcProfile,
} from "../../../constant/dummyData";
import CarouselBanner from "../../../commonComponents/CarouselBanner";
import { CleaningCarousel } from "../../../commonComponents/CleaningCarousel";
import "../../screens.css";
import { useNavigate } from "react-router-dom";
import { SplitAc } from "../../../commonComponents/SplitAc";
import { CustomerProfile } from "../../../commonComponents/CustomerProfile";
import { AcBrands } from "../../../commonComponents/AcBrands";
import FaqsComponent from "../../../component/faqs/Faqs";
import { Screens } from "../../../constant/routes";
import DeepServiceModal from "../../../commonComponents/DeepServiceModal";
import AddCapacityModal from "../../../commonComponents/servicesModal/AddCapacityModal";
import AmcModal from "../../../commonComponents/servicesModal/AmcDuration";

function ServiceCartCoupons() {
  const navigate = useNavigate();
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);

  const handleFirstModalContinue = () => {
    setShowFirstModal(false);
    setShowSecondModal(true);
  };

  const handleSecondModalContinue = () => {
    setShowSecondModal(false);
    setShowThirdModal(true);
  };
  const handleThirdModalContinue = () => {};
  const [modalShow, setModalShow] = React.useState(false);
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
            <Col lg={{ span: 5 }}>
              <div className="home-banner-left-content">
                <h5 className="user-provider-dummy ">
                  <span onClick={() => navigate("")}>Home </span>
                  <span onClick={() => navigate("")}>
                    / AC & Appliance Repair{" "}
                  </span>
                  <span onClick={() => navigate("")}>/ AC Repair</span>
                </h5>
                <h4 className="heading-title-banner">
                  Best Air Condition (AC) Repair Service in Raiour
                </h4>
                <p className="choose-us-description">
                  <span className="choose-us-star-data">
                    <img src={Images.Star} className="img-fluid " />
                  </span>
                  <span className="text-bold-dark-black">4.5</span> 480 review |
                  <span className="text-bold-dark-black"> 5785 </span> Bookings
                  in Raipur
                </p>
                <div className="mt-5 box-cart-container position-relative">
                  <span className="box-cart-main-label-mark">
                    <img src={Images.Mark} className="img-fluid" />
                    TAS<span className="color-theme-orange">Pro </span> Cover
                  </span>
                  {cartWarranty.map((item, index) => {
                    return (
                      <>
                        <div
                          className="box-cart-content-container"
                          onClick={() => navigate(Screens.rateCard)}
                        >
                          <div className="cart-box-left">
                            <span className="choose-us-star-data">
                              <img src={item.image} className="img-fluid " />
                            </span>
                            <span className="choose-us-star-warranty">
                              {item.text}
                            </span>
                          </div>
                          <div className="cart-box-right">
                            <img src={item.arrow} className="img-fluid" />
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </Col>
            <Col lg={{ span: 7 }}>
              <div className="user-banner-content-slide mt-2">
                <CarouselBanner />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={{ span: 6 }}>
              <div
                className="mt-5 user-multi-services-slides 
              user-multi-services-split"
              >
                <SplitAc />
              </div>
              {splitAcProfile.map((item, index) => {
                return (
                  <>
                    <div className=" split-ac-service-box-container mb-3">
                      <h4 className="heading-title-banner">{item.title}</h4>
                      <div className="split-ac-flex-container mt-4">
                        <div className="split-ac-flex-left">
                          <div className="position-relative">
                            <span className="split-ac-label-service">
                              <img src={item.image} className="img-fluid" />
                            </span>
                            <Button
                              className=" btn-primary-fill-book"
                              onClick={() => setShowFirstModal(true)}
                            >
                              {item.button}
                            </Button>
                          </div>
                          <div className="split-ac-username">
                            <span className="user-date-warranty">
                              {item.warranty}
                            </span>
                            <h6 className="user-power-title">{item.heading}</h6>
                            <p className="user-content-card-text mb-3">
                              <span className="user-content-star-rate">
                                <img src={item.star} className="img-fluid" />
                              </span>
                              {item.rate}
                            </p>
                            <p className="user-content-time-estimate mb-3">
                              <span className="user-content-star-rate">
                                <img src={item.time} className="img-fluid" />
                              </span>
                              {item.estimation}
                            </p>
                          </div>
                        </div>
                        <div className="split-ac-flex-right">
                          <h6 className="split-ac-title-small">
                            {item.amount1}{" "}
                            <span className="font-weight-normal">
                              {item.amount2}
                            </span>
                          </h6>
                          <p className="user-off-percent">{item.off}</p>
                        </div>
                      </div>
                      <ul className="px-3 mt-3">
                        <li className="user-split-paragraph">{item.text1}</li>
                        <li className="user-split-paragraph">{item.text2}</li>
                      </ul>
                      <h6 className="user-details-more-split">{item.detail}</h6>
                    </div>
                  </>
                );
              })}
            </Col>
            <Col lg={{ span: 6 }}>
              <div
                className="mt-5 box-cart-container
                company-detail-content-empty"
              >
                <h5 className="empty-logo-title mb-3 mt-1">Cart</h5>
                {countCartBox.map((item, index) => {
                  return (
                    <>
                      <div className="cart-amount-split-box" key={index}>
                        <h6 className="cart-amount-split-left">{item.title}</h6>
                        <div className="input-group input-group-form-box">
                          <div className="input-group-prepend">
                            <Button
                              className="btn btn-outline-primary
                        btn-outline-primary-increment"
                              type="button"
                              onClick={decNum}
                            >
                              {item.minus}
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
                              {item.plus}
                            </Button>
                          </div>
                        </div>
                        <div className="split-ac-flex-right">
                          <h6 className="split-ac-title-small">{item.text}</h6>
                          <span className="font-weight-normal">
                            {item.text2}
                          </span>
                        </div>
                      </div>
                    </>
                  );
                })}
                <ul className="user-cleaning-container px-0 mt-4">
                  <li className="user-cleaning-detail">
                    <h6 className="split-ac-title-small">₹598</h6>
                    <p className="user-ammount-bottom-succes">
                      You save ₹102 on this order
                    </p>
                  </li>

                  <li className="user-cleaning-detail">
                    <Button className=" btn-primary-fill-book">
                      View Cart
                    </Button>
                  </li>
                </ul>
              </div>
              <div
                className=" box-cart-container
                company-detail-content-empty"
              >
                <h5 className="empty-logo-title mb-3 mt-1">
                  Why TASPro Company?
                </h5>
                <ul className="px-0">
                  {comapnyTraining.map((item, index) => {
                    return (
                      <>
                        <li key={index} className="company-user-training">
                          <span className="company-user-listing-label">
                            <img src={item.image} className="img-fluid" />
                          </span>
                          <p className="contact-phone-text">{item.text}</p>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
              <div
                className="
                company-detail-content-alert
                company-detail-content-dropdown"
              >
                <Accordion defaultActiveKey="0">
                  {couponsContent.map((item, index) => {
                    return (
                      <>
                        <Accordion.Item className="mb-4" eventKey={item.key}>
                          <Accordion.Header>
                            <div className="company-user-training-sub">
                              <span className="company-user-listing-label">
                                <img src={item.image} className="img-fluid" />
                              </span>
                              <div className="company-user-listing-right">
                                <h6 className="choose-us-title-username">
                                  {item.title}
                                </h6>
                                <p className="choose-us-description mb-0">
                                  {item.helpingText}
                                </p>
                              </div>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="company-user-training-sub mb-4">
                              <span className="company-user-listing-label">
                                <img src={item.percent} className="img-fluid" />
                              </span>
                              <div className="company-user-listing-right">
                                <h6 className="choose-us-title-coupans">
                                  {item.subTitle}
                                </h6>
                                <p className="choose-us-description mb-0">
                                  {item.text}
                                </p>
                              </div>
                            </div>
                            <div className="company-user-training-sub mb-4">
                              <span className="company-user-listing-label">
                                <img src={item.percent} className="img-fluid" />
                              </span>
                              <div className="company-user-listing-right">
                                <h6 className="choose-us-title-coupans">
                                  {item.subTitle}
                                </h6>
                                <p className="choose-us-description mb-0">
                                  {item.text}
                                </p>
                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </>
                    );
                  })}
                </Accordion>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="application-packages-section mt-5">
        <Container className="application-customers-review-container">
          <Row>
            <Col lg={{ span: 12 }}>
              <div className="text-right">
                <h5 className="user-service-customers-title">
                  What our Customers Say?
                </h5>
                <p
                  className="user-content-card-text mb-3
                text-white text-capitalize"
                >
                  <span className="user-content-star-rate">
                    <img src={Images.Star} className="img-fluid" />
                  </span>
                  4.5(12m reviews)
                </p>
              </div>
              <div
                className="mt-5 user-multi-services-slides 
              user-multi-services-split user-multi-services-customer"
              >
                <CustomerProfile />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="application-packages-section mt-5">
        <Container>
          <Row>
            <Col lg={{ span: 12 }}>
              <div
                className="application-brands-covered 
              user-multi-services-slides  user-multi-services-split"
              >
                <h4 className="heading-title-banner mb-4">
                  We covered AC Brand
                </h4>
                <AcBrands />
              </div>
            </Col>
            <Col lg={{ span: 12 }}>
              {acRepairArea.map((item, index) => {
                return (
                  <>
                    <div className="user-ac-repair-areas mb-5">
                      <h4 className="heading-title-banner mb-4">
                        {item.title}
                      </h4>
                      <p className="heading-text-repair-area">{item.text}</p>
                    </div>
                  </>
                );
              })}
            </Col>
            <Col lg={{ span: 12 }}>
              <div className="user-ac-repair-areas mb-5">
                <h4 className="heading-title-banner mb-4">
                  Frequently Asked Questions (FAQ)?
                </h4>
                <div className="">
                  <FaqsComponent />
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
                    You may like our other services
                  </h4>
                  <CleaningCarousel />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="on-demand-service-section mt-5 ">
        <Container>
          <Row>
            <Col lg={{ span: 12 }}>
              <div className="on-demands-services-detail">
                <h5 className="choose-us-title mb-4">
                  On-demand Services we offer in Raipur Chhattisgarh
                </h5>
                {servicesTexts.map((item, index) => {
                  return (
                    <>
                      <h6 className="demands-services-subtite">{item.title}</h6>
                      <p className="choose-us-paragraph mb-4">{item.text}</p>
                    </>
                  );
                })}
                <h5 className="choose-us-title mb-4">
                  AMC Services we offer in Raipur Chhattisgarh
                </h5>
                {servicesTextsTwo.map((item, index) => {
                  return (
                    <>
                      <h6 className="demands-services-subtite">{item.title}</h6>
                      <p className="choose-us-paragraph mb-4">{item.text}</p>
                    </>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="services-provider-section">
        <Container>
          <h5 className="user-provider-dummy">
            Serving Cities: Raipur | New Raipur | Durg | Bhilai | Korba |
            Raigarh | Kanker
          </h5>
        </Container>
      </section>
      <AddCapacityModal
        show={showFirstModal}
        onHide={() => handleFirstModalContinue(false)}
        onContinue={handleFirstModalContinue}
      />
      <AmcModal
        show={showSecondModal}
        onHide={() => handleSecondModalContinue(false)}
        onContinue={handleSecondModalContinue}
      />
      <DeepServiceModal
        show={showThirdModal}
        onHide={() => handleThirdModalContinue(false)}
        onContinue={handleThirdModalContinue}
        screen={Screens.amccartPage}
      />
    </>
  );
}

export default ServiceCartCoupons;
