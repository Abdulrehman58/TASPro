import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Images from "../../../constant/images";
import {
  appliancesContent,
  applicationDownload,
  chooseListing,
  handymanContent,
  homeCards,
  homeService,
  repairService,
  servicesTexts,
  servicesTextsTwo,
} from "../../../constant/dummyData";
import CarouselBanner from "../../../commonComponents/CarouselBanner";
import { Gallery } from "../../../commonComponents/MultiCarousel";
import { CleaningCarousel } from "../../../commonComponents/CleaningCarousel";
import { ServicesCarouselComponent } from "../../../commonComponents/MajorServicesCarousel";
import "../../screens.css";
import ApplicancesModal from "../../../commonComponents/AppliancesModal";
import { Screens } from "../../../constant/routes";

function HomeScreen() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <section className="home-banner-section">
        <Container>
          <Row>
            <Col lg={{ span: 5 }}>
              <div className="home-banner-left-content">
                <h4 className="heading-title-banner">
                  How can we serve you <br /> today?
                </h4>
                <ul className="mt-4 px-0 order-listing-banner-home">
                  {homeCards.map((item, index) => {
                    return (
                      <li className={item.className}>
                        <span className={item.spanClass}>
                          <img src={item.icon} className="img-fluid" />
                        </span>
                        <p className="mt-2 listing-card-label-paragraph">
                          {item.title}
                          <br />
                          {item.title2}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Col>
            <Col lg={{ span: 7 }}>
              <div className="user-banner-content-slide mt-2">
                <CarouselBanner />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="service-home-section">
        <Container>
          <Row>
            {homeService.map((item, index) => {
              return (
                <Col lg={{ span: 4 }} xs={{ span: 12 }}>
                  <div className="services-card-listing">
                    <img src={item.image} className="img-fluid" />
                    <h6 className="services-card-parargraph">{item.text}</h6>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col lg={{ span: 12 }}>
              <div className="mt-5 user-multi-services-slides">
                <h4 className="user-heading-title mb-4">AMC Service Plan</h4>
                <Gallery />
              </div>
            </Col>
          </Row>
          <div className="mt-5 user-multi-services-slides">
            <Row>
              <h4 className="user-heading-title mb-4">
                Appliances Repair & Service
              </h4>
              {repairService.map((item, index) => {
                return (
                  <Col
                    lg={{ span: 2 }}
                    md={{ span: 3 }}
                    sm={{ span: 6 }}
                    xs={{ span: 12 }}
                  >
                    <div className="user-repair-services">
                      <img src={item.image} className="img-fluid" />
                    </div>
                    <h6 className="services-card-parargraph mb-4">
                      {item.text}
                    </h6>
                  </Col>
                );
              })}
            </Row>
            <Row>
              <Col lg={{ span: 12 }}>
                <div className="mt-5 user-multi-services-slides user-multi-services-cleaning">
                  <h4 className="user-heading-title mb-4">
                    Deep Cleaning Services
                  </h4>
                  <CleaningCarousel />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={{ span: 12 }}>
                <div className="mt-5 user-multi-services-slides">
                  <h4 className="user-heading-title mb-4">Cleaning Package</h4>
                  <Gallery />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={{ span: 12 }}>
                <div className="mt-5 user-multi-services-slides">
                  <h4 className="user-heading-title mb-4">Handyman Services</h4>
                  <div className="mt-3 handyman-services-container">
                    {handymanContent.map((item, index) => {
                      return (
                        <>
                          <div className="handyman-services-column">
                            <img
                              src={item.image}
                              className="img-fluid-handyman"
                            />
                            <div className="text-center">
                              <p className="handyman-title text-center">
                                {item.text}
                              </p>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={{ span: 12 }}>
                <div className="mt-5 user-multi-services-slides user-multi-services-cleaning">
                  <h4 className="user-heading-title mb-4">Major Services</h4>
                  <ServicesCarouselComponent />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="application-packages-section mt-5">
        <Container className="application-packages-container">
          <Row>
            <Col lg={{ span: 6 }}>
              <div className="appliances-packages-column">
                {appliancesContent.map((item, index) => {
                  return (
                    <>
                      <div>
                        <h3 className="heading-sub-title">{item.title}</h3>
                        <p className="packages-description">{item.text}</p>
                        <Button
                          className="btn-primary-content-light"
                          onClick={() => setModalShow(true)}
                        >
                          {item.button}
                        </Button>
                      </div>
                    </>
                  );
                })}
              </div>
            </Col>
            <Col lg={{ span: 6 }}>
              <div className="user-packages-instrument text-center">
                <img src={Images.Machines} className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="application-choose-section mt-5">
        <Container className=" application-choose-container">
          <Row>
            <Col lg={{ span: 12 }}>
              <div className="text-center">
                <h5 className="choose-us-title ">Why Choose Us</h5>
                <p className="choose-us-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent egestas id erat a ornare. Donec bibendum venenatis
                  mollis. Aliquam id libero at mi bibendum venenatis at ac
                  purus.
                </p>
              </div>
            </Col>
            {chooseListing.map((item, index) => {
              return (
                <>
                  <Col lg={{ span: 4 }}>
                    <div key={index} className="user-choose-us-listing">
                      <span className="user-choose-label">
                        <img src={item.image} className="img-fluid" />
                      </span>
                      <div className="choose-us-username">
                        <h6 className="choose-us-title-username">
                          {item.title}
                        </h6>
                        <p className="choose-us-description">{item.text}</p>
                      </div>
                    </div>
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
      </section>
      <section className="application-download-section mt-5">
        <Container
          className=" application-choose-container
        application-download-container"
        >
          <Row>
            <Col lg={{ span: 6 }}>
              <div className="appliances-packages-column">
                {applicationDownload.map((item, index) => {
                  return (
                    <>
                      <div>
                        <h3 className="heading-sub-title">{item.title}</h3>
                        <p className="packages-description">{item.text}</p>
                        <span className="user-application-download">
                          <img
                            src={item.store}
                            className="img-fluid-content-download"
                          />
                        </span>
                        <span className="user-application-download">
                          <img
                            src={item.scan}
                            className="img-fluid-content-download"
                          />
                        </span>
                      </div>
                    </>
                  );
                })}
              </div>
            </Col>
            <Col lg={{ span: 6 }}>
              <div className="user-packages-instrument text-center">
                <img src={Images.Phone} className="img-fluid" />
              </div>
            </Col>
          </Row>
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
      <ApplicancesModal link={Screens.service} show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default HomeScreen;
