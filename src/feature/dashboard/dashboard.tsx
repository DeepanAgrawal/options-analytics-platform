import React, { useState } from "react";
import "./dashboard.css"; // Assuming you have some CSS file for styling
import OptionsGrid from "../../component/grid/grid";
import MyChart from "../chart/charts";
import optionsMockData from "../../mockData/optionsMockData";

const Dashboard = () => {
  const [selectedOptionData, setSelectedOptionData] = useState("");
  const [chartType, setChartType] = useState("");

  const handleSelectedOptionData = (data: any) => {
    setSelectedOptionData(data.company);
    setChartType("line");
  };

  return (
    <div className="dashboard-container">
      <div className="table-container">
        {/* Table component goes here */}
        <OptionsGrid
          selectedCompany={handleSelectedOptionData}
          data={optionsMockData}
        />
      </div>
      <div className="verticalDivider" />
      <div className="chart-section">
        {/* Chart component goes here */}
        <div className="chart-title-container">
          <h2>{selectedOptionData}</h2>
        </div>
        <div className="chart-container">
          <MyChart chartType={chartType} selectedCompany={selectedOptionData} />
          {selectedOptionData !== "" ? (
            <div className="chart-buttons">
              <button onClick={() => setChartType("line")}>Line Chart</button>
              <button onClick={() => setChartType("pie")}>Pie Chart</button>
              <button onClick={() => setChartType("doghnut")}>
                Dougnut Chart
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
