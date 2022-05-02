import { Wrapper } from "../../styles/global.style";
import Footer from "../../components/layout/footer/Footer";
import Navigation from "../../components/layout/navigation/Navigation";
import { Card } from "react-bootstrap";
import {
  CardSection,
  Content,
  IntroductionCard,
  FirstColumn,
  SecondColumn,
} from "./Dashboard.style";
import introductionImg from "../../assets/dashboard.png";

type Props = {};

export default function Dashboard(props: Props) {
  return (
    <Wrapper className="Dashboard" style={{ maxHeight: "100vh" }}>
      <div>
        <Navigation />
        <Content>
          <FirstColumn>
            <IntroductionCard>
              <Card>
                <Card.Body>
                  <div>
                    <Card.Title>Welcome to your dashboard!</Card.Title>
                    <Card.Text>
                      Welcome to MemberFlow. This platform is made to manage
                      your organization simpler and more efficient.
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
                      style={{ height: "300px" }}
                    />
                  </div>
                </Card.Body>
              </Card>
            </IntroductionCard>
            <Card>
              <Card.Body>
                <Card.Title>New Members By Month</Card.Title>
              </Card.Body>
            </Card>
          </FirstColumn>
          <SecondColumn>
            <CardSection>
              <Card>
                <Card.Body>
                  <Card.Subtitle>Members</Card.Subtitle>
                  <Card.Title>140</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Subtitle>Income</Card.Subtitle>
                  <Card.Title>10000kr</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Subtitle>Members</Card.Subtitle>
                  <Card.Title>140</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Subtitle>Members</Card.Subtitle>
                  <Card.Title>140</Card.Title>
                </Card.Body>
              </Card>
            </CardSection>
          </SecondColumn>
        </Content>
      </div>
      <Footer />
    </Wrapper>
  );
}
