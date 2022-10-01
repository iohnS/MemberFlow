import "rsuite-table/dist/css/rsuite-table.css";
import { useEffect, useState } from "react";
import { Table } from "rsuite";
import { getData } from "../../backend/db";
import { EditButton } from "./MemberTable.style";
import type { DocumentData } from "firebase/firestore";
const { Column, HeaderCell, Cell } = Table;

const MemberTable = () => {
  const [sortColumn, setSortColumn] = useState("");
  const [sortType, setSortType] = useState();
  const [loading, setLoading] = useState(false);
  const [dbData, setData] = useState<DocumentData[] | undefined>();

  useEffect(() => {
    getData()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log("DID NOT WORK", error);
      });
  }, []);

  function sortData(data: DocumentData[] | undefined) {
    if (!data) {
      return;
    }

    if (sortColumn && sortType) {
      return data.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];

        if (sortColumn == "regDate") {
          x = new Date(x);
          y = new Date(y);
        } else if (sortColumn == "ssn") {
          x = parseInt(x.split("-")[0]);
          y = parseInt(y.split("-")[0]);
        } else {
          if (typeof x === "string") {
            x = x.charCodeAt(0);
          }
          if (typeof y === "string") {
            y = y.charCodeAt(0);
          }
        }

        if (sortType === "asc") {
          return x - y;
        } else {
          return y - x;
        }
      });
    }

    return data;
  }

  const handleSortColumn = (sortColumn, sortType) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSortColumn(sortColumn);
      setSortType(sortType);
    }, 500);
  };

  function edit() {
    console.log("EDIT");
  }

  // 1. När man trycker på edit så blir saker som status en sak man kan ändra. Antingen input field eller fler vals.
  //  - Hur gör man så att hela raden editas?
  //  - Hur ska man hämta värdet från den raden för att sedan ändra staten?

  return (
    <Table
      height={420}
      data={sortData(dbData)}
      sortColumn={sortColumn}
      sortType={sortType}
      onSortColumn={handleSortColumn}
      loading={loading}
    >
      <Column width={70} align="center" fixed sortable resizable>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={130} fixed sortable resizable>
        <HeaderCell>Name</HeaderCell>
        <Cell dataKey="name" />
      </Column>

      <Column width={200} sortable resizable>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>

      <Column width={200} sortable resizable>
        <HeaderCell>SSN</HeaderCell>
        <Cell dataKey="ssn" />
      </Column>

      <Column width={200} sortable resizable>
        <HeaderCell>Registration date</HeaderCell>
        <Cell dataKey="regDate" />
      </Column>

      <Column width={200} sortable resizable>
        <HeaderCell>Period</HeaderCell>
        <Cell dataKey="period" />
      </Column>

      <Column width={100} sortable resizable>
        <HeaderCell>Status</HeaderCell>
        <Cell dataKey="status" />
      </Column>

      <Column width={80} align="left">
        <HeaderCell>...</HeaderCell>
        <Cell>
          <EditButton onClick={edit}>Edit</EditButton>
        </Cell>
      </Column>
    </Table>
  );
};

export default MemberTable;
