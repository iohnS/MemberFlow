import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { AppThemeColor } from "../../../styles/global.style";
ChartJS.register(...registerables);

type Props = {};

const LineChart: React.FunctionComponent = () => {
  const options = {
    responsive: true,
    plugins: {},
  };

  const state = {
    labels: [
      "January",
      "February",
      "Mars",
      "April",
      "May",
      /* "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December", */
    ],
    datasets: [
      {
        label: "New Members",
        fill: false,
        borderColor: AppThemeColor,
        backgroundColor: AppThemeColor,
        tension: 0.1,
        data: [12, 10, 4, 5, 1],
        responsive: true,
      },
    ],
  };

  return <Line data={state} options={options} />;
};

export default LineChart;
