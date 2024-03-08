import expenseData from "@utils/expense-data.json";

export default function Tabs({ selectedPeriod, handleClick }) {
  return (
    <ul className="tabs">
      {expenseData?.map((tab) => (
        <li
          key={tab?.period}
          className={`tab-label ${
            tab?.period === selectedPeriod?.period ? "active-tab-label" : ""
          }`}
          onClick={() => handleClick(tab)}
        >
          {tab?.period}
        </li>
      ))}
    </ul>
  );
}
