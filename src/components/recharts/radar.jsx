import { RadarChart, Radar, PolarGrid, PolarAngleAxis } from "recharts";

export const DisplayRadar = ({ performance, kind }) => {
  // console.log(performance, kind);

  const data = [
    {
      "subject": "Intensité",
      "value": 120,
    },
    {
      "subject": "Vitesse",
      "value": 98,
    },
    {
      "subject": "Force",
      "value": 86,
    },
    {
      "subject": "Endurance",
      "value": 99,
    },
    {
      "subject": "Energie",
      "value": 85,
    },
    {
      "subject": "cardio",
      "value": 65,
    }
  ]

  return (
    <RadarChart outerRadius={90} width={258} height={263} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" stroke="white" />
      <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
    </RadarChart>
  );
}
