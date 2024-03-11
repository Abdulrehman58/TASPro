import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "../../auth.css";
import Images from "../../constant/images";

function Login() {
  return (
    <>
      <section className="user-content-auth-section text-center">
        <Container>
          <Row style={{ justifyContent: "center" }}>
            <div className="user-content-card-box">
              <div className="user-content-form-box">
                <div className="content-form-left-side">
                  <span className="content-form-auth-logo">
                    <img src={Images.AuthLogo} className="img-fluid" />
                  </span>
                  <div className="content-form-auth-container text-center">
                    <h4 className="services-modal-title-main color-theme-dark-font">
                      Hello & Welcome!
                    </h4>
                    <p className="services-modal-description">
                      Please enter your phone number to sign in.
                    </p>
                    <Form className="mt-5 mb-5">
                      <Form.Group
                        className="mb-4 position-relative text-left"
                        controlId="formBasicEmail"
                      >
                        <Form.Label className="form-control-label text-left">
                          Phone Number
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="+1-300-555-0399"
                          className="form-control-text-input"
                        />
                      </Form.Group>

                      <div className="text-center mt-5">
                        <Button className="btn-primary-fill-book btn-primary-fill-book-rounded btn-primary-fill-book-rounded-modal"
                        style={{boxShadow: 'none'}}>
                          send OTP
                        </Button>
                      </div>
                      <p className="account-signup-helping-text">
                        Don’t have an account? 
                         <span className="theme-orange-account"> Sign Up</span>
                      </p>
                    </Form>
                  </div>
                </div>
                <div className="content-form-right-side">
                  <span className="content-form-logo-banner">
                    <img src={Images.AuthBanner} className="img-fluid" />
                  </span>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Login;
