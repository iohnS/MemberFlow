import { Button, Card } from "react-bootstrap";
import {
  CardSection,
  Content,
  IntroductionCard,
  GraphCard,
  AdCard,
} from "./Dashboard.style";
import introductionImg from "../../assets/dashboard.png";
import adImg from "../../assets/teamwork.png";
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

type Props = {};

export default function Dashboard(props: Props) {
  const navigate = useNavigate();

  const IntroCard = (
    <IntroductionCard>
      <Card>
        <Card.Body>
          <div className="text-container">
            <Card.Title>Welcome to your Dashboard.</Card.Title>
            <Card.Text>
              This platform is made to manage your organization simpler and more
              efficient. Overview your members and income flow.
            </Card.Text>
            <div className="button">
              <Button
                onClick={() => navigate("/members")}
                variant="outline-light"
              >
                {" "}
                Go to Members {<ArrowRight />}
              </Button>
            </div>
          </div>
        </Card.Body>
        <div className="img-container">
          <img src={introductionImg} alt="hej" className="img" />
        </div>
      </Card>
    </IntroductionCard>
  );

  const InfoCards = (
    <CardSection>
      <InfoCard
        title="188"
        subtitle="Active Members"
        color={FlowPurple}
        icon={<PersonHeart />}
      />
      <InfoCard
        title="9"
        subtitle="Monthly Registers"
        color={FlowGreen}
        icon={<Calendar2HeartFill />}
      />
      <InfoCard
        title="10000"
        subtitle="Total Income"
        color={FlowBlue}
        icon={<PiggyBankFill />}
      />
      <InfoCard
        title="540"
        subtitle="Monthly Income"
        color={FlowPink}
        icon={<Cash />}
      />
    </CardSection>
  );

  const Graph = (
    <GraphCard>
      <Card>
        <Card.Body>
          <Card.Title>East Asia Student Association Lund</Card.Title>
          <Card.Text>New Members By Month</Card.Text>
          <LineChart />
        </Card.Body>
      </Card>
    </GraphCard>
  );

  const Ads = (
    <AdCard>
      <Card>
        <Card.Body>
          <Card.Title>
            Made In Lund. By{" "}
            <span style={{ textDecorationLine: "underline" }}>Someone</span>.
          </Card.Title>
          <img
            src={adImg}
            alt=""
            style={{ height: "120px", position: "relative" }}
          />
        </Card.Body>
      </Card>
    </AdCard>
  );

  const body = (
    <Content>
      <div className="side-to-side">
        <div className="up-down-1">
          {IntroCard}
          {InfoCards}
        </div>
        <div className="up-down-2">
          {Graph}
          {Ads}
        </div>
      </div>
    </Content>
  );

  return <DashboardTemplate body={body} />;
}
