import "rsuite-table/dist/css/rsuite-table.css";
import { useEffect, useState, useRef } from "react";
import { Table } from "rsuite";
import { Button, Form } from "react-bootstrap";
import type { DocumentData } from "firebase/firestore";
import { UserType } from "../../types";
import { updateUser, db } from "../../backend/db";
import { onSnapshot, collection } from "firebase/firestore";
const { Column, HeaderCell, Cell } = Table;

const MemberTable = () => {
  const [sortColumn, setSortColumn] = useState("");
  const [sortType, setSortType] = useState();
  const [loading, setLoading] = useState(false);
  const prevData = useRef<DocumentData[]>([]);
  const [dbData, setData] = useState<DocumentData[]>(prevData.current);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
      let members = prevData.current.map((x) => x);
      snapshot.docChanges().forEach((doc) => {
        switch (doc.type) {
          case "added":
            if (
              !members.find((member: DocumentData) => member.id == doc.doc.id)
            ) {
              console.log("added!");
              members.push(doc.doc.data());
            }
            break;
          case "removed":
            members = members.filter(
              (member: DocumentData) => member.id != doc.doc.id
            );
            break;
          case "modified":
            members = members.filter(
              (member: DocumentData) => member.id != doc.doc.id
            );
            members.push(doc.doc.data());
            break;
        }
      });
      prevData.current = members;
      setData(prevData.current);
    });

    return () => {
      unsub();
    };
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
          <Form.Control
            placeholder={rowData[dataKey]}
            onChange={(event) => {
              onChange && onChange(rowData.id, dataKey, event.target.value);
            }}
          />
        ) : (
          <div>{rowData[dataKey]}</div>
        )}
      </Cell>
    );
  };

  const EditableSelectCell = ({
    rowData,
    dataKey,
    onChange,
    type,
    ...props
  }) => {
    const editing = rowData.edit === "EDIT";
    let statusPlaceholder = "";
    let dataValue = "";
    if (dataKey === "status") {
      statusPlaceholder = rowData.status === "Active" ? "Active" : "Inactive";
      dataValue = statusPlaceholder;
    }
    if (dataKey === "period") {
      statusPlaceholder = rowData.period == 6 ? "6 Months" : "12 Months";
      dataValue = String(rowData.period);
    }
    return (
      <Cell {...props}>
        {editing ? (
          <Form.Select
            placeholder={statusPlaceholder}
            onChange={(event) => {
              onChange && onChange(rowData.id, dataKey, event.target.value);
            }}
            defaultValue={dataValue}
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
                <option value="0" disabled>
                  Select status
                </option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </>
            )}
          </Form.Select>
        ) : (
          <div>{rowData[dataKey]}</div>
        )}
      </Cell>
    );
  };

  const EditActionCell = ({ rowData, dataKey, onEdit, onSave, ...props }) => {
    return (
      <Cell {...props} style={{ padding: "6px" }}>
        <Button
          variant="link"
          onClick={() => {
            if (rowData.edit) {
              onSave(rowData.id, rowData);
            } else {
              onEdit(rowData.id);
            }
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

  function refresh() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 50);
  }

  function handleChange(id: string, dataKey: string, value) {
    let dataCopy = dbData;
    let member = dataCopy.find((member) => member.id === id);
    if (member) {
      member[dataKey] = value;
    }
    setChanged(true);
  }

  function handleEdit(id: string) {
    const dataCopy = dbData;
    const member = dataCopy.find((member) => member.id === id);
    if (member) {
      member.edit = member.edit ? null : "EDIT";
    }
    refresh();
  }

  function handleSave(id: string, rowData: UserType) {
    if (dbData) {
      const dataCopy = dbData;
      const member = dataCopy.find((member) => member.id === id);
      if (member) {
        if (changed) {
          updateUser(rowData);
          setChanged(false);
        }
        member.edit = member.edit ? null : "EDIT";
      }
      setData(dataCopy);
      refresh();
    }
  }

  return (
    <>
      <Table
        virtualized
        data={sortData(dbData)}
        height={420}
        sortColumn={sortColumn}
        sortType={sortType}
        onSortColumn={handleSortColumn}
        loading={loading}
      >
        <Column width={250} align="center" fixed sortable resizable>
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

        <Column width={150} sortable resizable>
          <HeaderCell>Period</HeaderCell>
          <EditableSelectCell
            rowData
            dataKey="period"
            type="select"
            onChange={handleChange}
          />
        </Column>

        <Column width={200} sortable resizable>
          <HeaderCell>Status</HeaderCell>
          <EditableSelectCell
            rowData
            dataKey="status"
            type="select"
            onChange={handleChange}
          />
        </Column>

        <Column width={80} align="left">
          <HeaderCell>...</HeaderCell>
          <EditActionCell
            rowData
            dataKey="edit"
            onEdit={handleEdit}
            onSave={handleSave}
          />
        </Column>
      </Table>
      <Button
        onClick={() => {
          const fakemember = {
            name: "askdjh",
            email: " ALSDHSJALK",
          };
          let dataCopy = dbData.map((x) => x);
          dataCopy.push(fakemember);
          setData(dataCopy);
        }}
      >
        Hej
      </Button>
    </>
  );
};

export default MemberTable;
