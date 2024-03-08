import DonutChart from "@components/DonutChart";
import Tabs from "@components/Tabs";
import { useState } from "react";
import expenseData from "@utils/expense-data.json";
import Legend from "@components/Legend";

export default function App() {
  const [selectedPeriod, setSelectedPeriod] = useState(expenseData?.[0]);
  const handleClick = (expense) => {
    setSelectedPeriod(expense);
  };
  return (
    <div className="container">
      <h1 className="title">Expense Chart</h1>
      <div className="chart-container">
        <div className="tab-and-chart">
          <h3 className="chart-title">Expenses</h3>
          {/* tabs */}
          <Tabs
            selectedPeriod={selectedPeriod}
            handleClick={handleClick}
          />

          {/* doughnut chart */}
          <DonutChart data={selectedPeriod} />
        </div>

        {/* legend */}
        <Legend />
      </div>
    </div>
  );
}
