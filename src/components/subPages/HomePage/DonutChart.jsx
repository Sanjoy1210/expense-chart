import { colorCodes } from "@utils/colorCodes";

export default function DonutChart(props) {
  const cx = 50;
  const cy = 50;
  const strokeWidth = 10;
  const radius = 30;
  const dashArray = 2 * Math.PI * radius;
  const startAngle = -90;

  let filled = 0;

  const sum = Object.values(props.data[0])
    .slice(1)
    .reduce((acc, value) => acc + value, 0);

  const ratio = 100 / sum;

  const formattedData = Object.keys(props.data[0])
    .slice(1)
    .map((key) => ({
      name: key,
      value: props.data[0][key],
      itemRatio: ratio * props.data[0][key],
    }));

  return (
    <div className="donut__chart">
      <svg width="325px" height="325px" viewBox="0 0 100 100">
        {formattedData.map((data) => {
          const itemRatio = data?.itemRatio;

          const angle = (filled * 360) / 100 + startAngle;
          const offset = dashArray - (dashArray * itemRatio) / 100;

          filled += itemRatio;

          return (
            <circle
              key={data?.name}
              cx={cx}
              cy={cy}
              r={radius}
              fill="transparent"
              strokeWidth={strokeWidth}
              stroke={colorCodes?.[data?.name]}
              strokeDasharray={dashArray}
              strokeDashoffset={offset}
              transform={`rotate(${angle} ${cx} ${cy})`}
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from={`${startAngle} ${cx} ${cy}`}
                to={`${angle} ${cx} ${cy}`}
                dur="1s"
              />
              <title>
                {data.name}: {data.value}
              </title>
            </circle>
          );
        })}
      </svg>
    </div>
  );
}
