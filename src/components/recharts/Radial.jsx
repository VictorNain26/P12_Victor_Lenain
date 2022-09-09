import { RadialBarChart, RadialBar, Legend } from "recharts";

export const DisplayRadial = ({ score }) => {
  // console.log(score);

  const data = [ {
    name: "Score",
    value: score * 100,
    fill: "#FF0000"
   } ]

  const style = {
    top: 0,
    left: 5
  };

  return (
    <RadialBarChart
      width={258}
      height={263}
      innerRadius="70%"
      endAngle={ score * 360 }
      data={ data }
    >
      <RadialBar
        label={{ fill: '#666', position: 'center' }}
        dataKey="value"
        clockWise={true}
      />
      <Legend
        iconSize={10}
        wrapperStyle={ style }
      />
    </RadialBarChart>
  );
}
