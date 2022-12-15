import { RadarChart, Radar, PolarGrid, PolarAngleAxis } from "recharts";

interface Performance {
  value: number;
  kind: number;
}

export const DisplayRadar = ({ performances, kind }: { performances: Performance[], kind: string[] }) => {
  const data = performances.map((performance) => {
    return {
      "subject": kind[performance.kind],
      "value": performance.value,
    }
  })

  return (
    <RadarChart outerRadius="80%" cx="50%" cy="50%" width={258} height={263} data={ data } margin={{ top: 20, right: 20, left: 20, bottom: 20}}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" stroke="white" style={{ fontSize: "11px" }} />
      <Radar dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
    </RadarChart>
  );
}
