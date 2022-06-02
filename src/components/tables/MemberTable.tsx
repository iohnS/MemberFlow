import styled from "styled-components";
import { AppThemeColor } from "../../styles/global.style";
import React from "react";
import { Button } from "react-bootstrap";


interface Props {
  data?: JSON;
  search?: string;
}

const MemberTable = ({}: Props) => {
  const [search, setSearch] = React.useState("");

  const data = [
    {
      id: "0",
      time: "2021-08-23",
      name: "Patrik Tao",
      email: "patriktao@gmail.com",
      birth: "1999/09/17",
      gender: "Male",
      period: "12 Months (60 kr)",
      expiration_date: "2022/08/23",
      payed: true,
      expired: true,
    },
    {
      id: "1",
      time: "2021-08-23",
      name: "Jola Enke",
      email: "enkezhuola@sina.com",
      birth: "1996/05/26",
      gender: "Female",
      period: "12 Months (60 kr)",
      expiration_date: "2022/08/23",
      payed: false,
      expired: false,
    },
  ];

  const columns = [
    {
      dataField: "time",
      text: "Registration Date",
      sort: true,
      /* renderCell: (item) => item.time, */
    },
    {
      dataField: "name",
      text: "Name",
      renderCell: (item) => item.name,
      sort: true,
    },
    { dataField: "email", text: "Email", renderCell: (item) => item.email },
    {
      dataField: "birth",
      text: "Date of Birth",
      /* renderCell: (item) => item.birth, */
    },
    {
      dataField: "gender",
      text: "Gender" /* renderCell: (item) => item.gender */,
    },
    {
      dataField: "period",
      text: "Membership Period",
      /* renderCell: (item) => item.period, */
    },
    {
      dataField: "payed",
      text: "Payed",
      sort: true,
      /*  renderCell: (item) => (
        <Cell>
          <div>{item.payed ? <Yes>Yes</Yes> : <No>No</No>}</div>
        </Cell>
      ), */
    },
    {
      dataField: "expiration_date",
      text: "Expiration Date",
      sort: true,
      /*  renderCell: (item) => item.expiration_date, */
    },
    {
      dataField: "status",
      text: "Status",
      sort: true,
      /* renderCell: (item) => (
        <Cell>
          <div>{item.expired ? <No>Expired</No> : <Yes>Active</Yes>}</div>
        </Cell>
      ), */
    },
    {
      text: "Edit",
      /* renderCell: (item) => <Button variant="outline-primary"> Edit </Button>, */
    },
  ];

  return (
    <div>

      <br />
    </div>
  );
};

export const Cell = styled.div`
  display: grid;
  justify-content: start;
`;

export const Yes = styled.div`
  width: 4rem;
  display: grid;
  justify-content: center;
  color: white;
  border-radius: 1rem;
  background: #03a89e;
  padding: 6px 12px 6px 12px;
  font-weight: 600;
`;

export const No = styled.div`
  width: 4rem;
  display: grid;
  justify-content: center;
  color: white;
  border-radius: 1rem;
  background: #5b696e;
  padding: 6px 12px 6px 12px;
  font-weight: 600;
  opacity: 0.75;
`;

export default MemberTable;
