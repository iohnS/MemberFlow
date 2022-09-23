import "rsuite-table/dist/css/rsuite-table.css";
import { useState } from "react";
import { Table } from "rsuite";
const { Column, HeaderCell, Cell } = Table;

const MemberTable = () => {
  const [sortColumn, setSortColumn] = useState();
  const [sortType, setSortType] = useState();
  const [loading, setLoading] = useState(false);

  const sampleData = [
    { id: "1", name: "A", gender: "asdf", age: 1, email: "fake@mail.com" },
    { id: "2", name: "B", gender: "fsdf", age: 2, email: "fake@mail.com" },
    { id: "3", name: "C", gender: "sdfs", age: 3, email: "fake@mail.com" },
    { id: "4", name: "D", gender: "qwqe", age: 4, email: "fake@mail.com" },
    { id: "5", name: "E", gender: "xcvx", age: 5, email: "fake@mail.com" },
  ];

  const handleSortColumn = (sortColumn, sortType) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSortColumn(sortColumn);
      setSortType(sortType);
    }, 500);
  };

  return (
    <Table
      height={420}
      data={sampleData}
      sortColumn={sortColumn}
      sortType={sortType}
      onSortColumn={handleSortColumn}
      loading={loading}
    >
      <Column width={70} align="center" fixed sortable>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={130} fixed sortable>
        <HeaderCell>Name</HeaderCell>
        <Cell dataKey="name" />
      </Column>

      <Column width={100} sortable>
        <HeaderCell>Gender</HeaderCell>
        <Cell dataKey="gender" />
      </Column>

      <Column width={100} sortable>
        <HeaderCell>Age</HeaderCell>
        <Cell dataKey="age" />
      </Column>

      <Column width={200} sortable>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>
    </Table>
  );
};

export default MemberTable;
