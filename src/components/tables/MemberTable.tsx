import React, { useEffect, useState } from "react";
import { Button, Card, Form, Row } from "react-bootstrap";
import { dummy_data } from "./DummyData";
import { No, TableStyle, Yes } from "./MemberTable.style";
import {
  Plus,
  PencilSquare,
  Upload,
  PersonX,
  Download,
  Bootstrap,
} from "react-bootstrap-icons";
import "rsuite-table/dist/css/rsuite-table.css";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";

interface Props {
  data?: JSON;
  search?: string;
}

interface DataType {
  id: number;
  registration: string;
  name: string;
  email: string;
  ssn: string;
  gender: string;
  period: string;
  expiration_date: string;
  paid: boolean;
  expired: boolean;
}

interface PaymentType  {
  rowData: any;
  dataKey: string;
};

const PaymentCell = ({ rowData, dataKey, ...props }: PaymentType) => {
  return (
    <Cell dataKey={dataKey} {...props}>
      {rowData.paid ? (
        <div
          style={{
            display: "grid",
            justifyItems: "start",
          }}
        >
          <Yes>Paid</Yes>
        </div>
      ) : (
        <div style={{ display: "grid", justifyItems: "start" }}>
          <No>Unpaid</No>
        </div>
      )}
    </Cell>
  );
};

const columns = [
  {
    dataField: "id",
    text: "Member ID",
    sort: true,
    headerStyle: { width: "110px" },
  },
  {
    dataField: "name",
    text: "Name",
    sort: true,
    classes: "cellWeight600",
  },
  {
    dataField: "email",
    text: "Email",
    sort: true,
  },
  {
    dataField: "ssn",
    text: "SSN",
    sort: true,
  },
  {
    dataField: "gender",
    text: "Gender",
    sort: true,
  },
  {
    dataField: "period",
    text: "Membership Type",
    sort: true,
  },
  {
    dataField: "registration",
    text: "Registration Date",
    sort: true,
  },
  {
    dataField: "expiration_date",
    text: "Expiration Date",
    sort: true,
  },
  {
    dataField: "paid",
    text: "Payment",
    sort: true,
    type: "bool",
    formatter: (cellContent, row) => {
      return row.paid ? (
        <div
          style={{
            display: "grid",
            justifyItems: "start",
          }}
        >
          <Yes>Paid</Yes>
        </div>
      ) : (
        <div style={{ display: "grid", justifyItems: "start" }}>
          <No>Unpaid</No>
        </div>
      );
    },
  },
  {
    dataField: "expired",
    text: "Status",
    sort: true,
    type: "bool",
    formatter: (cellContent, row) => {
      return row.expired ? (
        <div style={{ display: "grid", justifyItems: "start" }}>
          <No>Expired</No>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            justifyItems: "start",
          }}
        >
          <Yes>Active</Yes>
        </div>
      );
    },
  },
];

const MemberTable = ({}: Props) => {
  //var [data, setData] = useState<string[]>([]);

  return (
    <TableStyle>
      <Card.Body>
        <Row style={{ paddingBottom: "0.5rem" }}>
          <div className="menu">
            <div className="searchbar">
              <h4>Active Members</h4>
              <Button variant="secondary">Clear All Filters</Button>
            </div>
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
          </div>
        </Row>
        <div>
          <Table height={700} bordered cellBordered data={dummy_data}>
            <Column width={50} align="center">
              <HeaderCell>ID</HeaderCell>
              <Cell dataKey="id" />
            </Column>

            <Column flexGrow={1} fixed sortable>
              <HeaderCell>Name</HeaderCell>
              <Cell dataKey="name" />
            </Column>

            <Column flexGrow={2} sortable>
              <HeaderCell>Email</HeaderCell>
              <Cell dataKey="email" />
            </Column>

            <Column flexGrow={1} sortable>
              <HeaderCell>SSN</HeaderCell>
              <Cell dataKey="ssn" />
            </Column>

            <Column flexGrow={1} sortable>
              <HeaderCell>Gender</HeaderCell>
              <Cell dataKey="gender" />
            </Column>

            <Column flexGrow={1} sortable>
              <HeaderCell>Period</HeaderCell>
              <Cell dataKey="period" />
            </Column>

            <Column flexGrow={1} sortable>
              <HeaderCell>Registration</HeaderCell>
              <Cell dataKey="registration" />
            </Column>

            <Column flexGrow={1} sortable>
              <HeaderCell>Expiration Date</HeaderCell>
              <Cell dataKey="expiration_date" />
            </Column>

            <Column flexGrow={1} sortable>
              <HeaderCell>Payment</HeaderCell>
              <PaymentCell rowData={(res) => res} dataKey="expired" />
            </Column>
          </Table>
        </div>
      </Card.Body>
    </TableStyle>
  );
};

export default MemberTable;
