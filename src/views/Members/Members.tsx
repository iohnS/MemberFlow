import "rsuite-table/dist/css/rsuite-table.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import MemberTable from "../../components/tables/MemberTable";
import { AdCard, IntroductionCard } from "../Dashboard/Dashboard.style";
import DashboardTemplate from "../DashboardTemplate";
import { Content } from "./Members.style";
import AddMember from "../../components/buttons/AddMember";

type Props = {};

const Members = (props: Props) => {
  const Ads = (
    <AdCard>
      <Card style={{ height: "150px" }}>
        <Card.Body>
          <Card.Title style={{ fontSize: "1.8rem" }}>
            Track membership information.
          </Card.Title>
        </Card.Body>
      </Card>
    </AdCard>
  );

  const Table = (
    <Container>
      <Row>
        <IntroductionCard>
          <Card>
            <Card.Title>Welcome to EASA Lund</Card.Title>
            <Card.Text>
              Membership management page. Handle members information and status.
            </Card.Text>
          </Card>
        </IntroductionCard>
        <Col>
          <AddMember />
        </Col>
        <Card>
          <MemberTable />
        </Card>
      </Row>
    </Container>
  );

  const body = (
    <Content>
      <Row>{Table}</Row>
    </Content>
  );

  return <DashboardTemplate body={body} />;
};

export default Members;
