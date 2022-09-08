import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
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
    filter: textFilter({
      withoutEmptyComparatorOption: true,
      withoutEmptyNumberOption: true,
      getFilter: (filter) => {
        idFilter = filter;
      },
      placeholder: "Enter ID...",
    }),
    headerStyle: { width: "110px" },
  },
  {
    dataField: "name",
    text: "Name",
    sort: true,
    filter: textFilter({
      getFilter: (filter) => {
        nameFilter = filter;
      },
    }),
    classes: "cellWeight600",
  },
  {
    dataField: "email",
    text: "Email",
    sort: true,
    filter: textFilter({
      getFilter: (filter) => {
        emailFilter = filter;
      },
    }),
  },
  {
    dataField: "ssn",
    text: "SSN",
    sort: true,
    filter: textFilter({
      getFilter: (filter) => {
        ssnFilter = filter;
      },
    }),
  },
  {
    dataField: "gender",
    text: "Gender",
    sort: true,
    filter: selectFilter({
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" },
      ],
      getFilter: (filter) => {
        genderFilter = filter;
      },
    }),
  },
  {
    dataField: "period",
    text: "Membership Type",
    sort: true,
    filter: selectFilter({
      options: [
        { value: "6 Months", label: "6 Months" },
        { value: "12 Months", label: "12 Months" },
      ],
      getFilter: (filter) => {
        membershipFilter = filter;
      },
      placeholder: "Select Type...",
    }),
  },
  {
    dataField: "registration",
    text: "Registration Date",
    sort: true,
    filter: dateFilter({
      withoutEmptyComparatorOption: true,
      getFilter: (filter) => {
        regFilter = filter;
      },
    }),
  },
  {
    dataField: "expiration_date",
    text: "Expiration Date",
    sort: true,
    filter: dateFilter({
      withoutEmptyComparatorOption: true,
      getFilter: (filter) => {
        expFilter = filter;
      },
    }),
  },
  {
    dataField: "paid",
    text: "Payment",
    sort: true,
    type: "bool",
    filter: selectFilter({
      options: [
        { value: true, label: "Paid" },
        { value: false, label: "Unpaid" },
      ],
      getFilter: (filter) => {
        paymentFilter = filter;
      },
    }),
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
    filter: selectFilter({
      options: [
        { value: false, label: "Active" },
        { value: true, label: "Expired" },
      ],
      getFilter: (filter) => {
        statusFilter = filter;
      },
    }),
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
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Actions
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Add</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Import</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Export</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Row>
        <Row>
          <ToolkitProvider
            keyField="id"
            loading={true}
            bordered={false}
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
                <ExportCSVButton {...props.csvProps}>
                  Export CSV!!
                </ExportCSVButton>
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
