import { Button, Form } from "react-bootstrap";
import DashboardTemplate from "../DashboardTemplate";
import styled from "styled-components";
import { ComponentGap, NavBarHeight } from "../../styles/global.style";
import HorizontalLine from "../../components/layout/horizontal_line/HorizontalLine";

export const Content = styled.div`
  min-height: calc(100vh - ${NavBarHeight});
  padding: ${ComponentGap};
  background: white;
  display: grid;
  justify-content: center;

  .form-label {
    font-size: 14px;
    font-weight: 500;
  }

  .form-control {
    font-size: 14px;
  }
`;

type Props = {};

const ChangePassword = (props: Props) => {
  const body = (
    <Content>
      <Form>
        <h4>Change password</h4>
        <HorizontalLine />
        <Form.Group>
          <Form.Label>Old password</Form.Label>
          <Form.Control type="password" defaultValue="get3243q2" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>New password</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm new password</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <br />
        <div
          style={{ display: "flex", columnGap: "1rem", alignItems: "center" }}
        >
          <Button variant="primary" type="submit">
            Update password
          </Button>
          <a href="/password_reset" target="_blank">
            I forgot my password
          </a>
        </div>
      </Form>
    </Content>
  );
  return <DashboardTemplate body={body} />;
};

export default ChangePassword;
