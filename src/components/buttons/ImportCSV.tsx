import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
import MemberTable from "../tables/MemberTable";
import { addUser } from "../../backend/firebase";
import { UserType } from "../../types";

const ImportCSV = () => {
  const [file, setFile] = useState();
  const [show, setShow] = useState(false);
  const [data, setData] = useState<UserType[]>([]);

  const fileReader = new FileReader();

  function format(arr: string[]) {
    const name = arr[1];
    arr.splice(1, 1);
    arr.push(name.substring(0, name.indexOf(" "))); // firstName
    arr.push(name.substring(name.indexOf(" ") + 1)); // lastName

    var obj = {};
    const propList = [
      "regDate",
      "email",
      "ssn",
      "gender",
      "period",
      "status",
      "firstName",
      "lastName",
    ];
    propList.forEach((prop, i) => {
      if (i === 4) {
        let period: number = parseInt(arr[i]);
        obj[prop] = period;
      } else {
        obj[prop] = arr[i];
      }
    });
    return obj as UserType;
  }

  function handleOnChange(e) {
    setFile(e.target.files[0]);
  }

  function handleOnSubmit(e) {
    e.preventDefault();

    // The downloaded CSV file has the following order of properties:
    // regDate, name, email, ssn, gender, afmember, period, paid

    fileReader.onload = function (event) {
      if (event.target) {
        const csvOutput = event.target.result;
        const newData: UserType[] = [];
        if (typeof csvOutput == "string" || csvOutput instanceof String) {
          const csvArray = csvOutput
            .replaceAll("\r", ",")
            .replaceAll("\n", "")
            .split(",");
          const chunkSize = 7;
          for (let i = 7; i < csvArray.length; i += chunkSize) {
            const chunk = csvArray.slice(i, i + chunkSize);
            newData.push(format(chunk));
          }
        }
        setData(newData);
      }
    };
    if (file) {
      fileReader.readAsText(file);
    }
    handleShow();
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const confirmCSV = () => {
    data.map((member: UserType) => {
      addUser(
        member.email,
        member.firstName,
        member.lastName,
        member.ssn,
        member.gender,
        member.period,
        member.regDate,
        member.status
      );
    });
    handleClose();
  };

  const Preview = () => {
    return (
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Preview of imported CSV data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MemberTable dbData={data} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={confirmCSV}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control type="file" onChange={handleOnChange} />
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Button onClick={handleOnSubmit}>Upload CSV</Button>
          <Preview />
        </Col>
      </Row>
    </Container>
  );
};
export default ImportCSV;
