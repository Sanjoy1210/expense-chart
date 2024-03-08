import expenseData from "@utils/expense-data.json";
import { colorCodes } from "@utils/colorCodes";

export default function Legend() {
  return (
    <ul className="donut-list">
      {Object.keys(expenseData[0])
        .filter(key => key !== 'period')
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
                marginTop: "2px",
              }}
            ></span>
            {item}
          </li>
        ))}
    </ul>
  );
}
