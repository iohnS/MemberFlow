import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import MemberTable from "../../components/tables/MemberTable";
import { AdCard } from "../Dashboard/Dashboard.style";
import DashboardTemplate from "../DashboardTemplate";
import { Content, OptionStyle, TableStyle } from "./Members.style";
import { Plus, PencilSquare, Upload, PersonX } from "react-bootstrap-icons";

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

  const Options = (
    <OptionStyle>
      <Card>
        <Card.Body>
          <Card.Title>Management</Card.Title>
          <Row>
            <Col>
              <Button variant="outline-primary" className="button">
                Add
                <Plus />
              </Button>
            </Col>
            <Col>
              <Button variant="outline-danger" className="button">
                Remove
                <PersonX />
              </Button>
            </Col>
            <Col>
              <Button variant="outline-secondary" className="button">
                Import
                <Upload />
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </OptionStyle>
  );

  const Table = (
    <Container>
      <Card>
        <TableStyle>
          <Card.Body>
            <Row style={{ paddingBottom: "0.5rem" }}>
              <div className="menu">
                <h3>Members</h3>
                <Form style={{marginLeft: "3rem"}}>
                  <Form.Control
                    style={{ width: "350px" }}
                    type="text"
                    placeholder="Search for a name..."
                  />
                </Form>
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
      <Row>
        {Table}
        {Options}
        <Col>{Ads}</Col>
      </Row>
    </Content>
  );

  return <DashboardTemplate body={body} />;
};

export default Members;
