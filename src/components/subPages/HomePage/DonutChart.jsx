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

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="donut__chart">
      <svg width="325px" height="325px" viewBox="0 0 100 100">
        <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
          <tspan dy={2} className="total__value">
            $ {numberWithCommas(sum)}
          </tspan>
          <tspan dy={1} fill="#9d9bf4" className="decimal__value">
            .00
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
