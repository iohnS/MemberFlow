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

const ChangeEmail = (props: Props) => {
  const body = (
    <Content>
      <Form style={{ minWidth: "25rem" }}>
        <h4>Change Email</h4>
        <HorizontalLine />
        <Form.Group>
          <Form.Label>Old Email</Form.Label>
          <Form.Control
            type="email"
            defaultValue="president@easa.org"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>New Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm new Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <br />
        <div
          style={{ display: "flex", columnGap: "1rem", alignItems: "center" }}
        >
          <Button variant="primary" type="submit">
            Update Email
          </Button>
        </div>
      </Form>
    </Content>
  );
  return <DashboardTemplate body={body} />;
};

export default ChangeEmail;
