import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { AppThemeColor } from "../../../styles/global.style";
ChartJS.register(...registerables);
type Props = {};

const LineChart: React.FunctionComponent = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          font: {
            family: "sans-serif", // Add your font here to change the font of your legend label
            size: 14,
            weight: "400",
          },
        },
        tooltip: {
          bodyFont: {
            family: "sans-serif", // Add your font here to change the font of your tooltip body
          },
          titleFont: {
            family: "sans-serif", // Add your font here to change the font of your tooltip title
          },
        },
      },
    },
  };

  const state = {
    labels: [
      "August",
      "September",
      "October",
      "November",
      "December",
      "January",
      "February",
      "Mars",
      "April",
      "May",
      "June",
      "July",
    ],
    datasets: [
      {
        label: "New Members By Month",
        fill: false,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        tension: 0.1,
        data: [12, 10, 4, 5, 1],
        responsive: true,
      },
    ],
  };

  return <Line data={state} options={options} className="graphStyle" />;
};

export default LineChart;
