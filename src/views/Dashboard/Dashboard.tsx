import { Button, Card } from "react-bootstrap";
import {
  CardSection,
  Content,
  IntroductionCard,
  GraphCard,
} from "./Dashboard.style";
import {
  ArrowRight,
  Calendar2HeartFill,
  Cash,
  PersonHeart,
  PiggyBankFill,
} from "react-bootstrap-icons";
import LineChart from "../../components/charts/LineChart/LineChart";
import DashboardTemplate from "../DashboardTemplate";
import { useNavigate } from "react-router";
import InfoCard from "../../components/layout/information/InfoCard/InfoCard";
import {
  FlowBlue,
  FlowGreen,
  FlowPink,
  FlowPurple,
} from "../../styles/global.style";
import { useState } from "react";
import SupportNotification from "../../components/layout/notification/SupportNotification";

type Props = {};

export default function Dashboard(props: Props) {
  const [orgName, setOrgName] = useState("EASA Lund");

  const navigate = useNavigate();

  const IntroCard = (
    <IntroductionCard>
      <Card>
        <Card.Body>
          <div className="text-container">
            <Card.Title>Welcome to {orgName}.</Card.Title>
            <Card.Text>
              This platform is made to manage your organization simpler and more
              efficient. Overview your members and income flow.
            </Card.Text>
            <br/>
            <div className="button">
              <Button onClick={() => navigate("/members")} variant="primary">
                {" "}
                Go to Members {<ArrowRight />}
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </IntroductionCard>
  );

  const InfoCards = (
    <CardSection>
      <InfoCard
        title="188"
        subtitle="Active Members"
        color={FlowBlue}
        icon={<PersonHeart />}
      />
      <InfoCard
        title="0"
        subtitle="Monthly Registers"
        color={FlowGreen}
        icon={<Calendar2HeartFill />}
      />
    </CardSection>
  );

  const Graph = (
    <GraphCard>
      <Card>
        <Card.Body>
          <Card.Title>EASA Lund</Card.Title>
          <LineChart />
        </Card.Body>
      </Card>
    </GraphCard>
  );

  const body = (
    <Content>
      <div className="side-to-side">
        <div style={{ display: "grid" }}>
          <div className="up-down-1">
            {IntroCard}
            {InfoCards}
          </div>
        </div>
        <div className="up-down-2">{Graph}</div>
      </div>
      <SupportNotification />
    </Content>
  );

  return <DashboardTemplate body={body} />;
}
