import { useState } from "react";
import { Button, Form, FloatingLabel } from "react-bootstrap";
import {
  Content,
  MiddleSection,
  Title,
  SubTitle,
  Submit,
  Login,
  Background,
  Image,
} from "./Homepage.style";
import Footer from "../../components/layout/footer/Footer";
import { Wrapper } from "../../styles/global.style";
import { useNavigate } from "react-router-dom";
import "./Homepage.scss";

type Props = {};

export default function Homepage({}: Props) {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    return navigate("/dashboard");
    /* const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true); */
  };

  return (
    <Wrapper>
      <Background>
        <Content>
          <MiddleSection>
            <Title>MemberFlow.</Title>
            <SubTitle>
              Easy membership management software to streamline card membership
              and member database for your organization - Memberflow is created
              to ease the pain of Google Excels.
            </SubTitle>
            <Login>
              <Form>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <Submit>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                    className="btn_primary"
                  >
                    Login
                  </Button>
                  <Button variant="outline-primary"  className="btn-outline-primary">
                    Forgot Your Password?
                  </Button>
                </Submit>
              </Form>
            </Login>
          </MiddleSection>
        </Content>
        <Image />
      </Background>
      <Footer />
    </Wrapper>
  );
}
