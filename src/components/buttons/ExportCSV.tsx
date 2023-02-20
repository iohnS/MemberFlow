import { CSVLink } from "react-csv";

const ExportCSV = ({ data }) => {
  return (
    <div>
      <CSVLink separator={";"} data={data} target="_blank">
        Export to CSV
      </CSVLink>
    </div>
  );
};

export default ExportCSV;
