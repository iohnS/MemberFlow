import { Button, Card, Col, Form, Row } from "react-bootstrap";
import DashboardTemplate from "../DashboardTemplate";
import { Content, MenuWrapper } from "./MyAccount.style";
import HorizontalLine from "../../components/layout/horizontal_line/HorizontalLine";
import { useEffect, useState } from "react";

type Props = {};

const MyAccount = ({}: Props) => {
  const [accName, setAccName] = useState("EASA Lund");

  useEffect(() => {
    const load = () => {};

    load();
  }, []);

  const AccountForm = (
    <MenuWrapper>
      <h4>My Account</h4>
      <HorizontalLine />
      <Form>
        <Form.Group>
          <Form.Label>Organization Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={accName} />
          <Form.Text className="text-muted">
            This is the name of the organization using this account.
          </Form.Text>
        </Form.Group>
      </Form>
      <br />
      <Button>Update preferences</Button>
      <br />
      <br />
      <div style={{ display: "flex", columnGap: "1rem" }}>
        <a href={"/settings/email"}>
          {" "}
          <h6>Change Email?</h6>
        </a>
        <a href={"/settings/password"}>
          {" "}
          <h6>Change Password?</h6>
        </a>
      </div>
    </MenuWrapper>
  );

  const body = <Content>{AccountForm}</Content>;

  return <DashboardTemplate body={body} />;
};

export default MyAccount;
