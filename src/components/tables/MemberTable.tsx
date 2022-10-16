import "rsuite-table/dist/css/rsuite-table.css";
import { useEffect, useState, useRef } from "react";
import { Table } from "rsuite";
import { UserType } from "../../types";
import { updateUser, db, removeUser } from "../../backend/db";
import { onSnapshot, collection } from "firebase/firestore";
import { Form } from "react-bootstrap";
import {
  EditableCell,
  EditActionCell,
  EditableSelectCell,
  RemoveActionCell,
} from "./TableComponents";
import type { DocumentData } from "firebase/firestore";
const { Column, HeaderCell, Cell } = Table;

const MemberTable = () => {
  const [sortColumn, setSortColumn] = useState("");
  const [sortType, setSortType] = useState();
  const [loading, setLoading] = useState(false);
  const prevData = useRef<DocumentData[]>([]);
  const [dbData, setData] = useState<DocumentData[]>(prevData.current);
  const [changed, setChanged] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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

  function compareStrings(a: string, b: string, type: string) {
    let i = 0;
    try {
      while (a.charCodeAt(i) == b.charCodeAt(0)) {
        i += 1;
      }
    } catch (e) {
      console.log(e);
    }

    const x = a.charCodeAt(i);
    const y = b.charCodeAt(i);
    if (type === "asc") {
      return x - y;
    } else {
      return y - x;
    }
  }

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
        }
        if (typeof x === "string" && typeof y === "string") {
          return compareStrings(x, y, sortType);
        } else {
          if (sortType == "asc") {
            return x - y;
          } else {
            return y - x;
          }
        }
      });
    }

    return data;
  }

  function formatedData(data: DocumentData[] | undefined) {
    if (!data) {
      return;
    }

    if (searchTerm) {
      return data.filter(
        (document: DocumentData) =>
          document.name.toLowerCase().includes(searchTerm) ||
          document.email.toLowerCase().includes(searchTerm) ||
          document.ssn.toLowerCase().includes(searchTerm)
      );
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

  function handleCancel(id: string) {
    if (dbData) {
      const dataCopy = dbData;
      const member = dataCopy.find((member) => member.id === id);
      if (member) {
        member.edit = null;
      }
      setData(dataCopy);
      refresh();
    }
  }

  return (
    <>
      <Form>
        <Form.Control
          placeholder="Search..."
          onChange={(event) => setSearchTerm(event.target.value.toLowerCase())}
        />
      </Form>
      <Table
        virtualized
        data={formatedData(sortData(dbData))}
        height={420}
        sortColumn={sortColumn}
        sortType={sortType}
        onSortColumn={handleSortColumn}
        loading={loading}
      >
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

        <Column width={180} sortable resizable>
          <HeaderCell>SSN</HeaderCell>
          <EditableCell
            rowData
            dataKey="ssn"
            type="form"
            onChange={handleChange}
          />
        </Column>

        <Column width={180} sortable resizable>
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

        <Column width={120} sortable resizable>
          <HeaderCell>Status</HeaderCell>
          <EditableSelectCell
            rowData
            dataKey="status"
            type="select"
            onChange={handleChange}
          />
        </Column>

        <Column width={100}>
          <HeaderCell>#</HeaderCell>
          <RemoveActionCell
            rowData
            removeClick={removeUser}
            handleCancel={handleCancel}
          />
        </Column>

        <Column width={80} align="left" fixed="right">
          <HeaderCell>...</HeaderCell>
          <EditActionCell
            rowData
            dataKey="edit"
            onEdit={handleEdit}
            onSave={handleSave}
          />
        </Column>
      </Table>
    </>
  );
};

export default MemberTable;
