import { Modal, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import Images from '../../constant/images';

function SelectFormModal(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notes, setNotes] = useState('');

  const handleContinue = () => {
    props.onContinue(); // Call the parent component's continue handler
  };

  return (
    <Modal
    className="modal-content-order-service"
     {...props} size="md" centered>
      <Modal.Header closeButton />
      <Modal.Body>
        <div className="modal-services-body px-2">
          <Form className="mt-4 mb-5">
            <Form.Group className="mb-5 position-relative" controlId="formBasicEmail">
              <Form.Label className="form-control-label">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="form-control-text-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <img src={Images.Calendar} className='img-fluid-view-effect' />
            </Form.Group>

            <Form.Group className="mb-5 position-relative" controlId="formBasicPassword">
              <Form.Label className="form-control-label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="form-control-text-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
                <img src={Images.TimeClock} className='img-fluid-view-effect' />
            </Form.Group>
            <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="form-control-label">Special Notes</Form.Label>
              <Form.Control
                placeholder="Write here"
                as="textarea"
                className="form-control-text-input"
                rows={5}
                style={{ height: "auto" }}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </Form.Group>
          
            <div className="text-center mt-3">
              <Button className="btn-primary-fill-book btn-primary-fill-book-rounded btn-primary-fill-book-rounded-modal" onClick={handleContinue}>
                Continue
              </Button>
            </div>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default SelectFormModal;
