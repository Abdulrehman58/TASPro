import { Modal, Button, FormControl, Form } from "react-bootstrap";
import {
  addSplitAmout,
} from "../../constant/dummyData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddCapacityModal(props) {
  const navigate = useNavigate();
  const handleContinue = () => {
    props.onContinue(); 
  };
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
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="modal-services-body">
            <h5 className="choose-us-title-video text-center">
              Select Split AC Capacity
            </h5>
          
            {addSplitAmout.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="cart-amount-split-box 
                    cart-amount-split-box-little mb-1 mt-4 justify-left"
                  >
                    <div
                      className="split-ac-flex-right
              split-ac-flex-right-adding"
                    >
                      <span className="cart-amount-split-label">
                        <img src={item.image} className="img-fluid" />
                      </span>
                      <div className="mx-2">
                        <h5 className="cart-amount-split-ton">{item.title}</h5>
                        <h6 className="cart-amount-split-amount">
                          <b>{item.textBold}</b> {item.text}
                        </h6>
                      </div>
                    </div>
                    <Button className=" btn-primary-fill-book-add">
                      {item.button}
                    </Button>
                  </div>
                </>
              );
            })}
            <Form className="mt-5 mb-5">
              {["radio"].map((type, index) => (
                <div key={index} className="mb-3">
                  <Form.Check
                    className="user-form-check-control
                    user-form-check-control-adding"
                    type={type}
                    id={`check-api-${type}-${index}`}
                  >
                    <Form.Check.Input type={type} isValid />
                    <Form.Check.Label>
                      <div className="mx-3">
                        <h5 className="cart-amount-split-ton">
                          Enter Capacity manually (in TR)
                        </h5>
                      </div>
                    </Form.Check.Label>
                  </Form.Check>
                </div>
              ))}
              <div className="user-dflex-justify-space mt-3 mb-3">
                <span className="user-form-label-view">10</span>
                <div className="user-text-container">
                  <h5 className="user-form-label-title">₹350</h5>
                  <h6 className="user-form-label-heading">₹299</h6>
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
              <div className="text-center mt-5">
                <Button
                  className=" btn-primary-fill-book
                    btn-primary-fill-book-rounded
                    "
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

export default AddCapacityModal;
