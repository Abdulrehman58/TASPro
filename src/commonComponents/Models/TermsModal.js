import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Images from "../../constant/images";
import { termsConstant } from "../../constant/dummyData";
import { Screens } from "../../constant/routes";
import { useNavigate } from "react-router-dom";

function TermsModal(props) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [contact, setContact] = useState("");

  return (
    <Modal {...props} size="md" centered>
      <Modal.Header closeButton />
      <Modal.Body>
        <div className="modal-services-body px-4">
          <div className="text-left mt-3">
            <h4 className="services-modal-title-main color-theme-dark-font">
              Terms & conditions
            </h4>
            <p
              className="services-modal-description"
              style={{ fontSize: "17px" }}
            >
              Welcome to TASPRO Company! These Terms of Use govern your access
              to and use of our mobile application and related services
              (collectively, the "App"). By accessing or using the App, you
              agree to be bound by these Terms of Use.
            </p>
            {termsConstant.map((item, index) => {
              return (
                <>
                  <div key={index} className="mt-5">
                    <h6 className="services-terms-sub-title mx-3">
                      {item.title}
                    </h6>
                    <p
                      className="services-modal-description"
                      style={{ fontSize: "17px" }}
                    >
                      {item.text}
                    </p>
                    <p
                      className="services-modal-description"
                      style={{ fontSize: "17px" }}
                    >
                      {item.list1}
                    </p>
                    <p
                      className="services-modal-description"
                      style={{ fontSize: "17px" }}
                    >
                      {item.list2}
                    </p>
                    <p
                      className="services-modal-description"
                      style={{ fontSize: "17px" }}
                    >
                      {item.list3}
                    </p>
                    <p
                      className="services-modal-description"
                      style={{ fontSize: "17px" }}
                    >
                      {item.list4}
                    </p>
                    <p
                      className="services-modal-description"
                      style={{ fontSize: "17px" }}
                    >
                      {item.list5}
                    </p>
                    <p
                      className="services-modal-description"
                      style={{ fontSize: "17px" }}
                    >
                      {item.list6}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
          <Form className="mt-4 mb-5">
            {["checkbox"].map((type, index) => (
              <div key={index} className="mb-3">
                <Form.Check
                  className="user-form-check-control"
                  type={type}
                  id={`check-api-${type}-${index}`}
                >
                  <Form.Check.Input
                    style={{ marginTop: "4px" }}
                    type={type}
                    isValid
                  />
                  <Form.Check.Label>
                    <div className="mx-3">
                      <p className="user-provider-label-description">
                        I accept Company
                        <span className="terms-privacy-alert">
                          {" "}
                          Terms and Condition
                        </span>{" "}
                        to proceed further.
                      </p>
                    </div>
                  </Form.Check.Label>
                </Form.Check>
              </div>
            ))}

            <div className="text-center mt-5">
              <Button
                className="btn-primary-fill-book btn-primary-fill-book-rounded btn-primary-fill-book-rounded-modal"
                onClick={()=>navigate(props.screen)}
              >
                Continue
              </Button>
            </div>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default TermsModal;
