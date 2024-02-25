import { Doughnut, Line, Pie } from "react-chartjs-2";
import { generateMockData } from "../../mockData/chartMockData";
import "./chart.css";
import { useState } from "react";

const MyChart = ({ chartType, selectedCompany }: any) => {
  const [optionsChartData, setOptionsChartData] = useState(generateMockData());
  const getDataSet = () => {
    let resultData = [];
    optionsChartData.map((dataPoint) => {
      for (let i = 0; i < dataPoint.options.length; i++) {
        if (dataPoint.options[i].company === selectedCompany) {
          resultData.push(parseFloat(dataPoint.options[i].market_price));
        }
      }
    });
    return resultData;
  };

  const chartData = {
    labels: optionsChartData.map((dataPoint) => {
      return dataPoint.date;
    }),
    datasets: [
      {
        label: "Market Price",
        data: getDataSet(),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const getChart = (chartType: string) => {
    switch (chartType) {
      case "line":
        return (
          <Line
            data={chartData}
            options={{ responsive: true, aspectRatio: 3 }}
          />
        );
      case "doghnut":
        return (
          <Doughnut
            data={chartData}
            options={{ responsive: true, aspectRatio: 3 }}
          />
        );
      case "pie":
        return (
          <Pie
            data={chartData}
            options={{ responsive: true, aspectRatio: 3 }}
          />
        );
      default:
        return "No data to display";
    }
  };

  return <div className="chart-style">{getChart(chartType)}</div>;
};

export default MyChart;
