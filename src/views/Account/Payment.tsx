import { useState } from "react";
import DashboardTemplate from "../DashboardTemplate";
import { db, userAuth } from "../../backend/firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { loadStripe } from "@stripe/stripe-js";
import { stripeTestPK } from "../../config";
import { CheckoutSession } from "../../types";
import { Container, Row, Form, Button, Spinner } from "react-bootstrap";

const Payment = () => {
  const [period, setPeriod] = useState(0);
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  function setPeriodPrice(value: string) {
    value === "6" ? setPrice(50) : setPrice(70);
    setPeriod(parseInt(value));
  }

  async function startPayment() {
    setLoading(true);
    let priceID = "";

    if (!userAuth.currentUser) {
      alert("NOT LOGGED IN");
      return;
    }

    price === 50
      ? (priceID = "price_1M5cHLGYD6iG8N5VvN7iOL60")
      : (priceID = "price_1M5cKJGYD6iG8N5VVHGMkawI");
    const colRef = collection(
      db,
      "members",
      userAuth.currentUser.uid,
      "checkout_sessions"
    );

    const docRef = await addDoc(colRef, {
      mode: "payment",
      price: priceID,
      success_url: window.location.origin + "/management",
      cancel_url: window.location.origin,
    });

    onSnapshot(docRef, async (snap) => {
      const stripe = await loadStripe(stripeTestPK);

      const data = snap.data() as CheckoutSession;

      console.log(data);
      const { sessionId } = data;
      if (sessionId) {
        await stripe?.redirectToCheckout({ sessionId });
      }
    });
  }

  const payment = (
    <Container>
      <Row>
        <Form.Group>
          <Form.Label>Period</Form.Label>
          <Form.Select
            defaultValue={0}
            onChange={(e) => setPeriodPrice(e.target.value)}
          >
            <option value="0" disabled hidden>
              Choose period
            </option>
            <option value="6">6 Months</option>
            <option value="12">12 Months</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row>
        <Button disabled={period === 0 || price === 0} onClick={startPayment}>
          {period === 0 || price === 0 ? (
            <div>Select period</div>
          ) : loading ? (
            <Spinner animation="border" />
          ) : (
            <div>
              Pay {price}kr for {period} months of membership
            </div>
          )}
        </Button>
      </Row>
    </Container>
  );

  return <DashboardTemplate body={payment} />;
};

export default Payment;
