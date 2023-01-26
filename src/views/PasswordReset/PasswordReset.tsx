import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import { DarkGray } from "../../styles/global.style";

type Props = {};

const PasswordReset = (props: Props) => {
  return (
    <Content>
      <Wrapper>
        <br />
        <h4>Memberflow.</h4>
        <h5>Reset your password</h5>
        <Component>
          <Form>
            <Form.Group>
              <Form.Label>
                Enter your user account's verified email address and we will
                send you a password reset link.
              </Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <br />
            <div>
              <Button variant="success" type="submit">
                Send password reset email
              </Button>
            </div>
          </Form>
        </Component>
      </Wrapper>
    </Content>
  );
};
export const Content = styled.div`
  min-height: 100vh;
  background: #1d1d1f !important;
  display: flex;
  justify-content: center;

  h4 {
    color: ${DarkGray};
    font-weight: 700;
  }

  h5 {
    color: ${DarkGray};
    font-weight: 400;
  }

  .form-label {
    font-size: 14px;
    font-weight: 400;
  }

  .form-control {
    font-size: 14px;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
  row-gap: 1rem;
  width: 35rem;
`;

export const Component = styled.div`
  background: #363638;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid gray;
  color: white;
`;

export default PasswordReset;
