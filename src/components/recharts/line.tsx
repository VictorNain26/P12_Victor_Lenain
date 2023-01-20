import { LineChart, Line, XAxis, Tooltip } from "recharts";

interface AverageSessions {
  day: number;
  sessionLength: number;
}

export const DisplayLine = ({ averageSessions }: { averageSessions: AverageSessions[] }) => {
  const daysMap: { [key: string]: string } = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };

  const data = averageSessions.map((session) => {
    return {
      "subject": daysMap[session.day],
      "value": session.sessionLength,
    }
  })

  const TooltipStyle = ({ data }: { data: AverageSessions[] }) => {
    console.log(data);

    if (data && data.length) {
      return (
        <div className="flex items-center bg-white py-3 px-1 text-black text-xs font-medium border-0">
          <p>{data[0].sessionLength} min</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="relative">
      <span className="absolute text-white opacity-50 text-base mt-8 ml-8">Durée moyenne des</span>
      <span className="absolute text-white opacity-50 text-base mt-14 ml-8">sessions</span>

      <LineChart
        width={258}
        height={263}
        data={ data }
        margin={{ top: 100, bottom: 10 }}
      >
        <XAxis dataKey="subject" tickLine={false} axisLine={false} padding={{ left: 20, right: 20 }} stroke="white" />
        <Tooltip content={<TooltipStyle data={averageSessions} />} />
        <Line type="monotone" dataKey="value" stroke="white" dot={false} />
      </LineChart>
    </div>
  )
}
