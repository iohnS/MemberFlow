import { useState } from "react";
import { Button, Form, FloatingLabel } from "react-bootstrap";
import {
  Content,
  MiddleSection,
  Title,
  SubTitle,
  Submit,
  LoginStyle,
  Background,
  Wrapper,
  ImageWrapper,
  InvalidLogin,
} from "./Login.style";
import { useNavigate } from "react-router-dom";
import "../../styles/App.scss";
import myImage from "../../assets/homepage_img.jpg";
import RenderSmoothImage from "render-smooth-image-react";
import "render-smooth-image-react/build/style.css";
import auth from "../../backend/auth";
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";

type Props = {};

export default function Login({}: Props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((response: UserCredential) => {
        if (response.user.email == null) {
          return;
        }
        navigate("/dashboard");
      })
      .catch(() => {
        setErrorMessage("Wrong login credentials");
      });
  };

  return (
    <Wrapper>
      <Background>
        <Content>
          <MiddleSection>
            <Title>Memberflow.</Title>
            <SubTitle>
              Easy membership management software to streamline card membership
              and member database for your organization - Memberflow is created
              to ease the pain of Google Excels.
            </SubTitle>
            <LoginStyle>
              <Form>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FloatingLabel>
                <InvalidLogin>
                  {errorMessage && (
                    <div className="error"> {errorMessage} </div>
                  )}
                </InvalidLogin>
                <Submit>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                    className="btn_primary"
                  >
                    Login
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="btn-outline-primary"
                    //onClick={handlePassword}
                  >
                    Forgot Your Password?
                  </Button>
                </Submit>
              </Form>
            </LoginStyle>
          </MiddleSection>
        </Content>
        <ImageWrapper>
          <RenderSmoothImage src={myImage} alt="" />
        </ImageWrapper>
      </Background>
    </Wrapper>
  );
}
