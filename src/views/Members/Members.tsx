import { Card, Container, Row } from "react-bootstrap";
import MemberTable from "../../components/tables/MemberTableOld";
import { AdCard } from "../Dashboard/Dashboard.style";
import DashboardTemplate from "../DashboardTemplate";
import { Content } from "./Members.style";
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
      <Card>
        <MemberTable />
      </Card>
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
