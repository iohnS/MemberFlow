import { useState } from "react";
import { Button, Form, FloatingLabel } from "react-bootstrap";
import {
  Wrapper,
  Content,
  MiddleSection,
  Title,
  SubTitle,
  Submit,
  Login,
  FooterSection,
  Background,
  Image,
} from "./Homepage.style";
import Footer from "../../components/layout/Footer/Footer";
import homepage_img from "../../assets/homepage_img.jpg";

type Props = {};

export default function Homepage({}: Props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Wrapper>
      <Background>
        <Content>
          <MiddleSection>
            <Title>MemberFlow</Title>
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
                  <Form.Control type="email" placeholder="name@example.com" />
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
                  >
                    Login
                  </Button>
                  <Button variant="warning">Forgot Your Password?</Button>
                </Submit>
              </Form>
            </Login>
          </MiddleSection>
        </Content>
        <Image/>
      </Background>
      <FooterSection>
        <Footer />
      </FooterSection>
    </Wrapper>
  );
}
