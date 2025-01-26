import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { time: "6 AM", fixed: 5, tracker: 8 },
  { time: "9 AM", fixed: 20, tracker: 30 },
  { time: "12 PM", fixed: 50, tracker: 75 },
  { time: "3 PM", fixed: 40, tracker: 60 },
  { time: "6 PM", fixed: 15, tracker: 22 },
];

const SolarBarGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis label={{ value: "Energy Output (kWh)", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="fixed" fill="#FFD700" name="Fixed Panel Output" />  
        <Bar dataKey="tracker" fill="#008000" name="Solar Tracker Output" /> 
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SolarBarGraph;
