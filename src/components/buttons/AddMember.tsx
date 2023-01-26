import { Button, Modal, Row, Container, Col, Form } from "react-bootstrap";
import { useState } from "react";
import { addMember } from "../../backend/firebase";

const AddMember = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [ssn, setSSN] = useState("");
  const [status, setStatus] = useState("active");
  const [period, setPeriod] = useState("6");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addNewMember = () => {
    addMember(email, name, ssn, period, status)
      .then(() => {
        handleClose();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add member
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>SSN</Form.Label>
                    <Form.Control
                      type="ssn"
                      placeholder="XXXXXXXX-XXXX"
                      onChange={(e) => setSSN(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Period</Form.Label>
                    <Form.Select
                      defaultValue={0}
                      onChange={(e) => setPeriod(e.target.value)}
                    >
                      <option value="6">6 Months</option>
                      <option value="12">12 Months</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>Status</Form.Label>
                    <Form.Select
                      defaultValue={0}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addNewMember} type="submit">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMember;
