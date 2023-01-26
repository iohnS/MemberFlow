import "rsuite-table/dist/css/rsuite-table.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import MemberTable from "../../components/tables/MemberTable";
import DashboardTemplate from "../DashboardTemplate";
import { Content } from "./Members.style";
import { useEffect, useState } from "react";
import type { DocumentData } from "firebase/firestore";

const Members = () => {
  const [data, setData] = useState<DocumentData[]>([]);

  const Table = (
    <>
      <Row>
        <Card>
          <MemberTable dbData={data} setData={setData} />
        </Card>
      </Row>
    </>
  );

  const body = (
    <Content>
      <Row>{Table}</Row>
    </Content>
  );

  return <DashboardTemplate body={body} />;
};

export default Members;
