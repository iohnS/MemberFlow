import "rsuite-table/dist/css/rsuite-table.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import MemberTable from "../../components/tables/MemberTable";
import { IntroductionCard } from "../Dashboard/Dashboard.style";
import DashboardTemplate from "../DashboardTemplate";
import { Content } from "./Members.style";
import AddMember from "../../components/buttons/AddMember";
import ExportCSV from "../../components/buttons/ExportCSV";
import ImportCSV from "../../components/buttons/ImportCSV";
import { useEffect, useState } from "react";
import type { DocumentData } from "firebase/firestore";

const Members = () => {
  const [data, setData] = useState<DocumentData[]>([]);
  const [csvData, setCSVData] = useState<DocumentData[]>([]);

  useEffect(() => {
    let dataCopy = data;
    dataCopy.forEach((memberData) => {
      delete memberData["stripeId"];
      delete memberData["stripeLink"];
    });
    setCSVData(dataCopy);
  }, [data]);

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
        <Col>
          <ImportCSV />
        </Col>
        <Col>
          <ExportCSV data={csvData} />
        </Col>
        <Card>
          <MemberTable dbData={data} setData={setData} />
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
