import { Container, Row, Col, Form, Button } from "react-bootstrap";
import DashboardTemplate from "../DashboardTemplate";
import { useState } from "react";
import { db } from "../../backend/db";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth, { createUser } from "../../backend/auth";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutSession } from "../../types";
import { stripeTestPK } from "../../config";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [ssn, setSSN] = useState("");
  const [period, setPeriodState] = useState("");
  const [price, setPrice] = useState(0);

  function setPeriod(value: string) {
    if (value == "6") {
      setPrice(50);
    } else {
      setPrice(70);
    }
    setPeriodState(value);
  }

  async function startPayment() {
    let priceID = "";
    await createUser(email, ssn);
    if (price == 50) {
      priceID = "price_1M5cHLGYD6iG8N5VvN7iOL60";
    } else {
      priceID = "price_1M5cKJGYD6iG8N5VVHGMkawI";
    }
    const userCred = await signInWithEmailAndPassword(auth, email, ssn);
    if (!auth.currentUser) {
      console.log("Authentication failed");
      return;
    }
    console.log(auth.currentUser.uid);
    const colRef = collection(
      db,
      "customers",
      auth.currentUser.uid,
      "checkout_sessions"
    );
    const docRef = await addDoc(colRef, {
      mode: "payment",
      price: priceID,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });

    onSnapshot(docRef, async (snap) => {
      const stripe = await loadStripe(stripeTestPK);

      const data = snap.data() as CheckoutSession;

      const { sessionId } = data;
      if (sessionId) {
        await stripe?.redirectToCheckout({ sessionId });
      }
    });
  }

  function formFilled() {
    return email != "" && name != "" && ssn != "" && period != "" && price != 0;
  }

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
          <Col>
            <Form.Group>
              <Form.Label>Period</Form.Label>
              <Form.Select
                defaultValue={0}
                onChange={(e) => setPeriod(e.target.value)}
              >
                <option value="0" disabled hidden>
                  Choose period
                </option>
                <option value="6">6 Months (50kr)</option>
                <option value="12">12 Months (70kr)</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Button
        variant={!formFilled() ? "secondary" : "primary"}
        size="lg"
        disabled={!formFilled()}
        onClick={startPayment}
      >
        Register and pay {price}
      </Button>
    </Container>
  );

  return <DashboardTemplate body={registrationForm} />;
};

export default Register;
