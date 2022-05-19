import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import {
  DEFAULT_OPTIONS,
  getTheme,
} from "@table-library/react-table-library/mantine";
import styled from "styled-components";
import { AppThemeColor } from "../../styles/global.style";
import React from "react";

const key = "Base";

interface Props {
  data?: JSON;
  search?: string;
}

const MemberTable = ({}: Props) => {
  const [search, setSearch] = React.useState('');

  const mantineTheme = getTheme(DEFAULT_OPTIONS);
  const theme = useTheme(mantineTheme);

  const nodes = [
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
      expired: false,
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

  const data1 = { nodes };

  const COLUMNS = [
    { label: "Registration Date", renderCell: (item) => item.time },
    { label: "Name", renderCell: (item) => item.name },
    { label: "Email", renderCell: (item) => item.email },
    { label: "Date of Birth", renderCell: (item) => item.birth },
    { label: "Gender", renderCell: (item) => item.gender },
    { label: "Membership Period", renderCell: (item) => item.period },
    {
      label: "Payed",
      renderCell: (item) => (
        <Cell>
          <div>{item.payed ? <Yes>Yes</Yes> : <No>No</No>}</div>
        </Cell>
      ),
    },
    { label: "Expiration Date", renderCell: (item) => item.expiration_date },
    {
      label: "Expired",
      renderCell: (item) => item.expired,
    },
  ];

  return (
    <div>
      <CompactTable
        columns={COLUMNS}
        data={data1}
        theme={theme}
        layout={{ horizontalScroll: true }}
      />

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
  background: #03A89E;
  padding: 4px 12px 4px 12px;
  font-weight: 700;
`;

export const No = styled.div`
  width: 4rem;
  display: grid;
  justify-content: center;
  color: white;
  border-radius: 1rem;
  background: #5B696E;
  padding: 4px 12px 4px 12px;
  font-weight: 700;
  opacity: 0.75;
`;

export default MemberTable;
