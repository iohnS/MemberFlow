import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import React, { useEffect, useState } from "react";
import { Button, Card, Form, Row } from "react-bootstrap";
import { No, TableStyle, Yes } from "./MemberTable.style";
import {
  Plus,
  PencilSquare,
  Upload,
  PersonX,
  Download,
} from "react-bootstrap-icons";
import ToolkitProvider, {
  CSVExport,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, {
  textFilter,
  dateFilter,
  selectFilter,
  numberFilter,
  Comparator,
} from "react-bootstrap-table2-filter";

const { ExportCSVButton } = CSVExport;

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

export const dummy_data: DataType[] = [
  {
    id: 0,
    registration: "2021-08-23",
    name: "Patrik Tao",
    email: "patriktao@gmail.com",
    ssn: "19990917-8338",
    gender: "male",
    period: "12 Months",
    expiration_date: "2022-08-23",
    paid: true,
    expired: false,
  },
  {
    id: 1,
    registration: "2021-08-23",
    name: "Enkezhuola",
    email: "enkezhuola@sina.com",
    ssn: "19960526-1234",
    gender: "female",
    period: "6 Months",
    expiration_date: "2022-08-23",
    paid: false,
    expired: true,
  },
  {
    id: 3,
    name: "Steele Mosley",
    ssn: "20210521-1234",
    registration: "2021-11-26",
    expiration_date: "2014-01-19",
    gender: "male",
    period: "6 Months",
    email: "steelemosley@isoswitch.com",
    paid: false,
    expired: true,
  },
  {
    id: 4,
    name: "Natalie Kemp",
    ssn: "20141130-1234",
    registration: "2018-02-24",
    expiration_date: "2018-05-29",
    gender: "female",
    period: "6 Months",
    email: "nataliekemp@isoswitch.com",
    paid: true,
    expired: true,
  },
  {
    id: 5,
    name: "Myra Wells",
    ssn: "20210528-1234",
    registration: "2018-11-13",
    expiration_date: "2021-01-22",
    gender: "female",
    period: "6 Months",
    email: "myrawells@isoswitch.com",
    paid: true,
    expired: false,
  },
  {
    id: 6,
    name: "Michelle Osborne",
    ssn: "20201130-1234",
    registration: "2014-02-13",
    expiration_date: "2020-04-24",
    gender: "female",
    period: "6 Months",
    email: "michelleosborne@isoswitch.com",
    paid: false,
    expired: false,
  },
  {
    id: 7,
    name: "Barr Hawkins",
    ssn: "20161105-1234",
    registration: "2021-12-23",
    expiration_date: "2021-10-26",
    gender: "male",
    period: "6 Months",
    email: "barrhawkins@isoswitch.com",
    paid: false,
    expired: false,
  },
  {
    id: 8,
    name: "Calderon Mccarty",
    ssn: "20140317-1234",
    registration: "2019-12-31",
    expiration_date: "2017-11-02",
    gender: "male",
    period: "6 Months",
    email: "calderonmccarty@isoswitch.com",
    paid: true,
    expired: true,
  },
  {
    id: 2,
    name: "Mad Dog",
    ssn: "20150405-1234",
    registration: "2021-09-25",
    expiration_date: "2017-11-15",
    gender: "female",
    period: "6 Months",
    email: "johnnietucker@isoswitch.com",
    paid: true,
    expired: false,
  },
  {
    id: 9,
    name: "Damn",
    ssn: "20150405-1234",
    registration: "2021-09-25",
    expiration_date: "2017-11-15",
    gender: "female",
    period: "6 Months",
    email: "johnnietucker@isoswitch.com",
    paid: true,
    expired: false,
  },
  {
    id: 10,
    name: "Damn",
    ssn: "20150405-1234",
    registration: "2021-09-25",
    expiration_date: "2017-11-15",
    gender: "female",
    period: "6 Months",
    email: "johnnietucker@isoswitch.com",
    paid: true,
    expired: false,
  },
];


const loadDataOnlyOnce = () => {
  var temp: any = [];
  dummy_data.forEach((person: any) => {
    temp.push(person);
  });
  return temp;
};

let idFilter;
let nameFilter;
let emailFilter;
let ssnFilter;
let genderFilter;
let membershipFilter;
let regFilter;
let expFilter;
let paymentFilter;
let statusFilter;

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
    filter: textFilter(),
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
  var [data, setData] = useState<string[]>([]);

  useEffect(() => {
    setData(loadDataOnlyOnce());
  }, []);

  const clearAllFilter = () => {
    idFilter("");
    nameFilter("");
    emailFilter("");
    ssnFilter("");
    genderFilter("");
    membershipFilter("");
    regFilter("");
    expFilter("");
    paymentFilter("");
    statusFilter("");
  };

  return (
    <TableStyle>
      <Card.Body>
        <Row style={{ paddingBottom: "0.5rem" }}>
          <div className="menu">
            <div className="searchbar">
              <h4>Active Members</h4>
              <Button variant="secondary" onClick={clearAllFilter}>
                Clear All Filters
              </Button>
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
        <Row>
          <ToolkitProvider
            keyField="id"
            loading={true}
            columns={columns}
            data={dummy_data}
            bordered={false}
            filter={ filterFactory() }
            noDataIndication="Empty data"
            pagination={paginationFactory()}
            hover
            defaultSorted={[
              {
                dataField: "name",
                order: "asc",
              },
            ]}
            filterPosition="inline"
            exportCSV
          >
            {(props) => (
              <div>
                <hr />
                <BootstrapTable {...props.baseProps} />
              </div>
            )}
          </ToolkitProvider>
        </Row>
      </Card.Body>
    </TableStyle>
  );
};

export default MemberTable;
