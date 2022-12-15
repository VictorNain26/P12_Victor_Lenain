import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

interface Activity {
  day: string;
  kilogram: string;
  calories: number;
}

interface Data {
  date: number;
  weight: string;
  calorie: number;
}

export const DisplayBar = ({ activity }: { activity: Activity[] }) => {
  const data: Data[] = activity.map((data: Activity) => {
    return {
      "date": new Date(data.day).getDate(),
      "weight": data.kilogram,
      "calorie": data.calories
    }
  })

  return (
    <BarChart width={ 835 } height={ 320 } data={ data } margin={{ top: 5, right: 30, left: 20, bottom: 10}} barSize={7} barGap={8} >
      <CartesianGrid vertical={ false } strokeDasharray="1 1" />
      <XAxis dataKey="date" tickLine={ false } tickMargin={ 20 } />
      <YAxis orientation="right" axisLine={ false } tickLine={ false } tickMargin={ 30 } />
      <Tooltip />
      <Legend verticalAlign="top" align="right" iconType="circle" iconSize={ 8 } margin={{ top: 50, left: 0, right: 300, bottom: 50 }} />
      <Bar dataKey="weight" name="Poids (kg)" fill="#282D30" barSize={7} legendType="circle" radius={[10, 10, 0, 0]} />
      <Bar dataKey="calorie" name="Calories brûlées (kCal)" fill="#E60000" barSize={7} legendType="circle" radius={[10, 10, 0, 0]} />
    </BarChart>
  )
}
