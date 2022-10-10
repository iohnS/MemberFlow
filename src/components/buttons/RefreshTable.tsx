import { getData } from "../../backend/db";
import { Button } from "react-bootstrap";

const RefreshTable = () => {
  return (
    <Button variant="primary" onClick={getData}>
      Refresh
    </Button>
  );
};

export default RefreshTable;
