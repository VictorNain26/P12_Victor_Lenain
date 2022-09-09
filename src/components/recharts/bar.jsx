import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

export const DisplayBar = ({ activity }) => {
  const data = activity.map((data) => {
    return {
      "date": new Date(data.day).getDate(),
      "weight": data.kilogram,
      "calorie": data.calories
    }
  })

  return (
    <BarChart width={ 835 } height={ 320 } data={ data }>
      <CartesianGrid vertical={ false } strokeDasharray={ 2 } />
      <XAxis dataKey="date" tickLine={ false } tickMargin={ 20 } />
      <YAxis orientation="right" axisLine={ false } tickLine={ false } tickMargin={ 30 } />
      <Tooltip />
      <Legend verticalAlign="top" align="right" iconType="circle" iconSize={ 8 } />
      <Bar dataKey="weight" name="Poids (kg)" fill="#282D30" />
      <Bar dataKey="calorie" name="Calories brûlées (kCal)" fill="#E60000" />
    </BarChart>
  )
}
