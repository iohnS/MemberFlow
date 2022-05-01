import { Wrapper } from "../../styles/global.style";
import Footer from "../../components/layout/footer/Footer";
import Navigation from "../../components/layout/navigation/Navigation";
import { Card } from "react-bootstrap";
import { CardSection, Content, Title } from "./Dashboard.style";

type Props = {};

export default function Dashboard(props: Props) {
  return (
    <Wrapper className="Dashboard">
      <div>
        <Navigation />
        <Content>
          <Title>
            <h4> Dashboard </h4>
            <h6> Information about your current memberbase </h6>
          </Title>
          <CardSection>
            <Card className="Card">
              <Card.Body>
                <Card.Subtitle>Members</Card.Subtitle>
                <Card.Title>140</Card.Title>
              </Card.Body>
            </Card>
            <Card className="Card">
              <Card.Body>
                <Card.Subtitle>Board</Card.Subtitle>
                <Card.Title>140</Card.Title>
              </Card.Body>
            </Card>
            <Card className="Card">
              <Card.Body>
                <Card.Subtitle>Total Active Members</Card.Subtitle>
                <Card.Title>140</Card.Title>
              </Card.Body>
            </Card>
          </CardSection>
        </Content>
      </div>
      <Footer />
    </Wrapper>
  );
}
