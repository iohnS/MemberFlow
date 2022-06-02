import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import MemberTable from "../../components/tables/MemberTable";
import { AdCard } from "../Dashboard/Dashboard.style";
import DashboardTemplate from "../DashboardTemplate";
import { Content, Options, TableStyle } from "./Members.style";
import {
  Plus,
  PencilSquare,
  Upload,
  PersonX,
  Download,
} from "react-bootstrap-icons";

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

  const Buttons = (
    <div className="buttons">
      <Button variant="primary" className="button">
        Add <Plus />
      </Button>
      <Button variant="secondary" className="button">
        Import
        <Upload />
      </Button>
      <Button variant="success" className="button">
        Export
        <Download />
      </Button>
    </div>
  );

  const SearchBar = (
    <Form style={{ marginLeft: "3rem" }}>
      <Form.Control
        style={{ width: "350px" }}
        type="text"
        placeholder="Search for a name..."
      />
    </Form>
  );

  const Table = (
    <Container>
      <Card>
        <TableStyle>
          <Card.Body>
            <Row style={{ paddingBottom: "0.5rem" }}>
              <div className="menu">
                <div className="searchbar">
                  <h4>Active Members</h4>
                  {SearchBar}
                </div>
                {Buttons}
              </div>
            </Row>
            <Row>
              <MemberTable />
            </Row>
          </Card.Body>
        </TableStyle>
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
