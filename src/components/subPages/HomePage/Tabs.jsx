export default function Tabs({ tabs, selectedPeriod, handleClick }) {
  return (
    <ul className="tabs">
      {tabs?.map((tab) => (
        <li
          key={tab?.period}
          className={`tab__label ${
            tab?.period === selectedPeriod?.period ? "active__tab__label" : ""
          }`}
          onClick={() => handleClick(tab)}
        >
          {tab?.period}
        </li>
      ))}
    </ul>
  );
}
