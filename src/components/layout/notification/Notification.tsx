import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

interface Props {
  text: any;
  header?: string;
}

const Notification = ({ text, header }: Props) => {
  const [show, setShow] = useState(true);

  return (
    <ToastContainer
      style={{
        position: "fixed",
        bottom: "0",
        right: "0",
        margin: "1rem",
        marginBottom: "1rem",
      }}
    >
      <Toast show={show} onClose={() => setShow(false)}>
        <Toast.Header style={{ justifyContent: "space-between" }}>
          {header}
        </Toast.Header>
        <Toast.Body>{text}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default Notification;
