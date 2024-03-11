import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Images from "../../constant/images";

function NewAddressModal(props) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [contact, setContact] = useState("");

  const handleContinue = () => {
    props.onContinue();
  };

  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton />
      <Modal.Body>
        <div className="modal-services-body px-4">
          <div className="text-center mt-3">
            <h4 className="services-modal-title-main color-theme-dark-font">
              Add New Address
            </h4>
            <p className="services-modal-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
          <Form className="mt-4 mb-5">
            <Form.Group className="mb-5" controlId="formBasicEmail">
              <Form.Label className="form-control-label">
                Full Name *
              </Form.Label>
              <Form.Control
                type="text"
                placeholder=" Full Name"
                className="form-control-text-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Label className="form-control-label">
                Contact Number *
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Contact Number"
                className="form-control-text-input"
                value={contact}
                onChange={(e) => setNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-5"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="form-control-label">
                Alternate Contact Number *
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Alternate Contact Number"
                className="form-control-text-input"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </Form.Group>
            <Row className="mb-3">
              <Col lg={{ span: 6 }} md={{ span: 12 }}>
                <Form.Group className="mb-3" controlId="formGridEmail">
                  <Form.Label className="form-control-label">
                    Postal Code *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Postal Code"
                    className="form-control-text-input"
                  />
                </Form.Group>
              </Col>
              <Col lg={{ span: 6 }} md={{ span: 12 }}>
                <Form.Group
                  className="mb-3 position-relative"
                  controlId="formGridPassword"
                >
                  <Form.Label className="form-control-label">
                    Use my Location
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Location"
                    className="form-control-text-input"
                  />
                  <img
                    src={Images.Location}
                    className="img-fluid-view-effect"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col lg={{ span: 6 }} md={{ span: 12 }}>
                <Form.Group className="mb-3" controlId="formGridEmail">
                  <Form.Label className="form-control-label">State</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    className="form-control-text-input"
                  >
                    <option>State</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col lg={{ span: 6 }} md={{ span: 12 }}>
                <Form.Group className="mb-3" controlId="formGridPassword">
                  <Form.Label className="form-control-label">City</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    className="form-control-text-input"
                  >
                    <option>City</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-4" controlId="formGridEmail">
              <Form.Label className="form-control-label">House No *</Form.Label>
              <Form.Control
                type="text"
                placeholder="House No"
                className="form-control-text-input"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridPassword">
              <Form.Label className="form-control-label">
                Road Name/Area Name *
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Road Name/Area Name"
                className="form-control-text-input"
              />
            </Form.Group>

            <div className="text-center mt-5">
              <Button
                className="btn-primary-fill-book btn-primary-fill-book-rounded btn-primary-fill-book-rounded-modal"
                onClick={handleContinue}
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

export default NewAddressModal;
