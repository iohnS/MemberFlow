import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import React, { useState } from "react";
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
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

interface Props {
  data?: JSON;
  search?: string;
}

const MemberTable = ({}: Props) => {
  const [search, setSearch] = React.useState("");

  const columns = [
    {
      dataField: "id",
      text: "ID",
    },
    {
      dataField: "registration",
      text: "Registration Date",
      sort: true,
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
    },
    {
      dataField: "email",
      text: "Email",
    },
    {
      dataField: "birth",
      text: "Birth",
      sort: true,
    },
    {
      dataField: "gender",
      text: "Gender",
    },
    {
      dataField: "period",
      text: "Membership Type",
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
      editor: {
        value: "true:false",
      },
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
      editor: {
        type: "Type.CHECKBOX",
        value: "true:false",
      },
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

  const remote = {
    filter: true,
    pagination: false,
    sort: false,
    cellEdit: false,
  };

  return (
    <TableStyle>
      <Card.Body>
        <Row style={{ paddingBottom: "0.5rem" }}>
          <div className="menu">
            <div className="searchbar">
              <h4>Active Members</h4>
              <Form style={{ marginLeft: "3rem" }}>
                <Form.Control
                  style={{ width: "350px" }}
                  type="text"
                  placeholder="Search for a name..."
                />
              </Form>
              <Button
                style={{ marginLeft: "12px" }}
                variant="outline-secondary"
              >
                Clear
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
          <BootstrapTable
            bootstrap4
            keyField="id"
            data={dummy_data}
            columns={columns}
            loading={true}
            bordered={false}
            noDataIndication="Empty data"
            pagination={paginationFactory()}
            striped
            hover
            condensed
          />
        </Row>
      </Card.Body>
    </TableStyle>
  );
};

export default MemberTable;
