import { Row, Col, Modal, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Images from "../../constant/images";
import { AmcDurationContent } from "../../constant/dummyData";

function AmcModal(props) {
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
            <h5 className="choose-us-title-video text-left">
              Select AMC Duration
            </h5>
            <Form className="mt-4 mb-5">
              {["radio", "radio", "radio"].map((type, index) => (
                <div key={index} className="mb-3">
                  <Form.Check
                    className="user-form-check-control
                    user-form-check-control-amc"
                    type={type}
                    id={`check-api-${type}-${index}`}
                  >
                    <Form.Check.Input type={type} isValid />
                    <Form.Check.Label>
                      {AmcDurationContent.map((item, index) => {
                        return (
                          <>
                            <div className="mx-3">
                              <p className="services-modal-description">
                                {item.text}
                              </p>
                              <h6 className="services-amc-duration-title">
                                <span className="amc-label-view">
                                  {item.text2}
                                </span>
                                {item.text3}
                              </h6>
                              <h6 className="services-amc-duration-success-opt">
                                RECOMMENDED
                              </h6>
                            </div>
                          </>
                        );
                      })}
                    </Form.Check.Label>
                  </Form.Check>
                </div>
              ))}

              <div className="text-center mt-5">
                <Button
                  className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded"
                    onClick={handleContinue}
                >
                  done
                </Button>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AmcModal;
