import DonutChart from "@components/DonutChart";
import Tabs from "@components/Tabs";
import { useState } from "react";
import expenseData from "@utils/expense-data.json";
import { colorCodes } from "@utils/colorCodes";

export default function App() {
  const [selectedPeriod, setSelectedPeriod] = useState(expenseData?.[0]);
  const handleClick = (expense) => {
    setSelectedPeriod(expense);
  };
  return (
    <section className="section-container">
      <h1 className="title">Expense Chart</h1>
      <div className="chart-container">
        <div className="tab-and-chart">
          <h3 className="chart-title">Expenses</h3>
          <div>
            {/* tabs */}
            <Tabs
              tabs={expenseData}
              selectedPeriod={selectedPeriod}
              handleClick={handleClick}
            />

            {/* doughnut chart */}
            <DonutChart data={selectedPeriod} />
          </div>
        </div>

        {/* donut items */}
        <ul className="donut-list">
          {Object.keys(selectedPeriod)
            .slice(1)
            .map((item, index) => (
              <li key={index} className="donut-list-item">
                <span
                  className="donut-list-item-color"
                  style={{
                    backgroundColor: colorCodes[item],
                    width: "37px",
                    height: "13px",
                    display: "inline-block",
                    borderRadius: "33px",
                  }}
                ></span>
                {item}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
