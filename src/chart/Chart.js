import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	ResponsiveContainer,
	YAxis,
	Tooltip,
	CartesianGrid,
} from "recharts";

const Chart = () => {
	const data = [
		{
			name: "Page A",
			question: 4000,
			mark: 2400,
			amt: 2400,
		},
		{
			name: "Page B",
			question: 3000,
			mark: 1398,
			amt: 2210,
		},
		{
			name: "Page C",
			question: 2000,
			mark: 9800,
			amt: 2290,
		},
		{
			name: "Page D",
			question: 2780,
			mark: 3908,
			amt: 2000,
		},
		{
			name: "Page E",
			question: 1890,
			mark: 4800,
			amt: 2181,
		},
		{
			name: "Page F",
			question: 2390,
			mark: 3800,
			amt: 2500,
		},
		{
			name: "Page G",
			question: 3490,
			mark: 4300,
			amt: 2100,
		},
	];
	return (
		<div className="text-center mx-auto mt-10">
			<LineChart
				width={800}
				height={400}
				data={data}
				margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
				className="mx-auto"
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="mark" />
				<YAxis />
				<Tooltip />
				<Line type="monotone" dataKey="mark" stroke="#8884d8" />
				<Line type="monotone" dataKey="question" stroke="#8884d8" />
			</LineChart>
		</div>
	);
};

export default Chart;
