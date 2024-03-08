import { colorCodes } from "@utils/colorCodes";

export default function DonutChart({ data }) {
  const cx = 50;
  const cy = 50;
  const strokeWidth = 8;
  const radius = 30;
  const dashArray = 2 * Math.PI * radius;
  const startAngle = -90;

  let filled = 0;

  const sum = Object.values(data)
    .slice(1)
    .reduce((acc, value) => acc + value, 0);
  const totalInt = parseInt(sum).toLocaleString();
  const decimal = (sum - parseInt(sum)).toFixed(2).split('.')[1];
  const ratio = 100 / sum;

  const formattedData = Object.keys(data)
    .slice(1)
    .map((key) => ({
      name: key,
      value: data[key],
    }));

  formattedData.forEach((item) => {
    const itemRatio = ratio * item.value;

    item.angle = (filled * 360) / 100 + startAngle;
    item.offset = dashArray - (dashArray * itemRatio) / 100;
    item.filled = filled;

    filled += itemRatio;
  });

  return (
    <div className="donut-chart">
      <svg width="325px" height="325px" viewBox="10 10 80 80">
        <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
          <tspan dy={2} className="total-value">
            $ {totalInt}
          </tspan>
          <tspan dy={1} fill="#9d9bf4" className="decimal-value">
            .{decimal}
          </tspan>
        </text>
        {formattedData.map((item, index) => (
          <circle
            key={index}
            cx={cx}
            cy={cy}
            r={radius}
            fill="transparent"
            strokeWidth={strokeWidth}
            stroke={colorCodes[item?.name]}
            strokeDasharray={dashArray}
            strokeDashoffset={item.offset}
            transform={`rotate(${item.angle} ${cx} ${cy})`}
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from={`${startAngle} ${cx} ${cy}`}
              to={`${item.angle} ${cx} ${cy}`}
              dur="1s"
            />
            <title>
              {item.name}: {item.value}
            </title>
          </circle>
        ))}
      </svg>
    </div>
  );
}
