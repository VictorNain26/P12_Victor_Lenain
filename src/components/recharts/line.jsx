import { LineChart, Line, XAxis, Tooltip} from "recharts";

export const DisplayLine = ({ averageSessions }) => {
  // console.log(averageSessions);

  const data = [
    {
      "name": "Page A",
      "value": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "value": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "value": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "value": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "value": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "value": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "value": 4300,
      "amt": 2100
    }
  ]

  return (
    <LineChart width={258} height={263} data={ data }
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <XAxis dataKey="value" />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="white" />
    </LineChart>
  )
}
