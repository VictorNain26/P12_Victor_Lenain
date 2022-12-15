import { RadialBarChart, RadialBar, Legend } from "recharts";

export const DisplayRadial = ({ score }: { score: number }) => {
  const data = [ {
    value: score * 100,
    fill: "#FF0000"
   } ]

   const renderLegend = () => {
    return (
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl">
          {data[0].value} %
        </span>

        <span>de votre</span>
        <span>objectif</span>
      </div>
    );
  };

  return (
    <div className="relative">
      <h3 className="absolute mt-8 ml-8">Score</h3>

      <RadialBarChart
        width={258}
        height={263}
        innerRadius="70%"
        startAngle={90}
        endAngle={ score * 360 }
        data={ data }
      >
        <RadialBar
          dataKey="value"
          cornerRadius={10}
        />
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          content={renderLegend}
        />
      </RadialBarChart>
    </div>
  );
}
