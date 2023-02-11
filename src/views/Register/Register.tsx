import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Modal,
} from "react-bootstrap";
import DashboardTemplate from "../DashboardTemplate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { userAuth, } from "../../backend/firebase";
import { ErrorMessage } from "./Register.style";
import { createUser } from "../../backend/userApi";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [ssn, setSSN] = useState("");
  const [gender, setGender] = useState("");
  const [afmember, setAFMember] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function formFilled() {
    return (
      email !== "" &&
      name !== "" &&
      ssn !== "" &&
      gender !== "" &&
      afmember !== "" &&
      agreed
    );
  }

  function handleChange(e) {
    setGender(e.target.value);
  }

  function handleCheck(e) {
    setAgreed(e.target.checked);
  }

  async function register() {
    setLoading(true);
    navigate("/account");
  }

  const Policy = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Storing of your information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          By ticking the box above and submitting the following form, you
          consent to the processing of your personal data by the East Asian
          Student Association Lund (EASA Lund). The purpose of collecting this
          information is to enable EASA Lund to provide services related to your
          membership. You have the legal right to, free of charge, access the
          data collected on you, to have erroneous data corrected, to have your
          data erased from our registries, to migrate your data to other systems
          through the use of widely available data formats, and to object to the
          use of your data for direct marketing, automated decision-making and
          profiling. If you wish to exercise these rights, or if you have any
          questions, please contact the secretary at president@asialund.org. The
          personal data relating to your membership is deleted from the member
          registry by EASA Lund no later than two years after your membership
          has expired. EASA processes data in accordance with Article 6(1) of
          the Regulation (EU) 2016/679 of the European Parliament and of the
          Council of 27 April 2016 on the protection of natural persons with
          regard to the processing of personal data and on the free movement of
          such data, and repealing Directive 95/46/EC (General Data Protection
          Regulation) and applicable Swedish law. The personal data is also
          processed by, and stored on, third party services within and outside
          of the EU that comply with the GDPR. If you believe that your data is
          not processed according to applicable law, you can make a claim with
          the Swedish Data Protection Authority (Datainspektionen).
        </Modal.Body>
      </Modal>
    );
  };

  const registrationForm = (
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
        </Row>

        <Row>
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
          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <Form.Check
              value="male"
              type="radio"
              label="Male"
              onChange={handleChange}
              checked={gender === "male"}
            />
            <Form.Check
              value="female"
              type="radio"
              label="Female"
              onChange={handleChange}
              checked={gender === "female"}
            />
            <Form.Check
              value="other"
              type="radio"
              label="Other"
              onChange={handleChange}
              checked={gender === "other"}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group>
            <Form.Label>
              Are you a member of AF? You must be a member of AF (Akademiska
              Föreningen) in order to become an EASA member. If you are a
              Studentlund member you are automatically an AF member.
            </Form.Label>
            <Form.Check
              value="yes"
              type="radio"
              label="Yes"
              onChange={() => setAFMember("yes")}
              checked={afmember === "yes"}
            />
            <Form.Check
              value="no"
              type="radio"
              label="No"
              onChange={() => setAFMember("no")}
              checked={afmember === "no"}
            />
          </Form.Group>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>
                Do you agree to the storing of your personal data? More
                information can be found in our privacy policy.
              </Form.Label>
              <Form.Check label="Yes" onClick={handleCheck} />
            </Form.Group>
          </Col>
          <Col>
            <Button onClick={handleShow}>Privacy policy</Button>
            <Policy />
          </Col>
        </Row>
      </Form>
      {error ? (
        <ErrorMessage>
          Email already in use or invalid social security number
        </ErrorMessage>
      ) : (
        <div></div>
      )}
      <Button
        variant={!formFilled() ? "secondary" : "primary"}
        size="lg"
        disabled={!formFilled()}
        onClick={register}
      >
        {loading ? <Spinner animation="border" /> : <div>Register</div>}
      </Button>
    </Container>
  );

  return <DashboardTemplate body={registrationForm} />;
};

export default Register;
