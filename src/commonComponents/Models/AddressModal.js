import { Row, Col, Modal, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./modal.css";
import Images from "../../constant/images";

function AddressModal(props) {
  const navigate = useNavigate();
  const handleContinue = () => {
    props.onContinue(); 
  };
  return (
    <div className="modal-content-main-container">
      <Modal
        className="modal-content-order-service"
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="modal-services-body px-4">
            <Form className="mt-4 mb-5">
              {["radio", "radio"].map((type, index) => (
                <div key={index} className="mb-3">
                  <Form.Check
                    className="user-form-check-control"
                    type={type}
                    id={`check-api-${type}-${index}`}
                  >
                    <Form.Check.Input type={type} isValid />
                    <Form.Check.Label>
                      <div className="mx-3">
                        <h6
                          className="user-provider-name
                      user-provider-name-modal"
                        >
                          Mr. Tikesh Dewangan
                          <span className="user-provider-label-home">home</span>
                        </h6>
                        <p className="user-provider-label-description">
                          Office No 201, atlantis Corporate Park, Ring Road
                          No.1,Telibandha, Raipur 492001+91 7247799900
                        </p>
                      </div>
                    </Form.Check.Label>
                  </Form.Check>
                </div>
              ))}
              <div className="mt-3">
                <span className="img-adding-content"
                onClick={handleContinue}
                >
                  <img src={Images.Plus} className="img-fluid" />
                  Add a new address
                </span>
              </div>
              <div className="text-center mt-5">
                <Button
                  className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded
                    btn-primary-fill-book-rounded-modal"
                >
                  continue
                </Button>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddressModal;
