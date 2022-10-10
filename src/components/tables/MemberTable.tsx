import "rsuite-table/dist/css/rsuite-table.css";
import { useEffect, useState } from "react";
import { Table } from "rsuite";
import { Button, Form } from "react-bootstrap";
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

        if (sortColumn === "regDate") {
          x = new Date(x);
          y = new Date(y);
        } else if (sortColumn === "ssn") {
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

  const EditableCell = ({ rowData, dataKey, onChange, type, ...props }) => {
    const editing = rowData.edit === "EDIT";
    return (
      <Cell {...props}>
        {editing ? (
          type === "select" ? (
            <Form.Select
              placeholder={rowData[dataKey]}
              onChange={(event) => {
                onChange && onChange(rowData.id, dataKey, event.target.value);
              }}
            >
              {dataKey === "period" ? (
                <>
                  <option value="0" disabled>
                    Choose period
                  </option>
                  <option value="6">6 Months</option>
                  <option value="12">12 Months</option>
                </>
              ) : (
                <>
                  <option value="1" disabled>
                    Select status
                  </option>
                  <option value="2">Active</option>
                  <option value="3">Inactive</option>
                </>
              )}
            </Form.Select>
          ) : (
            <Form.Control
              placeholder={rowData[dataKey]}
              onChange={(event) => {
                onChange && onChange(rowData.id, dataKey, event.target.value);
              }}
            />
          )
        ) : (
          <div>{rowData[dataKey]}</div>
        )}
      </Cell>
    );
  };

  const EditCell = ({ rowData, dataKey, onClick, ...props }) => {
    return (
      <Cell {...props} style={{ padding: "6px" }}>
        <Button
          variant="link"
          onClick={() => {
            onClick(rowData.id);
          }}
        >
          {rowData.edit === "EDIT" ? "Save" : "Edit"}
        </Button>
      </Cell>
    );
  };

  const handleSortColumn = (sortColumn, sortType) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSortColumn(sortColumn);
      setSortType(sortType);
    }, 500);
  };

  function handleChange(id: string, dataKey: string, value) {
    if (dbData) {
      let dataCopy = dbData;
      let member = dataCopy.find((member) => member.id === id);
      if (member) {
        member[dataKey] = value;
      }
      setData(dataCopy);
    }
  }

  function refresh() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 50);
  }

  function handleEdit(id: string) {
    if (dbData) {
      const dataCopy = dbData;
      const member = dataCopy.find((member) => member.id === id);
      if (member) {
        member.edit = member.edit ? null : "EDIT";
      }
      setData(dataCopy);
      refresh();
    }
  }

  return (
    <Table
      virtualized
      data={sortData(dbData)}
      height={420}
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
        <EditableCell
          rowData
          dataKey="name"
          type="form"
          onChange={handleChange}
        />
      </Column>

      <Column width={200} sortable resizable>
        <HeaderCell>Email</HeaderCell>
        <EditableCell
          rowData
          dataKey="email"
          type="form"
          onChange={handleChange}
        />
      </Column>

      <Column width={200} sortable resizable>
        <HeaderCell>SSN</HeaderCell>
        <EditableCell
          rowData
          dataKey="ssn"
          type="form"
          onChange={handleChange}
        />
      </Column>

      <Column width={200} sortable resizable>
        <HeaderCell>Registration date</HeaderCell>
        <EditableCell
          rowData
          dataKey="regDate"
          type="form"
          onChange={handleChange}
        />
      </Column>

      <Column width={200} sortable resizable>
        <HeaderCell>Period</HeaderCell>
        <EditableCell
          rowData
          dataKey="period"
          type="select"
          onChange={handleChange}
        />
      </Column>

      <Column width={100} sortable resizable>
        <HeaderCell>Status</HeaderCell>
        <EditableCell
          rowData
          dataKey="status"
          type="select"
          onChange={handleChange}
        />
      </Column>

      <Column width={80} align="left">
        <HeaderCell>...</HeaderCell>
        <EditCell rowData dataKey="edit" onClick={handleEdit} />
      </Column>
    </Table>
  );
};

export default MemberTable;
