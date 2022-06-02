import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { FileLock2Fill, Inbox } from "react-bootstrap-icons";
import styled from "styled-components";
import FlowIcon from "../../components/layout/flowicon/FlowIcon";
import {
  AppThemeColor,
  FlowBlue,
  FlowGreen,
  FlowPurple,
} from "../../styles/global.style";
import DashboardTemplate from "../DashboardTemplate";
import { Content, CardMenu } from "./MyAccount.style";
import Sidebar from "../../components/layout/navigation/sidebar/Sidebar";

type Props = {};

const MyAccount = ({}: Props) => {
  const AccountForm = (
    <CardMenu>
      <Row>
        <h3>My Account</h3>
      </Row>
      <Row>
        <Col>
          <FlowIcon icon={<Inbox className="icon" />} color={FlowPurple} />
          Change Email Address
        </Col>
        <Col>
          <FlowIcon
            icon={<FileLock2Fill className="icon" />}
            color={FlowGreen}
          />
          Change Password
        </Col>
      </Row>
    </CardMenu>
  );

  const body = (
    <Content>
      <Sidebar />
      {AccountForm}
    </Content>
  );

  return <DashboardTemplate body={body} />;
};

export default MyAccount;
