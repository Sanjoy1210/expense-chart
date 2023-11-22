import { colorCodes } from "@utils/colorCodes";

export default function Chart({ data, size }) {
  const total = Object.values(data)
    .slice(1)
    .reduce((acc, val) => acc + val, 0);

  let startAngle = 0;

  console.log({ total });

  return (
    <div className="doughnut-chart-container">
      <div className="doughnut-chart">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <path
            d="M 225.1743955496506 6.000069437928232 A 219 219 0 1 1 225.15571328263277 6.0000553576014966 Z M 225.11180782508677 67.75003974878007 A 157.25 157.25 0 1 0 225.1252223752628 67.75004985896902 Z"
            fill="rgba(0,0,0,0.5)"
          ></path>
          <g opacity="0.9999998780673678">
            {Object.entries(data)
              .filter(([key]) => key !== "period")
              .map(([key, value], index) => {
                const percentage = (value / total) * 100;
                const angle = (percentage * 360) / 100;

                const largeArcFlag = percentage > 50 ? 1 : 0;

                const x1 =
                  size / 2 +
                  Math.cos((startAngle * Math.PI) / 180) * (size / 3);
                const y1 =
                  size / 2 +
                  Math.sin((startAngle * Math.PI) / 180) * (size / 3);

                startAngle += angle;

                const x2 =
                  size / 2 +
                  Math.cos((startAngle * Math.PI) / 180) * (size / 3);
                const y2 =
                  size / 2 +
                  Math.sin((startAngle * Math.PI) / 180) * (size / 3);

                const pathData = `M ${size / 2},${size / 2} L ${x1},${y1} A ${
                  size / 3
                },${size / 3} 0 ${largeArcFlag},1 ${x2},${y2} Z`;

                return (
                  <path
                    key={index}
                    fill={colorCodes[key]}
                    stroke="#FFFFFF"
                    strokeWidth="1"
                    strokeDasharray="0"
                    d={pathData}
                  ></path>
                );
              })}
          </g>
        </svg>
      </div>
      <div className="legend">
        {Object.entries(data)
          .filter(([key]) => key !== "period")
          .map(([key, value], index) => (
            <div key={index} className="legend-item">
              <span className="legend-color" />
              <span>{key}</span>
              <span>{value}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
