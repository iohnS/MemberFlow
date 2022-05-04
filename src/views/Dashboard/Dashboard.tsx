import { Card } from "react-bootstrap";
import {
  CardSection,
  Content,
  IntroductionCard,
  FirstColumn,
  SecondColumn,
  GraphCard,
  IconContainer,
  IconBackground,
  AdCard,
} from "./Dashboard.style";
import introductionImg from "../../assets/dashboard.png";
import adImg from "../../assets/teamwork.png";
import {
  Calendar2HeartFill,
  Cash,
  PersonHeart,
  PiggyBankFill,
} from "react-bootstrap-icons";
import LineChart from "../../components/charts/LineChart/LineChart";
import DashboardTemplate from "../DashboardTemplate";

type Props = {};

export default function Dashboard(props: Props) {
  return (
    <DashboardTemplate
      body={
        <Content>
          <FirstColumn>
            <IntroductionCard>
              <Card>
                <Card.Body>
                  <div>
                    <Card.Title>Welcome to your Dashboard.</Card.Title>
                    <Card.Text>
                      This platform is made to manage your organization simpler
                      and more efficient. Overview your members and income flow.
                    </Card.Text>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      justifyContent: "end",
                      alignContent: "center",
                    }}
                  >
                    <img
                      src={introductionImg}
                      alt="hej"
                      style={{ height: "225px" }}
                    />
                  </div>
                </Card.Body>
              </Card>
            </IntroductionCard>
            <CardSection>
              <Card>
                <Card.Body>
                  <IconContainer>
                    <IconBackground style={{ background: "#7371d1" }}>
                      <PersonHeart />
                    </IconBackground>
                  </IconContainer>
                  <Card.Title>188</Card.Title>
                  <Card.Subtitle>Active Members</Card.Subtitle>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <IconContainer>
                    <IconBackground style={{ background: "#03A89E" }}>
                      <Calendar2HeartFill />
                    </IconBackground>
                  </IconContainer>
                  <Card.Title>9</Card.Title>
                  <Card.Subtitle>Monthly Registers</Card.Subtitle>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <IconContainer>
                    <IconBackground style={{ background: "#56CCF2" }}>
                      <PiggyBankFill />
                    </IconBackground>
                  </IconContainer>
                  <Card.Title>10000</Card.Title>
                  <Card.Subtitle>Total Income</Card.Subtitle>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <IconContainer>
                    <IconBackground style={{ background: "#FF69B4" }}>
                      <Cash />
                    </IconBackground>
                  </IconContainer>
                  <Card.Title>540</Card.Title>
                  <Card.Subtitle>Monthly Income</Card.Subtitle>
                </Card.Body>
              </Card>
            </CardSection>
          </FirstColumn>
          <SecondColumn>
            <GraphCard>
              <Card>
                <Card.Body>
                  <Card.Title>New Members By Month</Card.Title>
                  <Card.Text> Overview of recent months</Card.Text>
                  <LineChart />
                </Card.Body>
              </Card>
            </GraphCard>
            <AdCard>
              <Card>
                <Card.Body>
                  <Card.Title>
                    Made In Lund. By{" "}
                    <span style={{ textDecorationLine: "underline" }}>
                      Someone
                    </span>
                    .
                  </Card.Title>
                  <img
                    src={adImg}
                    alt=""
                    style={{ height: "120px", position: "relative" }}
                  />
                </Card.Body>
              </Card>
            </AdCard>
          </SecondColumn>
        </Content>
      }
    />
  );
}
