import { Button, Form, Modal } from "react-bootstrap";
import { Table } from "rsuite";
import { useState } from "react";
import { getRowDataFormat } from "../../helpers/utils";
const { Cell } = Table;

export const NormalCell = ({ rowData, dataKey, ...props }) => {
  return <Cell {...props}>{getRowDataFormat(rowData[dataKey])}</Cell>;
};

export const EditableCell = ({
  rowData,
  dataKey,
  onChange,
  type,
  ...props
}) => {
  const editing = rowData.edit === "EDIT";
  const data = getRowDataFormat(rowData[dataKey]);
  return (
    <Cell {...props}>
      {editing ? (
        <Form.Control
          size="sm"
          value={data}
          onChange={(event) => {
            onChange && onChange(rowData.id, dataKey, event.target.value);
          }}
        />
      ) : (
        <div>{data}</div>
      )}
    </Cell>
  );
};

export const EditableSelectCell = ({
  rowData,
  dataKey,
  onChange,
  type,
  ...props
}) => {
  const editing = rowData.edit === "EDIT";
  let statusPlaceholder = "";
  let dataValue = "";
  const data = getRowDataFormat(rowData[dataKey]);

  if (dataKey === "status") {
    statusPlaceholder = rowData.status === "Active" ? "Active" : "Inactive";
    dataValue = statusPlaceholder;
  } else if (dataKey === "period") {
    statusPlaceholder = rowData.period === 6 ? "6 Months" : "12 Months";
    dataValue = String(rowData.period);
  }

  return (
    <Cell {...props}>
      {editing ? (
        <Form.Select
          size="sm"
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
        <div>{data}</div>
      )}
    </Cell>
  );
};

export const EditActionCell = ({
  rowData,
  dataKey,
  onEdit,
  onSave,
  ...props
}) => {
  return (
    <Cell {...props} style={{ padding: "4px" }}>
      <Button
        variant="primary"
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

export const RemoveActionCell = ({
  rowData,
  removeClick,
  handleCancel,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeUser = (id: string) => {
    console.log(rowData.id);
    setTimeout(() => {
      removeClick(rowData.id).then(() => {
        handleClose();
      }, 3000);
    });
  };

  return (
    <Cell {...props} style={{ padding: "4px" }}>
      <div>
        <Button
          variant={rowData.edit ? "secondary" : "danger"}
          onClick={() => {
            if (rowData.edit) {
              handleCancel(rowData.id);
            } else {
              handleShow();
            }
          }}
        >
          {rowData.edit ? "Cancel" : "Delete"}
        </Button>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              Remove {rowData.name}?
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={() => removeUser(rowData.id)}>
              Remove
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Cell>
  );
};
